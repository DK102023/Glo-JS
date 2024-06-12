//module.exports = scrollTopModule()

const scrollTopModule = () => {
    //console.log('scrollTop is started!')
    const scrollTop = document.querySelector('.up');

    if (!scrollTop) {
        console.error('Element with class "up" not found');
        return;
    }

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisibility);
    scrollTop.addEventListener('click', scrollToTop);


    toggleVisibility();
};

export default scrollTopModule;
//scrollTopModule();