<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;
use Ticketack\WP\Templates\TKTTemplate;

/**
 * Workflow runner template
 *
 * @templateVersion 2.98.0
 *
 * Input:
 * $data: {
 *   "url": string
 * }
 */
?>
<div
    class="tkt-wrapper tkt-workflow-runner"
    data-component="Workflow/Runner"
    data-url="<?php echo esc_attr($data->url) ?>"
>
</div>

<!-- Underscore.js templates used by client side -->
<script type="text/template" id="tkt-workflow-runner-iframe-tpl">
    <?php TKTTemplate::output('workflow/iframe', $data) ?>
</script>
