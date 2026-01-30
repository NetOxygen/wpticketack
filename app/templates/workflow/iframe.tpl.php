<?php

if (!defined('ABSPATH')) exit;

use Ticketack\WP\TKTApp;

/**
 * Workflow runner iframe template
 * This template will be parsed by underscore.js
 *
 * @templateVersion 2.98.0
 *
 * Input: {
 *   "url": string
 * }
 *

 */
?>
<div class="tkt-workflow-runner-wrapper">
    <div class="loader" data-component="Media/Loading" data-size-sm data-align-center></div>
    <iframe
        class="workflow_iframe"
        frameborder="0"
        width="100%"
        height="0"
        src="<%= url %>"
    ></iframe>
</div>
