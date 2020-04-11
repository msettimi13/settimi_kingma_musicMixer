(() => {

const pDrums = document.querySelector('.pDrums'),
pSax = document.querySelector('.pSax'),
pKeys = document.querySelector('.pKeys'),
pTrump = document.querySelector('.pTrump'),
pGuitar = document.querySelector('.pGuitar'),
bDrums = document.querySelector('.bDrums'),
bSax = document.querySelector('.bSax'),
bKeys = document.querySelector('.bKeys'),
bTrump = document.querySelector('.bTrump'),
bGuitar = document.querySelector('.bGuitar'),
pkDrums = document.querySelector('.pkDrums'),
pkSax = document.querySelector('.pkSax'),
pkKeys = document.querySelector('.pkKeys'),
pkTrump = document.querySelector('.pkTrump'),
pkGuitar = document.querySelector('.pkGuitar'),
slots = document.querySelectorAll('.slot'),
button = document.querySelectorAll('.button');

const pieces = ["instrument1", "instrument2", "instrument3", "instrument4", "instrument5"];
    audioElement = document.querySelector('audio');


//music

function play() {

    let audioSource = this.dataset.trackref;

    // set the audio source
    audioElement.src = `audio/${audioSource}.mp3`;

    audioElement.load();
    audioElement.play();
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
pSax.addEventListener('dragstart', dragStart);
pSax.addEventListener('dragend', dragEnd);
pSax.addEventListener('dragend', play);
pKeys.addEventListener('dragstart', dragStart);
pKeys.addEventListener('dragend', dragEnd);
pKeys.addEventListener('dragend', play);
pTrump.addEventListener('dragstart', dragStart);
pTrump.addEventListener('dragend', dragEnd);
pTrump.addEventListener('dragend', play);
pGuitar.addEventListener('dragstart', dragStart);
pGuitar.addEventListener('dragend', dragEnd);
pGuitar.addEventListener('dragend', play);

bDrums.addEventListener('dragstart', dragStart);
bDrums.addEventListener('dragend', play);
bDrums.addEventListener('dragend', dragEnd);
bSax.addEventListener('dragstart', dragStart);
bSax.addEventListener('dragend', dragEnd);
bSax.addEventListener('dragend', play);
bKeys.addEventListener('dragstart', dragStart);
bKeys.addEventListener('dragend', dragEnd);
bKeys.addEventListener('dragend', play);
bTrump.addEventListener('dragstart', dragStart);
bTrump.addEventListener('dragend', dragEnd);
bTrump.addEventListener('dragend', play);
bGuitar.addEventListener('dragstart', dragStart);
bGuitar.addEventListener('dragend', dragEnd);
bGuitar.addEventListener('dragend', play);

pkDrums.addEventListener('dragstart', dragStart);
pkDrums.addEventListener('dragend', play);
pkDrums.addEventListener('dragend', dragEnd);
pkSax.addEventListener('dragstart', dragStart);
pkSax.addEventListener('dragend', dragEnd);
pkSax.addEventListener('dragend', play);
pkKeys.addEventListener('dragstart', dragStart);
pkKeys.addEventListener('dragend', dragEnd);
pkKeys.addEventListener('dragend', play);
pkTrump.addEventListener('dragstart', dragStart);
pkTrump.addEventListener('dragend', dragEnd);
pkTrump.addEventListener('dragend', play);
pkGuitar.addEventListener('dragstart', dragStart);
pkGuitar.addEventListener('dragend', dragEnd);
pkGuitar.addEventListener('dragend', play);
})();
