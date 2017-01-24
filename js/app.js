   function themeSelected() {
       $('#color').val('');
       $('#design').on('change', function() {
           var theme = $(this).val();
           console.log(theme);

           if (theme === 'js puns') {
               $('#color').val('cornflowerblue');
               $('#colors-js-puns').find('.js-pun').removeClass('is-hidden');
               $('#colors-js-puns').find('.heart-js').addClass('is-hidden');

           } else if (theme === 'heart js') {
               $('#color').val('tomato');
               $('#colors-js-puns').find('.heart-js').removeClass('is-hidden');
               $('#colors-js-puns').find('.js-pun').addClass('is-hidden');
               // }
           } else {
               $('#color').val('');
           }
       });
       return;
   }
   //shows the other hiddne input field

   function titleIn() {
       $('#title').on('change', function() {
           var title = $(this).val();
           console.log(title);
           if (title === 'other') {
               $('.other-title').removeClass('is-hidden');
           } else {
               $('.other-title').addClass('is-hidden');
           }
       });
       return;
   }
   //this does the input select logic
   function selected() {
       $('.activities input:checkbox').change('click', function() {

           $target = $(this).data("time");

           if ($target === "nine") {
               if (this.checked) {
                   $(this).removeClass('nine');
                   $(this).prop('disabled', false);
                   $(".nine").prop('disabled', true);
                   $(".nine").parent().addClass('disabled');
                 
               } else if (!this.checked) {
                   $(this).addClass('nine');
                   $(".nine").prop('disabled', false);
                   $(".nine").parent().removeClass('disabled');
                   $('.first').parent().removeClass('disabled');
                   $('.first').prop('disabled', false);
               }
           } else if ($target === "one") {

               if (this.checked) {
                   $(this).removeClass('one');
                   $(this).prop('disabled', false);
                   $(".one").prop('disabled', true);
                   $(".one").parent().addClass('disabled');
              
               } else if (!this.checked) {
                   $(this).addClass('one');
                   $(".one").prop('disabled', false);
                   $(".one").parent().removeClass('disabled');
                   $('.first').parent().removeClass('disabled');
                   $('.first').prop('disabled', false);

               }
           };
           //logic for value
           if ($('input[name="all"]:checked').length > 0 === true) {
               $('.total').text('$200.00');
           } else if ($('input[name="all"]:checked').length > 0 === false || $('input[data-time="one"]:checked').length > 0 && $('input[data-time="nine"]:checked').length > 0 === false) {
               $('.total').empty();
           };

           if ($('input[data-time="one"]:checked').length > 0 || $('input[data-time="nine"]:checked').length > 0 === true) {
               $('.total').empty();
               $('.total').text('$100.00');

           };
           if ($('input[data-time="one"]:checked').length > 0 && $('input[data-time="nine"]:checked').length > 0 === true) {
               $('.total').empty();
               $('.total').text('$200.00');

           }
           if ($('input[data-time="one"]:checked').length > 0 & $('input[name="all"]:checked').length > 0 === true || $('input[data-time="nine"]:checked').length > 0 & $('input[name="all"]:checked').length > 0 === true) {
               $('.total').empty();
               $('.total').text('$300.00');

           }
           if ($('input[data-time="one"]:checked').length > 0 & $('input[data-time="nine"]:checked').length > 0 & $('input[name="all"]:checked').length > 0 === true) {
               $('.total').empty();
               $('.total').text('$400.00');

           }
       })
   }

   function ccCard() {
       $('#payment').on('change', function() {
           var checkCC = $('.credit_card').is(':selected');
           var payPal = $('.paypal').is(':selected');
           var bitCoin = $('.bitcoin').is(':selected');

           if (checkCC) {
               console.log('cc');
               $('.PayPal').addClass('is-hidden');
               $('.bitCoin').addClass('is-hidden');
               $('.credit-card').removeClass('is-hidden');
           } else if (bitCoin) {
               console.log('bit')
               $('.bitCoin').removeClass('is-hidden');
               $('.PayPal').addClass('is-hidden');
               $('.credit-card').addClass('is-hidden');
           } else if (payPal) {
               console.log('pp');
               $('.PayPal').removeClass('is-hidden');
               $('.bitCoin').addClass('is-hidden');
               $('.credit-card').addClass('is-hidden');
           } else {
               $('.PayPal').addClass('is-hidden');
               $('.bitCoin').addClass('is-hidden');
               $('.credit-card').removeClass('is-hidden');
           }

       });
   };

   titleIn();
   themeSelected();
   selected();
   ccCard()

   //form validation when submtited
   function OptionCheck() {
       $('.tree-form').submit(function(event) {
           /* Act on the event */
           event.preventDefault();
           if ($('input[type=checkbox]:checked').length > 0 === false) {
               $('.ActivityError').removeClass('is-hidden')
           } else if ($('input[type=checkbox]:checked').length > 0 === true) {
               $('.ActivityError').addClass('is-hidden')
           }
       });

   };
   OptionCheck();
   $("#name").focus();
