const carousel = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.services-carousel');
        const leftArrow = document.querySelector('.arrow-left');
        const rightArrow = document.querySelector('.arrow-right');
        const itemWidth = carousel.querySelector('.col-sm-6').offsetWidth;
        let scrollPosition = 0;

        leftArrow.addEventListener('click', () => {
            scrollPosition -= itemWidth;
            if (scrollPosition < 0) {
                scrollPosition = 0;
            }
            carousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;
            scrollPosition += itemWidth;
            if (scrollPosition > maxScrollPosition) {
                scrollPosition = maxScrollPosition;
            }
            carousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
    });

}

export default carousel