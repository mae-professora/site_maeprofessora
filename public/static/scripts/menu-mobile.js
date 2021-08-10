var menu_button = 0;

document.getElementsByClassName("ZWaC_mob")[0].addEventListener("click", function(event) {
    if (menu_button == 0) {
        document.getElementsByClassName("OfBLa")[0].style = 'transform:rotate(-45deg);left:2px;top:5px;width:17px;';
    	document.getElementsByClassName("OfBLb")[0].style = 'transform:rotate(45deg);width:17px;left:11px;top:5px;';
        document.getElementsByClassName("OfBLc")[0].style = 'width:0;opacity:0;';

        document.getElementsByClassName("Cbjw")[0].style = "height:203px;opacity:1";
        menu_button += 1;
    } else {
        document.getElementsByClassName("OfBLa")[0].style = 'transform:rotate(0deg);left:0px;top:0px;width:30px;';
    	document.getElementsByClassName("OfBLb")[0].style = 'transform:rotate(0deg);left:0px;top:9px;width:30px;';
        document.getElementsByClassName("OfBLc")[0].style = 'width:30px;opacity:1;';
        
        document.getElementsByClassName("Cbjw")[0].style = "height:0px;opacity:0";
        menu_button -= 1;
    }
});  

document.getElementsByClassName("uqgR")[0].addEventListener("click", function() {
    document.getElementsByClassName("OfBLa")[0].style = 'transform:rotate(0deg);left:0px;top:0px;width:30px;';
    document.getElementsByClassName("OfBLb")[0].style = 'transform:rotate(0deg);left:0px;top:9px;width:30px;';
    document.getElementsByClassName("OfBLc")[0].style = 'width:30px;opacity:1;';

    location.hash = 'inicio';
    document.getElementById("__next").scrollTo({top:document.getElementById("page1").offsetTop,behavior:"smooth"});
    document.getElementsByClassName("Cbjw")[0].style = "height:0px;opacity:0";
    menu_button -= 1;
});

document.getElementsByClassName("uqgR")[1].addEventListener("click", function() {
    document.getElementsByClassName("OfBLa")[0].style = 'transform:rotate(0deg);left:0px;top:0px;width:30px;';
    document.getElementsByClassName("OfBLb")[0].style = 'transform:rotate(0deg);left:0px;top:9px;width:30px;';
    document.getElementsByClassName("OfBLc")[0].style = 'width:30px;opacity:1;';

    location.hash = 'servicos';
    document.getElementById("__next").scrollTo({top:document.getElementById("page2").offsetTop,behavior:"smooth"});
    document.getElementsByClassName("Cbjw")[0].style = "height:0px;opacity:0";
    menu_button -= 1;
});

document.getElementsByClassName("uqgR")[2].addEventListener("click", function() {
    document.getElementsByClassName("OfBLa")[0].style = 'transform:rotate(0deg);left:0px;top:0px;width:30px;';
    document.getElementsByClassName("OfBLb")[0].style = 'transform:rotate(0deg);left:0px;top:9px;width:30px;';
    document.getElementsByClassName("OfBLc")[0].style = 'width:30px;opacity:1;';

    location.hash = 'pqabruko';
    document.getElementById("__next").scrollTo({top:document.getElementById("page3").offsetTop - 30,behavior:"smooth"});
    document.getElementsByClassName("Cbjw")[0].style = "height:0px;opacity:0";
    menu_button -= 1;
});

document.getElementsByClassName("uqgR")[3].addEventListener("click", function() {
    document.getElementsByClassName("OfBLa")[0].style = 'transform:rotate(0deg);left:0px;top:0px;width:30px;';
    document.getElementsByClassName("OfBLb")[0].style = 'transform:rotate(0deg);left:0px;top:9px;width:30px;';
    document.getElementsByClassName("OfBLc")[0].style = 'width:30px;opacity:1;';

    location.hash = 'contato';
    document.getElementById("__next").scrollTo({top:document.getElementById("page6").offsetTop,behavior:"smooth"});
    document.getElementsByClassName("Cbjw")[0].style = "height:0px;opacity:0";
    menu_button -= 1;
});