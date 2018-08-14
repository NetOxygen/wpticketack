<?php
/**
 * Program event template
 *
 * Input:
 * $data: {
 *   "event": { ... }
 * }
 */

$e = $data->event;

$date_title = date_to_min_s($e->start_at());
if ($e->start_at()->format('Y-m-d') != $e->stop_at()->format('Y-m-d')) {
    $dates = sprintf(
        "Du %s au %s",
        date_to_min_s($e->start_at()),
        date_to_min_s($e->stop_at())
    );
}

$ids = array_map(function ($s) {
    return $s->_id();
}, $e->screenings());

$first_poster = $e->first_poster();
?>
<div class="tkt_event">

  <?php if (!empty($first_poster)) : ?>
  <div class="row">
    <div class="col">
        <img class="d-block w-100" src="<?= $first_poster->url ?>" alt="<?= $e->localized_title_or_original('fr') ?>">
    </div>
  </div>
  <br/>
  <?php endif; ?>

  <div class="row">
    <div class="col-sm left-col text-left align-self-start">

      <div class="row">
        <div class="col">
          <span class="screening-date"><?= $date_title ?></span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="title active">
            <?= $e->localized_title_or_original('fr') ?>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span class="genre">
            <?= $e->opaque()['genre'] ?>
          </span>
        </div>
      </div>
    </div>

    <div class="col-sm right-col text-right align-self-start">
      <ul class="infos">
        <li class="website">Site officiel : www.vaiteani.fr</li>
        <li class="facebook">Facebook</li>
        <li class="twitter">Twitter</li>
        <li class="instagram">Instagram</li>
        <li class="credits">Crédit photo: Frank Loriou</li>
      </ul>
    </div>

  </div>

  <div class="row">
    <div class="col">
      <div class="synopsis">
        <span class="title assertive">
          <?= $e->localized_title_or_original('fr') ?>
        </span>
        <span class="text">
          S'asseoir tranquillement, prendre le temps et se mettre au rythme des îles de Polynésie l'espace d'une soirée. Et tout ça en plein hiver. Voici l'expérience que nous vous proposons avec Vaiteani. Quelque part dans une vallée du Pacifique sud, nichée sous les fougères arborescentes et les bougainvilliers rubiconds, se cache une source magique. On raconte qu’elle serait descendue du ciel pour nous abreuver de son chant profond et nous prendre sous sa coupe, si d’aventure on s’approchait pour la goûter. Vaiteani, c’est elle, la ‘source céleste’ en polynésien.
        </span>
      </div>
    </div>
  </div>

</div>
<link rel='stylesheet' id='sage/main.css-css'  href='https://balidra-epicentre.neto2.net/wp-content/themes/epicentre/dist/styles/main.css' type='text/css' media='all' />
<link rel='stylesheet' id='tkt-main-css-css'  href='https://balidra-epicentre.neto2.net/wp-content/plugins/wpticketack/front/build/styles/main.css?ver=4.9.7' type='text/css' media='all' />
