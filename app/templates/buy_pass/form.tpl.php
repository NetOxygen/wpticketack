<?php
/**
 * Buy pass form template
 *
 * Input:
 * $data: {
 *   "tickettypes": [ ... ]
 * }
 */
?>
<div class="tkt-wrapper">
  <div class="row">
    <div class="col">
      <form>
        <div class="row">
          <div id="field-wrapper-firstname" class="field-wrapper col-md-6" style="display: none;">
            <div class="form-group">
               <label class="required" for="user_firstname"><?= t("Prénom"); ?></label>
               <input name="user[firstname]" type="text" class="form-control field" id="user_firstname" placeholder="<?= t("Votre prénom") ?>" required />
            </div>
          </div>

          <div id="field-wrapper-lastname" class="field-wrapper col-md-6" style="display: none;">
            <div class="form-group">
              <label class="required" for="user_lastname"><?= t("Nom"); ?></label>
              <input name="user[lastname]" type="text" class="form-control field" id="user_lastname" placeholder="<?= t("Votre nom") ?>" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div id="field-wrapper-zip" class="field-wrapper col-md-6" style="display: none;">
            <div class="form-group">
              <label class="required" for="user_zip"><?= t("Numéro postal"); ?></label>
              <input name="user[zip]" type="text" class="form-control field" id="user_zip" placeholder="<?= t("NPA") ?>" required />
            </div>
          </div>

          <div id="field-wrapper-city" class="field-wrapper col-md-6" style="display: none;">
            <div class="form-group">
              <label class="required" for="user_city"><?= t("Ville"); ?></label>
              <input name="user[city]" type="text" class="form-control field" id="user_city" placeholder="<?= t("Ville") ?>" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div id="field-wrapper-address" class="field-wrapper form-group col-md-12" style="display: none;">
            <label class="required" for="user_address"><?= t("Adresse"); ?></label>
            <textarea name="user[address]" class="form-control field" id="user_address" placeholder="<?= t("Votre adresse") ?>" required></textarea>
          </div>
        </div>

        <div class="row">
          <div id="field-wrapper-country" class="form-group field-wrapper col-md-12" style="display: none;">
            <label class="required" for="user_country"><?= t("Pays"); ?></label>
            <select name="user[country]" id="user_country" class="form-control field" required>
            </select>
          </div>
        </div>

        <div class="row">
          <div id="field-wrapper-age" class="col-md-12 field-wrapper form-group" style="display: none;">
            <label class="required" for="user_age"><?= t('Âge') ?></label>
            <select name="user[age]" id="user_age" class="form-control field" required>
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
            <label class="required" for="user_sex"><?= t('Genre') ?></label>
            <select name="user[sex]" id="user_sex" class="form-control field" required>
              <option value=""></option>
                <?php
                  $sexes = get_sexes();
                  foreach ($sexes as $sex_key => $sex_value) {
                      echo '<option value="'.$sex_key.'>'.$sex_value.'</option>';
                  }
                ?>
            </select>
          </div>
        </div>

        <input type="hidden" name="user[no_photo]" value="true"/>

        <div id="submit-section" class="row">
          <div class="col-md-12 text-right">
            <p id="notice-required" class="small"><?= t('* ces champs sont requis') ?></p>
            <button type="submit" class="button active btn-block"><i class="glyphicon glyphicon-shopping-cart"></i><?= t("Ajouter au panier") ?></button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
