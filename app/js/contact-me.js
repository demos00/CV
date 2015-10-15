$(document).ready(function(){
   if (!Modernizr.input.placeholder){
       $("input, textarea").placeholder();
   }

});
var contact = (function () {

    var init = function(){
        _setUpListners();
    };

    //������������ �������
    var _setUpListners = function (){
        $('#contactMe').on('submit', _submitForm);
    };

    var _submitForm = function(e) {
        console.log('�������� �������');
        e.preventDefault();

        var form = $(this),
            url = 'contact.php',
            defObf = _ajaxForm(form, url);

        //���-�� ����� ������ � ������� �������
    }
    var _ajaxForm = function(form, url){
        console.log('ajax ������ � ���������');
        if (!validation.validateForm(form)) return false;
        //���� false, �� ��� ���� �� ����� ��������
    };

    return {
        init:init
    };

})();

contact.init();