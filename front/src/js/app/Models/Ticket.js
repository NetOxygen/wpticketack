/**
 * Ticket model
 */
define(
    ['module', 'underscore', 'moment', 'app/Models/Base'],
    function dependencies(module, _, moment, BaseModel) {

    Ticket.type = 'ticket';

    /**
     * Constructor
     *
     * @param {Object} ticket like returned from the engine
     */
    function Ticket(ticket) {
        BaseModel.call(this, ticket);
        ticket = ticket || {};

        _.mapObject(ticket, (val, key) => {
            this[key] = val;
        });

        if (this.bookings) {
          this.bookings            = this.bookings.map((b) => {
              b.created_at         = moment(b.created_at);
              b.confirmed_at       = moment(b.confirmed_at);
              b.expire_at          = moment(b.expire_at);
              b.screening_start_at = moment(b.screening_start_at);
              b.screening_stop_at  = moment(b.screening_stop_at);

              return b;
          });
        }
    }

    return Ticket;
});
