const accordeonModule = (blockClass)=>{
    //console.log('accordeon is started!')
    const accordeon = document.querySelector(blockClass)

   // console.log(accordeon)
    accordeon.addEventListener('click', (e)=>{
        const clickedElement = e.target.closest('.element');
       // console.log(e.target)
        if (clickedElement.classList.contains('element') ){

            //console.dir ('click on element:  ' + clickedElement.classList )
            const accordionBlockButton = clickedElement.querySelector('.element-content')
            const elementContents = accordeon.querySelectorAll('.element-content');
            const blockElements = accordeon.querySelectorAll('.element');
            blockElements.forEach((block) =>{
                block.classList.remove('active')
            })
            elementContents.forEach((elementContent) => {
                elementContent.style.transition = 'none'
                elementContent.style.display='none'
            });
            clickedElement.classList.add('active')
            accordionBlockButton.style.transition = 'max-height 0.3s ease'
            accordionBlockButton.style.display = 'block'
            accordionBlockButton.style.maxHeight = accordionBlockButton.scrollHeight + 'px'
        }

    })

}
export default accordeonModule