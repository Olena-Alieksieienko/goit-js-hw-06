const fontSizeControl = document.querySelector('input#font-size-control');
const mainText = document.querySelector('span#text');

fontSizeControl.addEventListener('input', e => {
    mainText.style.fontSize = `${e.target.value}px`;
});
