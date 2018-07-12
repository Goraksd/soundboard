
  function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) 
      return;
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing');
  }

  function endSound (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key)
      return;
    key.classList.remove('playing');
  }

  function mouseDown1() {
    var audio = new Audio('sound/synthesizer02.wav');
    audio.play();
    }

  function mouseDown2() {
    var audio = new Audio('sound/drum_bass.wav');
    audio.play();
    }
  function mouseDown3() {
    var audio = new Audio('sound/piano1.wav');
    audio.play();
    }
  function mouseDown4() {
    var audio = new Audio('sound/piano3.wav');
    audio.play();
    }
  function mouseDown5() {
    var audio = new Audio('sound/piano5.wav');
    audio.play();
    }
  function mouseDown6() {
    var audio = new Audio('sound/synthesizer01.wav');
    audio.play();
    }
  function mouseDown7() {
    var audio = new Audio('sound/synthesizer06.wav');
    audio.play();
    }
  function mouseDown8() {
    var audio = new Audio('sound/synthesizer13.wav');
    audio.play();
    }
  function mouseDown9() {
    var audio = new Audio('sound/synthesizer23.wav');
    audio.play();
    }
  window.addEventListener('keydown', playSound)
  window.addEventListener('keyup', endSound) 
  window.addEventListener('onclick', playSound)