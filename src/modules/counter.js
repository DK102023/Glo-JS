const counterModule = (data)=>{
    const counter = document.querySelector('.num-section').querySelectorAll('.num')
    counter.forEach((element, index) => {
       // console.log(`Element ${index}:`, element);
        /*const parentElement = element.parentNode;
        parentElement.style.opacity = '0.5';*/
        element.style.opacity = '1';
        if (typeof data[index] === 'number'){
          //  console.log (data[index] + ' is number')
            numberCounting(data[index], index, element);
        } else if (typeof data[index] === 'string'){
           // console.log (data[index] + ' is string')
            element.innerHTML =`<span id="num+${index+1}">${data[index]}</span>`
           // element.classList.opacity = 1;

        }
    });
    function numberCounting(data, index, element) {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= data) {
                element.innerHTML = `<span id="num+${index + 1}">${i}</span>`;

              //  console.log(element.innerHTML)
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
    }



}
export default counterModule