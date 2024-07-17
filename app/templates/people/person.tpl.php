<?php
/**
 * Person template
 *
 * Input:
 * $data: { ... }
 */

$photo = null;

if ($data['photos'][0]) {
    $photo = json_decode($data['photos'][0])[0];
}
?>
<div class="row tkt-person-about">
    <div class="col-sm-4 tkt-person-photo">
    <?php if ($photo) : ?>
        <img src="<?php echo tkt_img_proxy_url($photo) ?>" alt="<?php echo the_title(); ?>">
    <?php endif;?>
    </div>
    <div class="col-sm-8 tkt-person-info">
        <h3><?php echo the_title(); ?></h3>
        <div class="row">
            <div class="col-12 tkt-person-profession"><?php echo $data['profession'][0] ?></div>
            <div class="col-12 tkt-person-company"><?php echo $data['company'][0] ?></div>
            <div class="col-12 tkt-person-country"><?php echo $data['country'][0] ?></div>
        </div>
    </div>
</div>
