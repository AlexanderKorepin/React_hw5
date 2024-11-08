import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Вторая задача в Арр.js=================
// import { useState } from 'react';
// import Loading from './components/Loading';
// import withLoadingIndicator from './components/LoadingIndicator';

// Сначала надо утсановить библиотеку Font Awesome!

// Подключаемся к API:
// npm i --save @fortawesome/fontawesome-svg-core

// Добавляем пакет значков:
// npm i --save @fortawesome/free-solid-svg-icons

// Установка компонента Font Awesome React:
// npm i --save @fortawesome/react-fontawesome@latest

// В параметры принимаем объект с пропсами в котором есть isLoading.
function Loading({ isLoading }) {
	return (
		<>
			{isLoading && (
				<h2>
					Загрузка... <FontAwesomeIcon icon={faSpinner} />
				</h2>
			)}
			{!isLoading && <h2>Загрузка завершилась</h2>}
		</>
	);
}
// Вторая задача в Арр.js=================
// function App() {
// 	const [isLoading, setIsLoading] = useState(true);
// 	// Оборачиваем компонент Loading в HOC withLoadingIndicator,
// 	// передавая новый пропс - текущее состояние загрузки.
// 	const NewLoading = withLoadingIndicator(Loading, isLoading);

// 	setTimeout(() => {
// 		// В этом коллбэке переключаем состояние загрузки на противоположное.
// 		setIsLoading(prev => !prev);
// 	}, 3000);

// 	return (
// 		<>
// 			{/* Отображаем обернутый компонент с индикатором загрузки. */}
// 			<NewLoading />
// 		</>
// 	);
// }
export default Loading;