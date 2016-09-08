$(function () {
  //Поиск по вин тур
  var tourImport = new Tour({
    name: "tourImport",
    steps: [{
      element: ".helper_btn",
      title: "Кнопка Помощь по разделу",
      content: "Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа",
      placement: "bottom",
    }, {
        element: ".sort",
        title: "Склады",
        placement: "bottom",
        content: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Жизни от всех знаках, жаренные единственное напоивший несколько она рот своих большой, маленькая грустный что свой путь.",

      },
      {
        element: ".search_goods",
        title: "Найденные товары",
        placement: "bottom",
        content: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Жизни от всех знаках, жаренные единственное напоивший несколько она рот своих большой, маленькая грустный что свой путь.",
      },
      {
        element: ".warhauseClaime",
        title: "Не найденные товары",
        placement: "top",
        content: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Жизни от всех знаках, жаренные единственное напоивший несколько она рот своих большой, маленькая грустный что свой путь.",
      }],
    container: "body",
    storage: false,
    backdrop: true,
    backdropContainer: 'body',
    template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3> <div class='popover-content'></div><div class='popover-navigation'><button class='gray_btn' data-role='prev'>Назад</button><button class='green_btn' data-role='next'>Вперед</button></div><button class='closepropover' data-role='end'></button></div>",
    
  });

  tourImport.init();

  // Start the tour
  $('.helper_btn').click(function () {
    tourImport.restart()
    tourImport.start(true);
  });
});
//конец поиск по вин тур




//Поиск по вин тур
  var tourSearchToVin = new Tour({
    name: "tourSearchToVin",
    steps: [{
      element: "#helper",
      title: "Кнопка Помощь по разделу",
      content: "Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа",
      placement: "bottom",
    }, {
        element: "#searchToVin1BrandField",
        title: "Область с поиском по брэнду",
        placement: "top",
        content: "Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа",

      },
      {
        element: "#tour-3",
        title: "Форма поиска",
        placement: "bottom",
        content: "Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа. Текст описывающий порядок работы с элементами интерфейса сайиа",

      }],
    container: "body",
    storage: false,
    backdrop: true,
    backdropContainer: 'body',
    template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3> <div class='popover-content'></div><div class='popover-navigation'><button class='gray_btn' data-role='prev'>Назад</button><button class='green_btn' data-role='next'>Вперед</button></div><button class='closepropover' data-role='end'></button></div>",
    
  });

  tourSearchToVin.init();

  // Start the tour
  $('.helperBtn').click(function () {
    tourSearchToVin.restart()
    tourSearchToVin.start(true);
  });

//конец поиск по вин тур
