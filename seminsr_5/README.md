## Задание 1 (тайминг 25 минут)
● Создайте контексты UserContext и ThemeContext с начальными
значениями (например, имя пользователя: "Гость", тема: "светлая").
● Реализуйте компонент App:
○ Оберните дочерние компоненты в UserContext.Provider и
ThemeContext.Provider.
○ Добавьте возможность изменения имени пользователя и
темы через интерфейс пользователя.
● Создайте компоненты, использующие эти контексты:
○ Header должен отображать приветствие с именем
пользователя.
○ Profile может показывать более детальную информацию о
пользователе или просто использовать тему для стилизации.
○ Footer должен использовать тему для стилизации и,
возможно, отображать копирайт с текущим годом.
● Добавьте возможность изменения темы и имени пользователя в
интерфейсе, используя состояние в компоненте App и передавая
функции для изменения через контекст.

## Задание 2 (тайминг 25 минут)
Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который
определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого
компонента должен отображаться загрузочный индикатор.
1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
компонента в зависимости от пропса isLoading.
2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
библиотек.

## Задание 3 (тайминг 25 минут)
Создать простое приложение счетчика, которое увеличивает или
уменьшает значение на 1.
● Action types: INCREMENT, DECREMENT.
● Actions: Создайте два действия: одно для увеличения счетчика
и другое для его уменьшения.
● Reducer: Реализуйте редьюсер, который обрабатывает эти
действия и изменяет состояние счетчика соответствующим
образом.
● Component: Создайте компонент, который отображает счетчик
и имеет кнопки для его увеличения и уменьшения.