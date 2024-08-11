let myform = document.getElementById('imgurl');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
myform.addEventListener('submit', function(e){
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if(urlimageval.length){
        targetimage.setAttribute('src',urlimageval);
        urlimage.value = '';
    }

    e.preventDefault();
    console.log('Image displayed');
});

for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}

function editimage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');
    let invert = document.getElementById('invert');
    let brightness = document.getElementById('brightness');
    let contrast = document.getElementById('contrast');
    let opacity = document.getElementById('opacity');
    let saturate = document.getElementById('saturate');

    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
    let invertval = invert.value;
    let brightnessval = brightness.value;
    let contrastval = contrast.value;
    let opacityval = opacity.value;
    let saturateval = saturate.value;

    targetimage.style.filter = `grayscale(${gsval}%) blur(${blurval}px) hue-rotate(${huerotateval}deg) sepia(${sepiaval}%) invert(${invertval}%) brightness(${brightnessval}%) contrast(${contrastval}%) opacity(${opacityval}%) saturate(${saturateval}%)`;
}

let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function(){
    sliderform.reset();
    setTimeout(function(){
        editimage();
    },0)
});
