var btn = document.getElementById("BTNSendContact");
var forms = document.getElementsByName("Form");
let inForm = forms.elements;

function sentData() {
    if (inForm.input == "") {
        alert("Введите данные!");
    } else {
        var sMe = document.getElementsByName("sendMe");
        sMe.hidden = false;
    }
});

// console.log(a);
}

// if(btn){
btn.addEventListener("click", sentData);