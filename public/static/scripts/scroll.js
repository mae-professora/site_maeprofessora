var percent = 0,
page = false;

window.onscroll = function() {
    if (window.innerWidth >= 1150) {
        percent = Math.round(document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100);

        if (percent >= 0 && percent <= 2) {
            document.getElementsByTagName("header")[0].style.height = 130 + 'px';
            document.getElementsByClassName("JMYj")[0].style.top = -27 + 'px';
        } else {
            document.getElementsByTagName("header")[0].style.height = 75 + 'px';
            document.getElementsByClassName("JMYj")[0].style.top = -18 + 'px';
        }
    }
}