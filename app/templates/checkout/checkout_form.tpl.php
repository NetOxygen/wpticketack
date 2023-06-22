<?php

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Checkout form template
 *
 * Input:
 * $data: {
 *   "requested_fields": ["firstname", "lastname", ... ],
 *   "required_fields": ["firstname", "lastname", ... ],
 *   "cgv_url"               : "https://...",
 *   "privacy_url"           : "https://...",
 *   "sanitary_measures_url" : "https://...",
 *   "allow_later"           : bool,
 *   "allow_proxypay"        : bool,
 *   "allow_null_payment"    : bool,
 *   "proxypay_config_error" : "str"
 * }
 */
$requested_fields  = $data->requested_fields;
$required_fields   = $data->required_fields;
$cgv_url               = $data->cgv_url;
$privacy_url           = $data->privacy_url;
$sanitary_measures_url = $data->sanitary_measures_url;
$allow_later           = $data->allow_later;
$allow_proxypay        = $data->allow_proxypay;
$allow_null_payment    = $data->allow_null_payment;
$terms_link = sprintf(
    tkt_t('J\'accepte les <a target="_blank" href="%s">conditions générales de vente</a> et la <a target="_blank" href="%s">politique de protection des données</a>'),
    $cgv_url,
    $privacy_url
);

if (!function_exists('r')) {
    function r($required_fields, $field) {
        return in_array($field, $required_fields) ? 'required' : '';
    }
}

?>

<!-- Message for proxypay configuration error -->
<?php if (!empty($data->proxypay_config_error)) : ?>
  <?= '<script>console.warn( "' .$data->proxypay_config_error. '" )</script>'; ?>
<?php endif; ?>

<div class="tkt-wrapper">
  <?php if (!$allow_later && !$allow_proxypay) : ?>
  <div class="text-center alert alert-danger payment-method-error-msg">
    <?= tkt_t("Aucun moyen de paiement configué.") ?>
  </div>
  <?php else : ?>

  <?= do_shortcode('[tkt_cart hide_links="finalize,continue"][/tkt_cart]') ?>

  <section class="tkt-section tkt-dark-section tkt-checkout-section tkt-checkout-user-data-section"></section>

  <section class="tkt-section tkt-dark-section tkt-checkout-section tkt-checkout-form-section">
    <div class="row">
      <div class="col">
        <form class="checkout-form">
          <?php if (!empty($requested_fields) || !empty($required_fields)) : ?>
          <fieldset>
            <h3 class="tkt-section-title"><?= tkt_t("Vos données de facturation") ?></h3>
            <div class="row">
              <?php if (in_array('firstname', $requested_fields) || in_array('firstname', $required_fields)) : ?>
              <div id="field-wrapper-firstname" class="field-wrapper col-md-6" style="display: block;">
                <div class="form-group">
                   <label class="<?= r($required_fields, 'firstname') ?>" for="firstname"><?= tkt_t("Prénom"); ?></label>
                   <input name="user[firstname]" type="text" class="tkt-input form-control data-field" id="firstname" placeholder="<?= tkt_t("Votre prénom") ?>" <?= r($required_fields, 'firstname') ?> />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('lastname', $requested_fields) || in_array('lastname', $required_fields)) : ?>
              <div id="field-wrapper-lastname" class="field-wrapper col-md-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'lastname') ?>" for="lastname"><?= tkt_t("Nom"); ?></label>
                  <input name="user[lastname]" type="text" class="tkt-input form-control data-field" id="lastname" placeholder="<?= tkt_t("Votre nom") ?>" <?= r($required_fields, 'lastname') ?> />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('email', $requested_fields) || in_array('email', $required_fields)) : ?>
              <div id="field-wrapper-email" class="field-wrapper col-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'email') ?>" for="email"><?= tkt_t("Adresse e-mail"); ?></label>
                  <input name="user[email]" type="email" class="tkt-input form-control data-field" id="email" placeholder="<?= tkt_t("Votre adresse e-mail") ?>" <?= r($required_fields, 'email') ?> />
                </div>
              </div>
              <div id="field-wrapper-email" class="field-wrapper col-6" style="display: block;">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'email') ?>" for="email"><?= tkt_t("Confirmation de votre adresse e-mail"); ?></label>
                  <input name="user[email2]" type="email" class="tkt-input form-control data-field" id="email2" placeholder="<?= tkt_t("Saisissez une deuxième fois votre adresse") ?>" <?= r($required_fields, 'email') ?> />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('address', $requested_fields) || in_array('address', $required_fields)) : ?>
              <div id="field-wrapper-address" class="field-wrapper form-group col-12">
                <label class="<?= r($required_fields, 'address') ?>" for="address"><?= tkt_t("Adresse"); ?></label>
                <textarea name="user[address]" class="tkt-input form-control data-field" id="address" placeholder="<?= tkt_t("Votre adresse") ?>" <?= r($required_fields, 'address') ?>></textarea>
              </div>
              <?php endif; ?>

              <?php if (in_array('zip', $requested_fields) || in_array('zip', $required_fields)) : ?> <div id="field-wrapper-zip" class="field-wrapper col-md-6">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'zip') ?>" for="zip"><?= tkt_t("Numéro postal"); ?></label>
                  <input name="user[zip]" type="text" class="tkt-input form-control data-field" id="zip" placeholder="<?= tkt_t("NPA") ?>" <?= r($required_fields, 'zip') ?> />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('city', $requested_fields) || in_array('city', $required_fields)) : ?>
              <div id="field-wrapper-city" class="field-wrapper col-md-6">
                <div class="form-group">
                  <label class="<?= r($required_fields, 'city') ?>" for="city"><?= tkt_t("Ville"); ?></label>
                  <input name="user[city]" type="text" class="tkt-input form-control data-field" id="city" placeholder="<?= tkt_t("Ville") ?>" <?= r($required_fields, 'city') ?> />
                </div>
              </div>
              <?php endif; ?>

              <?php if (in_array('country', $requested_fields) || in_array('country', $required_fields)) : ?>
              <div id="field-wrapper-country" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'country') ?>" for="country"><?= tkt_t("Pays"); ?></label>
                <select name="user[country]" id="country" class="tkt-input form-control data-field" <?= r($required_fields, 'country') ?>>
                  <option value=""></option>
                  <?php foreach (tkt_get_countries() as $country) : ?>
                  <option value="<?= $country[TKT_LANG] ?>"><?= $country[TKT_LANG] ?></option>
                  <?php endforeach; ?>
                </select>
              </div>
              <?php endif; ?>

              <?php if (in_array('phone', $requested_fields) || in_array('phone', $required_fields)) : ?>
              <div id="field-wrapper-phone" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'phone') ?>" for="phone"><?= tkt_t("Téléphone"); ?></label>
                <input name="user[phone]" type="tel" class="tkt-input form-control data-field" id="phone" placeholder="<?= tkt_t("Votre numéro de téléphone") ?>" <?= r($required_fields, 'phone') ?> />
              </div>
              <?php endif; ?>

              <?php if (in_array('cellphone', $requested_fields) || in_array('cellphone', $required_fields)) : ?>
              <div id="field-wrapper-cellphone" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'cellphone') ?>" for="cellphone"><?= tkt_t("Téléphone portable"); ?></label>
                <input name="user[cellphone]" type="tel" class="tkt-input form-control data-field" id="cellphone" placeholder="<?= tkt_t("Votre numéro de téléphone") ?>" <?= r($required_fields, 'cellphone') ?> />
              </div>
              <?php endif; ?>

              <?php if (in_array('age', $requested_fields) || in_array('age', $required_fields)) : ?>
              <div id="field-wrapper-age" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'age') ?>" for="age"><?= tkt_t("Âge"); ?></label>
                <select name="user[age]" id="age" class="tkt-input form-control data-field" <?= r($required_fields, 'age') ?>>
                  <option value=""></option>
                  <?php foreach (tkt_get_ages() as $age) : ?>
                  <option value="<?= $age ?>"><?= $age ?></option>
                  <?php endforeach; ?>
                </select>
              </div>
              <?php endif; ?>

              <?php if (in_array('birthdate', $requested_fields) || in_array('birthdate', $required_fields)) : ?>
                <div class="row">
                  <div id="field-wrapper-birthdate" class="col-md-12 field-wrapper form-group">
                    <label class="required" for="birthdate"><?= tkt_t('Date de naissance') ?></label>
                    <input name="user[birthdate]" type="text" class="tkt-input form-control data-field" id="birthdate" data-component="Form/Calendar" placeholder="<?= tkt_t("Date de naissance") ?>" required data-date-format="d.m.Y" />
                  </div>
                </div>
              <?php endif; ?>

              <?php if (in_array('sex', $requested_fields) || in_array('sex', $required_fields)) : ?>
              <div id="field-wrapper-sex" class="field-wrapper form-group col-6">
                <label class="<?= r($required_fields, 'sex') ?>" for="sex"><?= tkt_t("Genre"); ?></label>
                <select name="user[sex]" id="sex" class="tkt-input form-control data-field" <?= r($required_fields, 'sex') ?>>
                  <option value=""></option>
                  <?php foreach (tkt_get_sexes() as $value => $label) : ?>
                  <option value="<?= $value ?>"><?= $label ?></option>
                  <?php endforeach; ?>
                </select>
              </div>
              <?php endif; ?>

              <?php if (empty($cgv_url)) : ?>
              <input name="user[conditions]" value="checked" type="hidden" class="data-field">
              <?php else : ?>
              <div class="col-md-12 form-group">
                <div class="checkbox">
                  <label class="required">
                    <input name="user[conditions]" value="checked" type="checkbox" required class="data-field">
                    <?= $terms_link ?>
                  </label>
                </div>
              </div>
              <?php endif; ?>

              <div class="col-md-12">
                  <p id="notice-required" class="small"><?= tkt_t('Tous ces champs sont requis') ?></p>
              </div>

            </div>
          </fieldset>
          <?php endif; ?>

          <div class="row mt-2">
              <div class="col-12">
                <div style="display: none;" class="text-center alert alert-info info-msg"></div>
                <div style="display: none;" class="text-center alert alert-success success-msg"></div>
                <div style="display: none;" class="text-center alert alert-danger error-msg"></div>
            </div>
          </div>

          <fieldset>
            <div id="submit-section" class="row">
              <div class="col-md-12 text-right">
                <?php if ($allow_later) : ?>
                  <button type="submit" class="submit-button button later" data-payment-method="LATER_PAYMENT" data-redirect="<?= $data->redirect ?>">
                    <span class="glyphicon glyphicon-ok"></span> <?= tkt_t('Réserver (paiement sur place)') ?>
                  </button>
                <?php endif; ?>

                <?php if ($allow_proxypay) : ?>
                  <button type="submit" class="submit-button button proxypay" data-payment-method="PROXYPAY" data-redirect="<?= $data->redirect ?>">
                    <span class="glyphicon glyphicon-credit-card"></span> <?= tkt_t('Procéder au paiement') ?>
                  </button>

                  <?php if ($allow_null_payment) : ?>
                    <button type="submit" class="submit-button button null_payment" data-payment-method="NULL_PAYMENT" data-redirect="<?= $data->redirect ?>">
                      <span class="glyphicon glyphicon-credit-card"></span> <?= tkt_t('Valider') ?>
                    </button>
                  <?php endif; ?>
                <?php endif; ?>
                <input type="hidden" id="payment-method-field" name="payment_method" class="data-field" />
                <br>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
  <?php endif; ?>
</div>

<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-checkout-user-data-tpl">
    <?= TKTTEmplate::render('checkout/checkout_user_data', (object)[]) ?>
</script>
