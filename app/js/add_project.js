var myModule = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function () {
        //прослушка событий...
        $("#add-new-item").on("click", _showModal);
        $("#add-new-project").on("submit", _addProject);
    };
    var _showModal = function (ev) {
        console.log("Working");
        ev.preventDefault();
        $("#new-progect-popup").bPopup({
            speed: 650,
            transition: 'slideIn',
            transitionClose: 'slideBack',
            //прячем тултипы
            onClose: function() {
                $('input, textarea')
                    .trigger('hideTooltip')
                    .removeClass('has-error');
            }
        })
    };
// Добавление проєкта
    var _addProject = function (ev) {
        console.log("And this Working");
        ev.preventDefault();
//Обявляем переменные
        var form = $(this);
        url = "add_project.php",
            data = form.serialize();
// Запрос на сервер
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
        })

    };
    return {
        init: init
    };

})();

myModule.init();