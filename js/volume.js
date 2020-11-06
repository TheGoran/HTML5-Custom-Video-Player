const controlBox = document.getElementsByClassName('control-box')[0];
const volumeControl = controlBox.querySelector('.volume-control');
const volumeInput = volumeControl.querySelector('input[type=range]');

function setBars() {
  let volumeLevel = parseInt(volumeInput.value);
  volumeControl.className = 'volume-control';

  if (volumeLevel > 0) {
    controlBox.classList.add('volume-on');
    volumeControl.classList.add('volume-' + volumeLevel);
  } else {
    controlBox.classList.remove('volume-on');
  }
}

function setVolume() {
  video.volume = volumeInput.value / 100;
}

volumeInput.addEventListener('input', setBars);
volumeInput.addEventListener('change', setVolume);
setBars();
