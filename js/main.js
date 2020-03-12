(() => {

const drumsButton = document.querySelector('.drums'),
saxButton = document.querySelector('.sax'),
keysButton = document.querySelector('.keys'),
trumpButton = document.querySelector('.trump'),
guitarButton = document.querySelector('.guitar'),
slots = document.querySelectorAll('.slot'),
button = document.querySelectorAll('.button');

//for(const slot of slots) {
//  slot.addEventListener('dragover', dragOver);
//  slot.addEventListener('dragenter', dragEnter);
//  slot.addEventListener('dragleave', dragLeave);
//  slot.addEventListener('drop', dragDrop);
//}

const pieces = ["instrument1", "instrument2", "instrument3", "instrument4", "instrument5"];

//function setInstruments(event) {
//  pieces.forEach((piece, index) => {
//    this.id = `${piece}`;
//  })
//}

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

drumsButton.addEventListener('dragstart', dragStart);
drumsButton.addEventListener('dragend', dragEnd);
saxButton.addEventListener('dragstart', dragStart);
saxButton.addEventListener('dragend', dragEnd);
keysButton.addEventListener('dragstart', dragStart);
keysButton.addEventListener('dragend', dragEnd);
trumpButton.addEventListener('dragstart', dragStart);
trumpButton.addEventListener('dragend', dragEnd);
guitarButton.addEventListener('dragstart', dragStart);
guitarButton.addEventListener('dragend', dragEnd);
})();
