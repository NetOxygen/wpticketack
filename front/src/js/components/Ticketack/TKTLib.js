import { Ticketack } from '@ticketack/lib';
import { Config } from '../Core';

Ticketack
    .useLanguage(Config.get('lang'))
    .setup({
        'apiKey': Config.get('api_key'),
        'engineUri': Config.get('engine_uri'),
        'storageType': 'localStorage'
    });

export default Ticketack;
