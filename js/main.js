
$(document).ready(function () {
  var modal = $(".modal"),
      modalBtn = $("[data-toggle=modal]"),          
      closeBtn = $(".modal__close");
  
  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible")
  });
  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible")
  });
  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 10 + bullets.width() + 10 )
  bullets.css("left" , prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $(`.modal__form`).validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, //Сообщения
    messages: {
      userName:{required:"Заполните поле",
      minlength: "Имя должно содержать от 2 до 15 символов",
      maxlenght: "Имя должно содержать от 2 до 15 символов"
    },
      userPhone: {required:"Заполните поле",
      minlength: "Введите корректный номер телефона"
    },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }

  });
  //Валидация формы
  $(`.control__form`).validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,

      },
      userPhone: "required",
      // Правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, //Сообщения
    messages: {
      userName:{required:"Заполните поле",
      minlength: "Имя должно содержать от 2 до 15 символов",
      maxlenght: "Имя должно содержать от 2 до 15 символов"
    },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите в формате: name@domain.com"
      }
    }

  });
  //Валидация формы
  $(`.footer__form`).validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,

      },
      userPhone: "required",
      // Правило-объект (блок)
    }, //Сообщения
    messages: {
      userName:{required:"Заполните поле",
      minlength: "Имя должно содержать от 2 до 15 символов",
      maxlenght: "Имя должно содержать от 2 до 15 символов"
    },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }

  });
  //маска для телефона

  $('[type=tel]').mask("+7(000) 000-00-00", {placeholder: "+7(000) 000-00-00"});


  //Создание карты.
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.796498, 37.600448],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});


});