document.addEventListener('DOMContentLoaded', init);

function init(){

  let query = window.matchMedia("(min-width:426px)")
  if (query.matches) {
    function splitScroll(){

      const controller = new ScrollMagic.Controller();
    
      new ScrollMagic.Scene({
          duration: '400%',
          triggerElement: '.left',
          triggerHook: 0
      })
      .setPin('.left')
      .addTo(controller)
      .addIndicators();
    }
         
    splitScroll()
    
    
    function splitScroll2(){
    
      const controller = new ScrollMagic.Controller();
    
      new ScrollMagic.Scene({
          duration: '200%',
          triggerElement: '.leftPackages',
          triggerHook: 0
      })
      .setPin('.leftPackages')
      .addTo(controller)
      .addIndicators();
    }
         
    splitScroll2()
    
    console.log('yes')

  } else {
    console.log('no')
  }
}


