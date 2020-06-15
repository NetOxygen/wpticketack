import { ComponentsLoader } from './components/Core';
import { BookingForm, ScreeningsList } from './components/Booking';
import { ArticleForm } from './components/BuyArticle';
import { Cart, CartIcon } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Carousel, Loading, YoutubeVideo } from './components/Media';
import { BuyForm } from './components/Pass';
import { Filter as PeopleFilter } from './components/People';
import { BookabilityState } from './components/Program';
import { Filter as ProgramFilter } from './components/Program';
import { FilterRows as ProgramFilterRows } from './components/Program';
import { Filters as ProgramFilters } from './components/Program';
import { PlusMinus } from './components/Ui';
import { UserConnect } from './components/User';

import '../styles/main.scss';

const loader = new ComponentsLoader();

loader.registerComponent('Booking/Form', BookingForm);
loader.registerComponent('Booking/ScreeningsList', ScreeningsList);
loader.registerComponent('BuyArticle/Form', ArticleForm);
loader.registerComponent('Cart/Cart', Cart);
loader.registerComponent('Cart/CartIcon', CartIcon);
loader.registerComponent('Checkout/Checkout', Checkout);
loader.registerComponent('Media/Carousel', Carousel);
loader.registerComponent('Media/Loading', Loading);
loader.registerComponent('Media/YoutubeVideo', YoutubeVideo);
loader.registerComponent('Pass/BuyForm', BuyForm);
loader.registerComponent('People/Filter', PeopleFilter);
loader.registerComponent('Program/BookabilityState', BookabilityState);
loader.registerComponent('Program/Filter', ProgramFilter);
loader.registerComponent('Program/FilterRows', ProgramFilterRows);
loader.registerComponent('Program/Filters', ProgramFilters);
loader.registerComponent('Ui/PlusMinus', PlusMinus);
loader.registerComponent('User/UserConnect', UserConnect);

loader.attach();
