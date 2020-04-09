(() => {

const pDrums = document.querySelector('.pDrums'),
saxButton = document.querySelector('.sax'),
keysButton = document.querySelector('.keys'),
trumpButton = document.querySelector('.trump'),
guitarButton = document.querySelector('.guitar'),
slots = document.querySelectorAll('.slot'),
button = document.querySelectorAll('.button');

const pieces = ["instrument1", "instrument2", "instrument3", "instrument4", "instrument5"];
    audioElement = document.querySelector('audio');


//music

function play() {


      // check the current track and incoming trackref; if they match, then unpause. else load the new track
    //  audioElement.getAttribute('src').includes(this.dataset.trackref);

    let audioSource = this.dataset.trackref;

    // set the audio source
    audioElement.src = `audio/${audioSource}.mp3`;

    // load and play it
    audioElement.load();
    audioElement.play();
    //playTrack();
  }
//slots
function dragOver(event) {
  event.preventDefault();
  console.log('over');
}

function dragEnter() {
  console.log('enter');
}

function dragLeave() {
  console.log('leave');
}

function dragDrop(event) {
  console.log('drop');

  let currentPiece = event.dataTransfer.getData("text/hidden", this.id);
  event.target.appendChild(document.querySelector(`#${currentPiece}`));
  //this.append(button);
}
//buttons
function dragStart(event){
  this.className += 'hold';
  setTimeout(() => this.className = 'hidden', 0);
  this.id = this.className;
  event.dataTransfer.setData("text/hidden", this.id);
}

function dragEnd() {
  this.className = 'button';
}
slots.forEach(slot => slot.addEventListener('dragover', dragOver));
slots.forEach(slot => slot.addEventListener('drop', dragDrop));

pDrums.addEventListener('dragstart', dragStart);
pDrums.addEventListener('dragend', play);
pDrums.addEventListener('dragend', dragEnd);
saxButton.addEventListener('dragstart', dragStart);
saxButton.addEventListener('dragend', dragEnd);
saxButton.addEventListener('dragend', play);
keysButton.addEventListener('dragstart', dragStart);
keysButton.addEventListener('dragend', dragEnd);
keysButton.addEventListener('dragend', play);
trumpButton.addEventListener('dragstart', dragStart);
trumpButton.addEventListener('dragend', dragEnd);
trumpButton.addEventListener('dragend', play);
guitarButton.addEventListener('dragstart', dragStart);
guitarButton.addEventListener('dragend', dragEnd);
guitarButton.addEventListener('dragend', play);
})();
