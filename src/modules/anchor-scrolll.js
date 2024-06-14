
const anchorScroll = () =>{
    const closeButton = document.querySelector('.mobile-menu').querySelector('.mobile-menu-close')
    document.addEventListener('DOMContentLoaded', () => {
        // Находим все якорные ссылки
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        // Добавляем обработчик события click для каждой якорной ссылки
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Отменяем стандартное поведение ссылки
                e.preventDefault();
                //Имитируем клик на кнопку модального меню
                closeButton.click();
                // Получаем ID целевого элемента из атрибута href ссылки
                const targetId = this.getAttribute('href').substring(1);

                // Находим целевой элемент на странице
                const targetElement = document.getElementById(targetId);

                // Вычисляем позицию прокрутки до целевого элемента
                const offsetTop = targetElement.offsetTop;

                // Организуем плавную анимацию прокрутки до этой позиции
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    });
}
export default anchorScroll