 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("It's ALIVE");
    
    function playingSound (e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);       
        
        if(!audio) return; //stop playing the music
        audio.currentTime = 0;
        audio.play(); 
        key.classList.add('playing');
    };

    // f witch will stop playing the sound
    function removeTransition (e) {
        if(e.propertyName !== 'transform')
        return;
        console.log(e.propertyName);
        this.classList.remove('playing');
    };

    const keys = document.querySelectorAll('.key');    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));  
    window.addEventListener("keydown", playingSound);
    
 });