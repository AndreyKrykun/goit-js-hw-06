const textSizeControler = document.querySelector('#font-size-control');
const outpuText = document.querySelector('#text');

textSizeControler.addEventListener('input', () => {
    outpuText.style.fontSize = textSizeControler.value + 'px';
})