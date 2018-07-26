define(
    ['components', 'jquery', 'app/Booking/Form', 'api'],
    function(components, $, BookingForm, TKTApi) {
        let $container, bookingForm;
        let mockBookingForm, mockApi, mock$;
        let fakeXHR;

        const FAKE_SCREENING_ID = '12345678-1234-1234-1234-123456789012';
        const FAKE_PRICING_ID_1 = 'fullprice';
        const FAKE_PRICING_ID_2 = 'reduced';

        beforeEach(() => {
            fakeXHR = sinon.useFakeXMLHttpRequest();

            $container = $(
                '<div ' +
                    'id="test-component" ' +
                    'data-show-on-load="false" ' +
                    'data-ids="' + FAKE_SCREENING_ID  + '" ' +
                    'data-component="BookingForm"' +
                '></div> '
            );
            $('body').append($container);

            bookingForm     = new BookingForm($container);
            bookingForm.attach();

            mockBookingForm = sinon.mock(bookingForm);
            mockApi         = sinon.mock(TKTApi);
            mock$           = sinon.mock($);
        });

        afterEach(() => {
            mockBookingForm.restore();
            mockApi.restore();
            mock$.restore();

            bookingForm.detach();
            $container.remove();

            fakeXHR.restore();
        });

        describe('BookingForm::init', () => {
            it('should init_store', () => {
                mockBookingForm.expects('init_store').once();
                bookingForm.init();
                mockBookingForm.verify();
            });
            it('should call TKTApi::getScreeningsInfo', () => {
                mockApi.expects('getScreeningsInfo')
                    .once()
                    .withArgs([FAKE_SCREENING_ID]);

                bookingForm.init();

                mockApi.verify();
            });
        });

        describe('BookingForm::process_add_to_cart', () => {
            it('should call TKTApi::addToCart', () => {
                bookingForm.init_store();
                bookingForm.data.screening_id = FAKE_SCREENING_ID;
                bookingForm.data.pricings     = [
                    { [FAKE_PRICING_ID_1] : 1},
                    { [FAKE_PRICING_ID_2] : 0},
                ];

                mockApi.expects('addToCart')
                    .once()
                    .withArgs(FAKE_SCREENING_ID, [{ [FAKE_PRICING_ID_1] : 1}]);

                bookingForm.process_add_to_cart();

                mockApi.verify();
            });
        });
    }
);
