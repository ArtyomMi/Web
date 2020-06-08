var btn = document.getElementById("ShowLinks");

function show() {
    var a = document.getElementById("navi");
    if (a.hidden) {
        btn.textContent = "Скрыть панель навигации";
        a.hidden = false;
    } else {
        btn.textContent = "Показать панель навигации";
        a.hidden = true;
    }
    // console.log(a);
}

// if(btn){
btn.addEventListener("click", show);
// }




// function here() {
//     console.log("hereFun");
// }