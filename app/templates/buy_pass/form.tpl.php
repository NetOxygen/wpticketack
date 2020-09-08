<?php

use Ticketack\WP\TKTApp;

/**
 * Buy pass form template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ],
 * }
 */
?>
<div class="tkt-wrapper">
  <section class="tkt-section tkt-dark-section tkt-pass-form-section">
    <h3 class="tkt-section-title mb-3">
      <?= tkt_t("Vos informations") ?>
    </h3>
    <div class="row">
      <div class="col">
        <form>
          <fieldset>
            <div class="row">
              <div id="field-wrapper-firstname" class="field-wrapper col-md-4" style="display: block;">
                <div class="form-group">
                   <label class="required" for="firstname"><?= tkt_t("Prénom"); ?></label>
                   <input name="firstname" type="text" class="tkt-input form-control field" id="firstname" placeholder="<?= tkt_t("Votre prénom") ?>" required />
                </div>
              </div>

              <div id="field-wrapper-lastname" class="field-wrapper col-md-4" style="display: block;">
                <div class="form-group">
                  <label class="required" for="lastname"><?= tkt_t("Nom"); ?></label>
                  <input name="lastname" type="text" class="tkt-input form-control field" id="lastname" placeholder="<?= tkt_t("Votre nom") ?>" required />
                </div>
              </div>

              <div id="field-wrapper-email" class="field-wrapper col-md-4" style="display: block;">
                <div class="form-group">
                  <label class="required" for="email"><?= tkt_t("Email"); ?></label>
                  <input name="email" type="text" class="tkt-input form-control field" id="email" placeholder="<?= tkt_t("Votre email") ?>" required />
                </div>
              </div>
            </div>

            <div class="row">

              <div id="field-wrapper-address" class="field-wrapper form-group col-md-4">
                <label class="required" for="address"><?= tkt_t("Adresse"); ?></label>
                <textarea name="address" class="tkt-input form-control field" id="address" placeholder="<?= tkt_t("Votre adresse") ?>" required></textarea>
              </div>

              <div id="field-wrapper-zip" class="field-wrapper col-md-4">
                <div class="form-group">
                  <label class="required" for="zip"><?= tkt_t("Numéro postal"); ?></label>
                  <input name="zip" type="text" class="tkt-input form-control field" id="zip" placeholder="<?= tkt_t("NPA") ?>" required />
                </div>
              </div>

              <div id="field-wrapper-city" class="field-wrapper col-md-4">
                <div class="form-group">
                  <label class="required" for="city"><?= tkt_t("Ville"); ?></label>
                  <input name="city" type="text" class="tkt-input form-control field" id="city" placeholder="<?= tkt_t("Ville") ?>" required />
                </div>
              </div>
            </div>

            <div class="row">
              <div id="field-wrapper-country" class="form-group field-wrapper col-md-12" style="display: none;">
                <label class="required" for="country"><?= tkt_t("Pays"); ?></label>
                <select name="country" id="country" class="tkt-input form-control field" required>
                </select>
              </div>
            </div>

            <div class="row">
              <div id="field-wrapper-age" class="col-md-12 field-wrapper form-group" style="display: none;">
                <label class="required" for="age"><?= tkt_t('Âge') ?></label>
                <select name="age" id="age" class="tkt-input form-control field" required>
                  <option value=""></option>
                  <?php
                    $ages     = tkt_get_ages();
                    foreach ($ages as $age) {
                        echo '<option value="'.$age.'">'.$age.'</option>';
                    }
                  ?>
                </select>
              </div>
            </div>

            <div class="row">
              <div id="field-wrapper-sex" class="col-md-12 field-wrapper form-group" style="display: none;">
                <label class="required" for="sex"><?= tkt_t('Genre') ?></label>
                <select name="sex" id="sex" class="tkt-input form-control field" required>
                  <option value=""></option>
                    <?php
                      $sexes = tkt_get_sexes();
                      foreach ($sexes as $sex_key => $sex_value) {
                          echo '<option value="'.$sex_key.'>'.$sex_value.'</option>';
                      }
                    ?>
                </select>
              </div>
            </div>

            <div class="row">
              <div id="field-wrapper-photo" class="col-md-12 field-wrapper form-group" style="display: none;">
                  <label class="required" for="photo"><?= tkt_t('Photo') ?></label>
                  <div>
                      <small><?= tkt_t("Sans photo, une pièce d'identité sera systématiquement demandée à l'entrée des salles et aux caisses."); ?></small>
                  </div>
                  <input name="photo" type="file" class="tkt-input form-control field" id="photo" accept="image/*" data-component="Form/ImageDataUrl" required>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div id="submit-section" class="row">
              <div class="col-md-12 text-right">
                <p id="notice-required" class="small"><?= tkt_t('Tous ces champs sont requis') ?></p>
                <button type="submit" class="button active btn-block" data-redirect="<?= tkt_checkout_url() ?>">
                  <i class="glyphicon glyphicon-shopping-cart"></i><?= tkt_t("Ajouter au panier") ?>
                </button>
              </div>
            </div>
          </fieldset>
          <div class="row mt-2">
              <div class="col-md-12 alert alert-success"></div>
              <div class="col-md-12 alert alert-danger"></div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
