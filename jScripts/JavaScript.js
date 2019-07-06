// dots & lines in start page
document.addEventListener("DOMContentLoaded", function () {
    onAppear = [].map.call(document.querySelectorAll(".onAppear"), function (item) {
        return item;
    });
    onAppear2 = [].map.call(document.querySelectorAll(".onAppear2"), function (item) {
        return item;
    });
    onAppear3 = [].map.call(document.querySelectorAll(".onAppear3"), function (item) {
        return item;
    });
    onAppear4 = [].map.call(document.querySelectorAll(".onAppear4"), function (item) {
        return item;
    });
    onAppear5 = [].map.call(document.querySelectorAll(".onAppear5"), function (item) {
        return item;
    });
    onAppear6 = [].map.call(document.querySelectorAll(".onAppear6"), function (item) {
        return item;
    });
    onAppear7 = [].map.call(document.querySelectorAll(".onAppear7"), function (item) {
        return item;
    });
    onAppear8 = [].map.call(document.querySelectorAll(".onAppear8"), function (item) {
        return item;
    });
    onAppear9 = [].map.call(document.querySelectorAll(".onAppear9"), function (item) {
        return item;
    });
    onAppear10 = [].map.call(document.querySelectorAll(".onAppear10"), function (item) {
        return item;
    });
    onAppear11 = [].map.call(document.querySelectorAll(".onAppear11"), function (item) {
        return item;
    });
    onAppear12 = [].map.call(document.querySelectorAll(".onAppear12"), function (item) {
        return item;
    });
    onAppear13 = [].map.call(document.querySelectorAll(".onAppear13"), function (item) {
        return item;
    });


}, false);

window.addEventListener("scroll", function () {
    onAppear.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible");

        }
    });
    onAppear2.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible2");
        }
    });
    onAppear3.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible3");
        }
    });
    onAppear4.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible4");
        }
    });

    onAppear5.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible5");
        }
    });

    onAppear6.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible6");
        }
    });
    onAppear7.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible7");
        }
    });

    onAppear8.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible8");
        }
    });

    onAppear9.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible9");
        }
    });

    onAppear10.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible10");
        }
    });

    onAppear11.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible11");
        }
    });

    onAppear12.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible12");
        }
    });

    onAppear13.forEach(function (elem) {
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            elem.classList.add("visible13");
        }
    });

}, false);

$(' #insideNav ul li a ').click(function () {
    var i = $(this).id();
    print(i.print);
    $('.articles').hide();
    $('#' + i + "Event").show();

});
var clicked = new Boolean(false);
//Carousel for HomePage
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel");
    var bullets = document.getElementsByClassName("bullet");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0";
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = "appearIt 0.3s forwards 0.3s";
    bullets[slideIndex - 1].className += " active";
}



// function for dictionary page
function hideNshow(clicked_id) {
    var articlEl = document.getElementById(clicked_id + "Event");
    var articleL = document.getElementsByClassName("articles");
    var e = document.getElementById(clicked_id);
    var navisL = document.getElementsByClassName("navis");
    for (var i = 0; i < articleL.length; i++) {
        if (articleL[i].style.display == "block")
            articleL[i].style.display = "none";
    }
    for (var i = 0; i < navisL.length; i++) {
        if (navisL[i].className.includes("active"))
            navisL[i].classList.remove("active");
    }

    e.classList.add("active");
    if (articlEl.style.display == "none") {
        articlEl.style.display = "block";

    } else {
        articlEl.style.display = "none";
    }
    clicked = true;
}

function homeHover(clicked_id) {
    var e = document.getElementById(clicked_id);
    e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("homeNav");
    for (var i = 0; i < classL.length; i++) {
        if (classL[i].className.includes("active"))
            classL[i].classList.remove("active");
    }
    e.classList.add("active");
};

function homeOut(clicked_id) {
    var e = document.getElementById(clicked_id);
    e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("homeNav");
    for (var i = 0; i < classL.length; i++) {
        classL[i].classList.add("active");
    }
    if (!e.className.includes("active"))
        e.classList.add("active");
};

function footHover(clicked_id) {
    var e = document.getElementById(clicked_id);
    e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("footerA");
    for (var i = 0; i < classL.length; i++) {
        if (classL[i].className.includes("active"))
            classL[i].classList.remove("active");
    }
    e.classList.add("active");
};

function footOut(clicked_id) {
    var e = document.getElementById(clicked_id);
    e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("footerA");
    for (var i = 0; i < classL.length; i++) {
        classL[i].classList.add("active");
    }
    if (!e.className.includes("active"))
        e.classList.add("active");
};

function footHover2(clicked_id) {
    var e = document.getElementById(clicked_id);
    e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("footerA2");
    for (var i = 0; i < classL.length; i++) {
        if (classL[i].className.includes("active"))
            classL[i].classList.remove("active");
    }
    e.classList.add("active");
};

function footOut2(clicked_id) {
    var e = document.getElementById(clicked_id);
    e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("footerA2");
    for (var i = 0; i < classL.length; i++) {
        classL[i].classList.add("active");
    }
    if (!e.className.includes("active"))
        e.classList.add("active");
};
function navHover(clicked_id) {
    var e = document.getElementById(clicked_id);
    var count = 0;
    if (clicked == false)
        e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("navis");
    for (var i = 0; i < classL.length; i++) {
        if (classL[i].className.includes("active")) {
            classL[i].classList.remove("active");
            count++;
        }
    }
    e.classList.add("active");

};
function navOut(clicked_id) {
    var e = document.getElementById(clicked_id);
    if (clicked == false)
        e.classList.remove("active");
    var classN = e.className;
    var classL = document.getElementsByClassName("navis");
    if (clicked == false) {
        for (var i = 0; i < classL.length; i++) {
            classL[i].classList.add("active");

            if (!e.className.includes("active"))
                e.classList.add("active");
        }
    }
};

