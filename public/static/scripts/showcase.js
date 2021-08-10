var page_mov = 0,
page_selected = 0,
ftime = true;

document.getElementsByClassName("bMqP")[0].addEventListener("click", function() {
    if (page_selected >= 1) {
        page_mov += 33.33;
        page_selected -= 1;
        document.getElementsByClassName("RLIK")[0].style.left = page_mov + '%';
        page_pos();
    }
});

document.getElementsByClassName("bMqP")[1].addEventListener("click", function() {
    if (ftime == true) {
        ftime = false;
        document.getElementsByClassName("jJYS")[0].style.opacity = 1;
    }
    if (page_selected <= 5) {
        page_mov -= 33.33;
        page_selected += 1;
        document.getElementsByClassName("RLIK")[0].style.left = page_mov + '%';
        page_pos();
    }
});

function page_pos() {
    for (var i = 0; i <= 6; i++) {
        if (page_selected == i) {
            document.getElementsByClassName("zsxp")[i].style.opacity = 1;
        } else {
            document.getElementsByClassName("zsxp")[i].style.opacity = 0.3;
        }
    }
}