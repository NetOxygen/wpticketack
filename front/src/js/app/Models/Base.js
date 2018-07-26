/**
 * Base model
 */
define( ['module', 'underscore', 'postal', 'csrf'], function dependencies(module, _, postal, csrf) {

    /**
     * Constructor
     *
     * @param {Object} data with the following key
     *  - {UUID}   id/_id
     */
    function Base(data) {
        this.id  = (data || {}).id;
        this._id = (data || {})._id;

        // DOM binded element
        this.$element = null;
    }

    Base.ACTION_LIST   = "list";
    Base.ACTION_CREATE = "create";
    Base.ACTION_UPDATE = "update";
    Base.ACTION_DELETE = "delete";

    /**
     * Get all entities for a given type
     * @param {string} lowercase entity type
     * @param {string} base endpoint url
     * @param {object} url query params
     * @param callback
     *  A callable function to call when all entities are returned by the server
     */
    Base.all = function all(type, url, params, callback) {
        url += '/format/json';
        for(var param in params) {
            url += '/' + param + '/' + params[param];
        }

        $.ajax({
            url: url,
            method: 'GET'
        }).done(function fetchSuccess(data) {
            var key = type + 's';
            if (!_.isArray(data.rsp[key]) || _.isEmpty(data.rsp[key]))
                return (callback && callback(null, []));

            return (callback && callback(null, data.rsp[key]));
        }).fail(function blocFetchFail() {
            postal.publish({
                topic: 'model.' + type + '.list.error'
            });
            return (callback && callback(new Error("Can not fetch list")));
        });
    };

    Base.prototype = {
        /**
         * Check if a model is new
         * @return {boolean}
         */
        isNew: function () {
            return
                (_.isNull(this.id) || _.isEmpty(this.id)) &&
                (_.isNull(this.__id) || _.isEmpty(this.id));
        },

        /**
         * Bind this model to a DOM element
         * @param {DOM Element} $element
         */
        bindTo: function ($element) {
            if (_.isEmpty(this.getId()))
                return false;

            this.$element = $element;

            // inject model id in DOM element
            this.$element.attr('data-model-id', this.getId());

            // Set UI field values using this bloc fields values
            this._setUiValues();
            // Print values in DOM elements having data-model-print attribute
            this._print();
        },

        /**
         * Set this model values from the binded DOM element
         */
        sync: function () {
            if (_.isEmpty(this.$element))
                return false;

            // Set this model fields values using DOM elements values
            this._getValuesFromUi();
            // Print values in DOM elements having data-model-print attribute
            this._print();
        },

        _getValuesFromUi: function() {
            _.map($("[data-model]", this.$element), (field) => {
                let $field = $(field);
                let editor = $field.attr('data-editor');

                // set this model attributes with the field values
                if (editor == "summernote")
                    this[$field.attr("data-model")] = $field.summernote("code");
                else
                    this[$field.attr("data-model")] = $field.val();

            });

        },

        _setUiValues: function() {
            _.map($("[data-model]", this.$element), (field) => {
                let $field = $(field);

                // set field value with the model value
                $field.val(this[$field.attr("data-model")]);

                // ask the model to sync on each field change
                $field.on('change', (e) => {
                    this.sync()
                    this.save();
                });
            });
        },

        /**
         * Output this entity fields values to any DOM element having a
         * data-model-print attribute
         */
        _print: function() {
            _.map($("[data-model-print]", this.$element), (output) => {
                let $output = $(output);
                $output.html(this[$output.attr("data-model-print")]);
            });
        },

        /**
         * @returns {UUID}
         */
        getId: function() {
            return this.id || this._id;
        },

        /**
         * @param {UUID} id
         */
        setId: function (id) {
            this.id  = id;
            this._id = _id;
        },

        getEndPointUrl : function (action) {
            // to be overrided in subclasses
            return null;
        },

        getType : function (action) {
            // to be overrided in subclasses
            return "entity";
        },

        /**
         * Save the entity.
         * If the entity is new, we create it, else we save it.
         */
        save: function () {
            let callback = (err, entity) => {
                if (err)
                    return false;

                entity._setUiValues();
                entity._print();
            };

            return this.isNew() ? this._create(callback) : this._update(callback);
        },

        /**
         * Delete the entity.
         */
        destroy: function () {
            return this.isNew() ? false : this._delete((err, deleted) => {
                this.$element.fadeOut(() => this.$element.remove());
            });
        },

        /**
         * Create a new entity
         */
        _create: function create(callback) {
            var url = this.getEndPointUrl(Base.ACTION_CREATE);
            if (_.isNull(url))
                return false;

            var type = this.getType();

            url += '/format/json';
            url += '/' + csrf.param + '/' + csrf.token;

            let payload = {};
            _.map(Object.entries(this), (a) => {
                payload[a[0]] = a[1];
            });

            $.post(url, payload).done((data) => {
                _.extend(this, data.rsp[type]);

                let payload   = {};
                payload[type] = this;
                postal.publish({
                    topic: 'model.' + type + '.create',
                    data: payload
                });
                return (callback && callback(null, this));
            }).fail(function onAjaxFail() {
                let payload = {};
                payload[type] = this;
                postal.publish({
                    topic: 'model.' + type + '.create.error',
                    data: payload
                });
                return (callback && callback(new Error()));
            });
        },

        /**
         * Update an existing entity
         */
        _update: function update(callback) {
            var url = this.getEndPointUrl(Base.ACTION_UPDATE);
            if (_.isNull(url))
                return false;

            var type = this.getType();

            url += '/id/' + this.getId();
            url += '/format/json';
            url += '/' + csrf.param + '/' + csrf.token;

            let payload = {};
            _.map(Object.entries(this), (a) => {
                let key   = a[0],
                    value = a[1];
                if (key.substring(0, 1) == "$" || key == "id")
                    return;

                payload[key] = value
            });

            $.post(url, payload).done((data) => {
                _.extend(this, data.rsp[type]);

                let payload   = {};
                payload[type] = this;
                postal.publish({
                    topic: 'model.' + type + '.update',
                    data: payload
                });
                return (callback && callback(null, this));
            }).fail(function onAjaxFail() {
                let payload = {};
                payload[type] = this;
                postal.publish({
                    topic: 'model.' + type + '.update.error',
                    data: payload
                });
                return (callback && callback(new Error()));
            });
        },

        /**
         * Delete an existing entity
         */
        _delete: function update(callback) {
            var url = this.getEndPointUrl(Base.ACTION_DELETE);
            if (_.isNull(url))
                return false;

            var type = this.getType();

            url += '/id/' + this.getId();
            url += '/format/json';
            url += '/' + csrf.param +'/' + csrf.token;

            $.post(url, {}) .done((data) => {
                postal.publish({
                    topic: 'model.' + type + '.delete',
                    data: this
                });
                return (callback && callback(null, this));
            }).fail(function onAjaxFail() {
                postal.publish({
                    topic: 'model.' + type + '.delete.error',
                    data: this
                });
                return (callback && callback(new Error()));
            });
        },
    };

    return Base;
});
