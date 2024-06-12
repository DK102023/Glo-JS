 const mobileMenuDriver = ()=>{
  const mobileMenu = document.querySelector('.mobile-menu')
     //console.log(mobileMenu)
  const closeButton = mobileMenu.querySelector('.mobile-menu-close')
     //console.log(closeButton)
  const callBackBtn =    mobileMenu.querySelector('.callback-btn')
     //console.log('sdfsd', callBackBtn)

  let isOpen = false;

  callBackBtn.addEventListener('click', (e) => {
      console.log(e.target)
      e.preventDefault();
      mobileMenu.style.right = '-400px';
      isOpen = !isOpen;
  })

  closeButton.onclick = ()=>{
   mobileMenu.style.right = '-400px';
   isOpen = !isOpen;
  }

  document.querySelector('.mob-menu-btn').addEventListener('click', function (){
   if (isOpen) {
    // Если меню закрыто, изменяем свойство left на 50px
    mobileMenu.style.right = '-400px';
    isOpen = !isOpen;
   } else {
    // Если меню открыто, изменяем свойство left на 0
    mobileMenu.style.right = '0';
    isOpen = !isOpen;
   }
  })
 }
 export default mobileMenuDriver