var btn = document.getElementById("ShowLinks");

function show() {
    var a = document.getElementById("navi");
    if (a.hidden) {
        btn.textContent = "Скрыть панель навигации";
        a.hidden = false;
    } else {
        a.hidden = true;
        btn.textContent = "Показать панель навигации";

    }
    // console.log(a);
}

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

// var menuBtn = document.getElementById('open')
// menuBtn.addEventListener("click", console.log("Here2"));

// function here() {
//     console.log("hereFun");
// }

// if(btn){
btn.addEventListener("click", show);

// }