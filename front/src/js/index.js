import { ComponentsLoader } from './components/Core';
import { BookingForm, ScreeningsList } from './components/Booking';
import { BookingWizard } from './components/BookingWizard';
import { ArticleForm, AddArticleToCartButton } from './components/BuyArticle';
import { Cart, CartIcon, CartItems, CartSummary } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Carousel, Loading, YoutubeVideo } from './components/Media';
import { BuyForm } from './components/Pass';
import { Filter as PeopleFilter } from './components/People';
import { BookabilityState } from './components/Program';
import { Filter as ProgramFilter } from './components/Program';
import { FilterRows as ProgramFilterRows } from './components/Program';
import { Filters as ProgramFilters } from './components/Program';
import { PlusMinus } from './components/Ui';
import { Tippy } from './components/Ui';
import { UserRegister, UserLogin, UserAccount } from './components/User';
import { Calendar, ImageDataUrl } from './components/Form';
import { Shop } from './components/Shop';
import { TicketConnect } from './components/Ticket';
import { PantaflixPlayer } from './components/Pantaflix';

import '../styles/main.scss';

const loader = new ComponentsLoader();

loader.registerComponent('Booking/Form', BookingForm);
loader.registerComponent('BookingWizard/Wizard', BookingWizard);
loader.registerComponent('Booking/ScreeningsList', ScreeningsList);
loader.registerComponent('BuyArticle/Form', ArticleForm);
loader.registerComponent('BuyArticle/AddToCartButton', AddArticleToCartButton);
loader.registerComponent('Cart/Cart', Cart);
loader.registerComponent('Cart/CartIcon', CartIcon);
loader.registerComponent('Cart/CartItems', CartItems);
loader.registerComponent('Cart/CartSummary', CartSummary);
loader.registerComponent('Form/Calendar', Calendar);
loader.registerComponent('Form/ImageDataUrl', ImageDataUrl);
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
loader.registerComponent('Ui/Tippy', Tippy);
loader.registerComponent('User/UserLogin', UserLogin);
loader.registerComponent('User/UserAccount', UserAccount);
loader.registerComponent('User/UserRegister', UserRegister);
loader.registerComponent('Shop/Shop', Shop);
loader.registerComponent('Ticket/TicketConnect', TicketConnect);
loader.registerComponent('Pantaflix/Player', PantaflixPlayer);

loader.attach();
