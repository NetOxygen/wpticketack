<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * User account profile content
 * This template will be parsed by underscore.js
 *
 * Input: {
 *   "user": { ... },
 *   "tickets": [ ... ],
 *   "orders": [ ... ],
 * }
 */
$app = TKTApp::get_instance();
$requested_fields  = explode(',', $app->get_config('registration.requested_fields'));
$required_fields   = explode(',', $app->get_config('registration.required_fields'));

if (!function_exists('r')) {
    function r($required_fields, $field) {
        return in_array($field, $required_fields) ? 'required' : '';
    }
}
?>

<div id="tkt-user-account-content-profile" class="tkt-wrapper">
    <div class="row">
      <div class="col">
        <form id="tkt-user-account-profile-form">
          <?php if (!empty($requested_fields)) : ?>
          <fieldset id="registration-fields">
            <div class="row">
              <?php if (in_array('firstname', $requested_fields)) : ?>
              <div id="field-wrapper-firstname" class="field-wrapper col-md-6" style="display: block;">
                <div class="form-group">
                   <label class="<?= r($required_fields, 'firstname') ?>" for="firstname"><?= tkt_t("Prénom"); ?></label>
                   <input name="user[contact][firstname]" type="text" class="tkt-input form-control data-field" id="firstname" placeholder="<?= tkt_t("Votre prénom") ?>" <?= r($required_fields, 'firstname') ?> value="<%= user.contact.firstname %>"/>
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('lastname', $requested_fields)) : ?>
              <div id="field-wrapper-lastname" class="field-wrapper col-md-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'lastname') ?>" for="lastname"><?= tkt_t("Nom"); ?></label>
                  <input name="user[contact][lastname]" type="text" class="tkt-input form-control data-field" id="lastname" placeholder="<?= tkt_t("Votre nom") ?>" <?= r($required_fields, 'lastname') ?> value="<%= user.contact.lastname %>" />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('company', $requested_fields)) : ?>
              <div id="field-wrapper-company" class="field-wrapper col-md-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'company') ?>" for="company"><?= tkt_t("Société"); ?></label>
                  <input name="user[contact][company]" type="text" class="tkt-input form-control data-field" id="company" placeholder="<?= tkt_t("Votre société") ?>" <?= r($required_fields, 'company') ?> value="<%= user.contact.company %>" />
                </div>
              </div>
              <?php endif; ?>

              <div id="field-wrapper-email" class="field-wrapper col-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'email') ?>" for="email"><?= tkt_t("Adresse e-mail"); ?></label>
                  <input name="user[contact][email]" type="email" class="tkt-input form-control data-field" id="email" placeholder="<?= tkt_t("Votre adresse e-mail") ?>" <?= r($required_fields, 'email') ?> readonly value="<%= user.contact.email %>" />
                </div>
              </div>

              <?php if (in_array('address', $requested_fields)) : ?>
              <div id="field-wrapper-address" class="field-wrapper form-group col-12">
                <label class="<?= r($required_fields, 'address') ?>" for="address"><?= tkt_t("Adresse"); ?></label>
                <textarea name="user[contact][address][street]" class="tkt-input form-control data-field" id="street" placeholder="<?= tkt_t("Votre adresse") ?>" <?= r($required_fields, 'address') ?>><%= (user.contact.address || {}).street %></textarea>
              </div>
              <?php endif; ?>

              <?php if (in_array('zip', $requested_fields)) : ?> <div id="field-wrapper-zip" class="field-wrapper col-md-6">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'zip') ?>" for="zip"><?= tkt_t("Numéro postal"); ?></label>
                  <input name="user[contact][address][zip]" type="text" class="tkt-input form-control data-field" id="zip" placeholder="<?= tkt_t("NPA") ?>" <?= r($required_fields, 'zip') ?> value="<%= (user.contact.address || {}).zip %>" />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('city', $requested_fields)) : ?>
              <div id="field-wrapper-city" class="field-wrapper col-md-6">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'city') ?>" for="city"><?= tkt_t("Ville"); ?></label>
                  <input name="user[contact][address][city]" type="text" class="tkt-input form-control data-field" id="city" placeholder="<?= tkt_t("Ville") ?>" <?= r($required_fields, 'city') ?> value="<%= (user.contact.address || {}).city %>" />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('country', $requested_fields)) : ?>
              <div id="field-wrapper-country" class="field-wrapper form-group col-12">
                <label class="<?= r($required_fields, 'country') ?>" for="country"><?= tkt_t("Pays"); ?></label>
                <select name="user[contact][address][country]" id="country" class="tkt-input form-control data-field" <?= r($required_fields, 'country') ?>>
                  <option value=""></option>
                  <?php foreach (tkt_get_countries() as $country) : ?>
                  <option value="<?= $country[TKT_LANG] ?>" <%= "<?= $country[TKT_LANG] ?>" == (user.contact.address || {}).country ? 'selected' : '' %>><?= $country[TKT_LANG] ?></option>
                  <?php endforeach; ?>
                </select>
              </div>
              <?php endif; ?>

              <?php if (in_array('phone', $requested_fields)) : ?>
              <div id="field-wrapper-phone" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'phone') ?>" for="phone"><?= tkt_t("Téléphone fixe"); ?></label>
                <input name="user[contact][phone]" type="tel" class="tkt-input form-control data-field" id="phone" placeholder="<?= tkt_t("Votre numéro de téléphone") ?>" <?= r($required_fields, 'phone') ?> value="<%= user.contact.phone %>" />
              </div>
              <?php endif; ?>

              <?php if (in_array('cellphone', $requested_fields)) : ?>
              <div id="field-wrapper-cellphone" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'cellphone') ?>" for="cellphone"><?= tkt_t("Téléphone portable"); ?></label>
                <input name="user[contact][cellphone]" type="tel" class="tkt-input form-control data-field" id="cellphone" placeholder="<?= tkt_t("Votre numéro de téléphone") ?>" <?= r($required_fields, 'cellphone') ?> value="<%= user.contact.cellphone %>" />
              </div>
              <?php endif; ?>

              <?php if (in_array('birthdate', $requested_fields)) : ?>
              <div id="field-wrapper-birthdate" class="col-md-6 field-wrapper form-group">
                <label class="required" for="birthdate"><?= tkt_t('Date de naissance') ?></label>
                <input name="user[contact][birthdate]" type="text" class="tkt-input form-control data-field" id="birthdate" data-component="Form/Calendar" placeholder="<?= tkt_t("Date de naissance") ?>" required data-alt-format="<?= tkt_t('j F Y') ?>" data-default-date="<%= user.contact.birthdate %>" />
              </div>
              <?php endif; ?>

              <?php if (in_array('age', $requested_fields)) : ?>
              <div id="field-wrapper-age" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'age') ?>" for="age"><?= tkt_t("Âge"); ?></label>
                <select name="user[contact][age]" id="age" class="tkt-input form-control data-field" <?= r($required_fields, 'age') ?>>
                  <option value=""></option>
                  <?php foreach (tkt_get_ages() as $age) : ?>
                  <option value="<?= $age ?>" <%= '<?= $age ?>' == user.contact.age ? 'selected' : ''%>><?= $age ?></option>
                  <?php endforeach; ?>
                </select>
              </div>
              <?php endif; ?>

              <?php if (in_array('sex', $requested_fields)) : ?>
              <div id="field-wrapper-sex" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'sex') ?>" for="sex"><?= tkt_t("Genre"); ?></label>
                <select name="user[contact][sex]" id="sex" class="tkt-input form-control data-field" <?= r($required_fields, 'sex') ?>>
                  <option value=""></option>
                  <?php foreach (tkt_get_sexes() as $value => $label) : ?>
                  <option value="<?= $value ?>" <%= '<?= $value ?>' == user.contact.sex ? 'selected' : ''%>><?= $label ?></option>
                  <?php endforeach; ?>
                </select>
              </div>
              <?php endif; ?>

              <div class="col-md-12">
                  <p id="notice-required" class="small"><?= tkt_t('Tous ces champs sont requis') ?></p>
              </div>

              <div class="col-md-12 small text-center mt-3"><?= tkt_t('Si vous souhaitez changer votre mot de passe, remplissez les champs ci-dessous.') ?></div>
              <div id="field-wrapper-password" class="field-wrapper col-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'password') ?>" for="password"><?= tkt_t("Nouveau mot de passe"); ?></label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                    <input name="user[password]" type="password" class="tkt-input form-control data-field" id="password" placeholder="<?= tkt_t("Nouveau mot de passe") ?>"  />
                  </div>
                </div>
              </div>
              <div id="field-wrapper-password" class="field-wrapper col-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'password') ?>" for="password2"><?= tkt_t("Confirmation de votre mot de passe"); ?></label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                    <input name="user[password2]" type="password" class="tkt-input form-control data-field" id="password2" placeholder="<?= tkt_t("Saisissez une deuxième fois votre nouveau mot de passe") ?>" />
                  </div>
                </div>
              </div>

            </div>
          </fieldset>
          <?php endif; ?>

          <fieldset id="tkt-user-account-profile-submit" >
            <div id="submit-section" class="row">
              <div class="col-md-12 text-center mt-3">
                <button type="submit" class="submit-button button">
                  <span class="fa fa-check"></span> <?= tkt_t('Modifier mes informations') ?>
                </button>
              </div>
            </div>
          </fieldset>

        </form>
      </div>
    </div>
</div>
