Информация для самообучения:
1. Весь раздел `Main Concepts` в https://reactjs.org/
2. Раздел мозилы по реакту https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
3. react-router-dom https://reacttraining.com/react-router/web/guides/quick-start
Статья по роутингу:
https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-react-router-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%80%D0%BE%D1%83%D1%82%D0%B8%D0%BD%D0%B3%D0%B0-%D1%82%D0%B8%D0%BF%D1%8B-%D0%B8-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-1c159cca6fea

`ТЗ:`
1. Создать страницы PeoplePage, PlanetsPage, StarshipsPage, которые состоят из заголовка, таблицы и формы. 
У каждой страницы должны быть свои данные, которые будут передаваться в common компоненты.
2. Добавить в каждую строку таблицы кнопку "Delete", которая будет удалять запись.
3. Работа с react-router-dom. Создать компонент Navbar (можно взять из bootstrap`a) , реализовать навигацию по страницам.
Страницы должны быть следующие:
 People, Planets, Starship
 При загрузке приложения у нас должен происходить редирект на страницу People. В случае, если адрес cайта неправильный,
 то должен происходить редирект на страницу not-found.
В случае, если данных нету, то должен показываться заголовок, о том, что информации для этой страницы нету.
Форма должно уметь создавать новую запись в соответствующую таблицу. 
