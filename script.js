var btn = document.getElementById("Test");

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

// if(btn){
btn.addEventListener("click", show);

// }