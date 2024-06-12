export const fadeIn = (element) => {
    element.style.opacity = 0;
    element.style.display = 'block';
    let opacity = 0;
    const interval = 10;
    const duration = 500;

    const timer = setInterval(() => {
        opacity += interval / duration;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(timer);
        }
    }, interval);
};

export const fadeOut = (element) => {
    console.log('fadeOut for ', element)
    let opacity = 1;
    const interval = 10;
    const duration = 500;

    const timer = setInterval(() => {
        opacity -= interval / duration;
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.display = 'none';
        }
    }, interval);
};
