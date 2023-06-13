<?php

use Ticketack\WP\Templates\TKTTemplate;

/**
 * Ticket view template
 *
 * Input:
 * $data: {
 *   "_id": "12345678-1234-1234-4321-123456789012"
 * }
 */
?>
<div
    class="tkt-wrapper"
    data-component="Ticket/TicketView"
    data-ticket-id="<?= $data->ticket_id ?>"
></div>

<?= TKTTemplate::render('ticket/ticket', (object)[]) ?>
