console.log('Loaded!');
var element = document.getElementById('hi');
element.innerHTML='new value';
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight () {
  img.style.marginLeft = marginLeft + "10px";
}
img.onclick=function () {
//img.style.marginLeft='100px';
var interval = setInterval(moveRight,100);
};


