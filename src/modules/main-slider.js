const mainSlider= ()=>{
    document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('.top-slider .item');
        let currentIndex = 0;

        items.forEach((item, index) => {
            item.style.position = 'absolute';
            item.style.top = '0';
            item.style.left = '0';
            item.style.width = '100%';
            item.style.height = '100%';
            item.style.transition = 'transform 0.5s ease';
            const table = item.querySelector('.table');
            table.style.visibility = 'visible';
            table.style.opacity = '1';
            table.style.transition = 'visibility 0s, opacity 0.5s linear';
        });

        // Функция для показа текущего слайда и скрытия остальных с плавным переходом
        function showSlide(index) {
            items.forEach((item, i) => {
                if (i === index) {
                    item.style.opacity = 0;
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.transition = 'opacity 1s';
                        item.style.opacity = 1;
                    }, 10);
                } else {
                    item.style.opacity = 0;
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 1000);
                }
            });
        }

        // Функция для переключения на следующий слайд
        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        // Показать первый слайд
        showSlide(currentIndex);

        // Запуск автопрокрутки каждые 3 секунды
        setInterval(nextSlide, 3000);
    });

}

export default mainSlider