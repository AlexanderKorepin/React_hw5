// Создаем HOC (Higher Order Component) withLoadingIndicator,
// который принимает два параметра: компонент и состояние загрузки (isLoading).
const withLoadingIndicator = (Component, isLoading) => {
	// Возвращаем новый компонент, который будет принимать пропсы.
	return props => {
		// Создаем новый объект с пропсами, добавляя флаг isLoading.
		const newProps = {
			...props, // Распространяем остальные переданные пропсы.
			isLoading, // Добавляем состояние загрузки в новые пропсы.
		};

		// Возвращаем оригинальный компонент с новыми пропсами. Это значит, что обернутый компонент теперь имеет доступ к состоянию загрузки
		return <Component {...newProps} />;
	};
};

export default withLoadingIndicator;

// HOC (Higher-Order Component) в React — это функция, которая берет компонент и возвращает новый, оборачивая его в дополнительную функциональность.

// Зачем нужен HOC?
// Повторное использование кода: HOC позволяет использовать одинаковую логику в разных компонентах без дублирования кода. Например, можно создать HOC для обработки загрузки и использовать его в нескольких местах.

// Разделение логики: С помощью HOC можно отделить логику от визуальной части. Это упрощает чтение и тестирование кода.

// Управление состоянием: HOC может добавлять дополнительное состояние или поведение, например, управление загрузкой, аутентификацией и т.д.

// Как часто используется HOC?
// HOC были популярны в ранних версиях React, но с появлением хуков (hooks) в React 16.8, многие разработчики стали использовать их реже. Теперь многие задачи, которые решались с помощью HOC, можно проще реализовать с помощью пользовательских хуков. Однако HOC все еще находит применение, особенно в крупных кодовых базах и библиотеке компонентов.

// Пример
// Если у вас есть компонент, который должен показывать индикатор загрузки, вы можете создать HOC, который добавляет эту логику к любому компоненту:

// javascript
// const withLoading = (WrappedComponent) => {
//     return ({ isLoading, ...props }) => {
//         return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
//     };
// };

// Таким образом, HOC помогает сделать код более чистым и понятным.