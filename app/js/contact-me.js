$(document).ready(function(){
   if (!Modernizr.input.placeholder){
       $("input, textarea").placeholder();
   }

});
var contact = (function () {

    var init = function(){
        _setUpListners();
    };

    //ѕрослушивает событи€
    var _setUpListners = function (){
        $('#contactMe').on('submit', _submitForm);
    };

    var _submitForm = function(e) {
        console.log('ќтправка запроса');
        e.preventDefault();

        var form = $(this),
            url = 'contact.php',
            defObf = _ajaxForm(form, url);

        //что-то будем делать с ответом сервера
    }
    var _ajaxForm = function(form, url){
        console.log('ajax запрос с проверкой');
        if (!validation.validateForm(form)) return false;
        //если false, то код ниже не будет выполнен
    };

    return {
        init:init
    };

})();

contact.init();