<?php

if (!defined('ABSPATH')) exit;

/**
 * TKTEvent template
 *
 * @templateVersion 2.92.0
 *
 * Input:
 * $data: {
 *   "tkt_event": { ... },
 *   "lang": ""
 * }
 */

$e    = $data->tkt_event;
$lang = $data->lang;

echo $e->opaque('description')[$lang] ?? '';
?>
