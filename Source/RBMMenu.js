// ovveride RBM
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
    var tar = e.target.id;
    if (tar == "BTNOpen") {
        document.open(tar);
    } else if (tar == "BTNReload") {
        // document.reload
    } else if (tar == "BTNAlert") {
        alert("Don't do this!");
    } else if (tar == "BTNReturn") {
        history.back();
    } else {
        console.log("error");
    }
    document.removeEventListener('mousedown', onmousedown);
    hideMenu();
}
document.addEventListener('contextmenu', onContextMenu, false);