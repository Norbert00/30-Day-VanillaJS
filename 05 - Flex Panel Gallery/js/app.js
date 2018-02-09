document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello World!!");


    const panels = document.querySelectorAll('.panel');
    function activeOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }
    function activeClass(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
    panels.forEach(panel => panel.addEventListener('click', activeOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', activeClass));

});
