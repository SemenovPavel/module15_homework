// Задание 2

const btn = document.querySelector('.btn');

// Создаём обработчик события click с анонимной функцией,
// при нажатии на кнопку передаем в метод alert строку,
// содержащую ширину и высоту экрана пользователя, получаемые
// при использованиие свойства screen объекта window
btn.addEventListener('click', () => {
  alert(`Разрешение экрана: ${window.screen.width}X${window.screen.height}`);
});