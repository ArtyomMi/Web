//ovveride RBM
var menu = document.querySelector('.menu');

function showMenu(x, y) {
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('show-menu');
}

function hideMenu() {
    menu.classList.remove('show-menu');
}

function onContextMenu(e) {
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('mousedown', onmousedown, false);
}

function onmousedown(e) {
    hideMenu();
    document.removeEventListener('mousedown', onmousedown);
}
document.addEventListener('contextmenu', onContextMenu, false);
var count = 0;

function here() {
    console.log("count")
    count = count + 1;
}
var menuBtn = document.getElementById('openBTN')

menuBtn.addEventListener("mousedown", here());