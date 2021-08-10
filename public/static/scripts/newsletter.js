document.getElementsByClassName("XOmQ")[0].addEventListener("click", function() {
    document.getElementsByClassName("hOIP")[0].style = 'opacity:1;visibility:visible';
});

document.getElementsByClassName("uqgR")[3].addEventListener("click", function() {
    document.getElementsByClassName("hOIP")[0].style = 'opacity:1;visibility:visible';
});

document.getElementsByClassName("qOMj")[0].addEventListener("click", function() {
    document.getElementsByClassName("hOIP")[0].style = 'opacity:1;visibility:visible';
});

document.getElementsByClassName("vMnz")[0].addEventListener("click", function() {
    document.getElementsByClassName("vMnz")[0].textContent = 'CONTEÚDO ENVIADO COM SUCESSO!'
    document.getElementsByClassName("vMnz")[0].style = 'background:green;border:1px solid rgb(0, 161, 0);'
});

document.getElementsByClassName("fjpW")[0].addEventListener("click", function() {
    document.getElementsByClassName("hOIP")[0].style = "opacity:0;visibility:hidden";
});

document.getElementsByClassName("lgVp")[0].addEventListener("keyup", function() {
    if (document.getElementsByClassName("lgVp")[0].value.length > 7 && document.getElementsByClassName("lgVp")[0].value.includes('@') == true) {
        document.getElementsByClassName("vMnz")[0].disabled = false;
        document.getElementsByClassName("vMnz")[0].style = 'opacity:1;background:green;border:1px solid rgb(0, 161, 0);'
    } else {
        document.getElementsByClassName("vMnz")[0].disabled = true;
        document.getElementsByClassName("vMnz")[0].style = 'opacity:0.3;background:red;border:1px solid rgb(255, 50, 50);'
    }
});