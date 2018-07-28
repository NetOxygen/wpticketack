<?php
/**
 * Program screening template
 *
 * Input:
 * $data: {
 *   "screening": { ... }
 * }
 */

$s = $data->screening;
$m = array_shift($s->movies());
?>
<div class="screening-inner">

  <div class="row">

    <div
      class="poster-background d-block d-md-none"
      style="background-image: url('<?= $s->first_poster()->url ?>')">
      <div class="overlay"></div>
    </div>

    <div class="col-md-9 col-sm-12 left-col">
      <div class="poster-wrapper d-none d-md-block">
        <img class="img-fluid poster" src="<?= $s->first_poster()->url ?>" />
      </div>
    </div>

    <div class="col-md-3 right-col text-right align-self-end">

      <div class="row">
        <div class="col">
          <span class="date"><?= date_to_min_s($s->start_at()) ?></span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="title">
            <a href="">
              <?= $s->localized_title_or_original('fr') ?>
            </a>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="genre">
            <?= $m->opaque()['genre'] ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="more-infos">
            <a href="">
              Plus d'informations
            </a>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="tickets" data-bookability-ids="<?= $ids ?>">
            <div class="show-when-loading" data-component="Media/Loading" data-size-sm data-align-center></div>
            <a
              class="show-if-bookable show-if almost-not-bookable"
              href="<?= screening_book_url($e) ?>">
              Billets <span class="screening-complete"></span>
            </a>
            <span class="show-if-almost-not-bookable screening-complete">Il ne reste que quelques places</span>
            <span class="show-if-not-bookable screening-complete">Complet</span>
          </span>
        </div>
      </div>

    </div>

  </div>
</div>
