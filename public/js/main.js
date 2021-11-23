/*
Sử dụng thư viện Scroll Reveal Animations 
Nguồn: https://github.com/jlmakes/scrollreveal
*/
window.scrollReveal = function(t) {
    "use strict";

    function e(e) { this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = {}, 1 == this.options.init && this.init() }
    var i = 1,
        o = function() { return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) { t.setTimeout(e, 1e3 / 60) } }();
    return e.prototype = {
        defaults: { after: "0s", enter: "bottom", move: "24px", over: "0.66s", easing: "ease-in-out", opacity: 0, viewportFactor: .33, reset: !1, init: !0 },
        init: function() {
            this.scrolled = !1;
            var e = this;
            this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function(t, o) {
                var r = t.getAttribute("data-scroll-reveal-id");
                r || (r = i++, t.setAttribute("data-scroll-reveal-id", r)), e.styleBank[r] || (e.styleBank[r] = t.getAttribute("style")), e.update(t)
            });
            var r = function(t) { e.scrolled || (e.scrolled = !0, o(function() { e._scrollPage() })) },
                n = function() {
                    function t() { e._scrollPage(), e.resizeTimeout = null }
                    e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200)
                };
            t.addEventListener("scroll", r, !1), t.addEventListener("resize", n, !1)
        },
        _scrollPage: function() {
            var t = this;
            this.elems.forEach(function(e, i) { t.update(e) }), this.scrolled = !1
        },
        parseLanguage: function(t) {
            function e(t) {
                var e = [],
                    i = ["from", "the", "and", "then", "but", "with"];
                return t.forEach(function(t, o) { i.indexOf(t) > -1 || e.push(t) }), e
            }
            var i = t.getAttribute("data-scroll-reveal").split(/[, ]+/),
                o = {};
            return i = e(i), i.forEach(function(t, e) {
                switch (t) {
                    case "enter":
                        return void(o.enter = i[e + 1]);
                    case "after":
                        return void(o.after = i[e + 1]);
                    case "wait":
                        return void(o.after = i[e + 1]);
                    case "move":
                        return void(o.move = i[e + 1]);
                    case "ease":
                        return o.move = i[e + 1], void(o.ease = "ease");
                    case "ease-in":
                        return o.move = i[e + 1], void(o.easing = "ease-in");
                    case "ease-in-out":
                        return o.move = i[e + 1], void(o.easing = "ease-in-out");
                    case "ease-out":
                        return o.move = i[e + 1], void(o.easing = "ease-out");
                    case "over":
                        return void(o.over = i[e + 1]);
                    default:
                        return
                }
            }), o
        },
        update: function(t) {
            var e = this.genCSS(t),
                i = this.styleBank[t.getAttribute("data-scroll-reveal-id")];
            return null != i ? i += ";" : i = "", t.getAttribute("data-scroll-reveal-initialized") || (t.setAttribute("style", i + e.initial), t.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(t, this.options.viewportFactor) ? t.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(t, this.options.viewportFactor) ? (t.setAttribute("style", i + e.target + e.transition), void(this.options.reset || setTimeout(function() { "" != i ? t.setAttribute("style", i) : t.removeAttribute("style"), t.setAttribute("data-scroll-reveal-complete", !0) }, e.totalDuration))) : void 0 : void(this.options.reset && t.setAttribute("style", i + e.initial + e.reset))
        },
        genCSS: function(t) {
            var e, i, o = this.parseLanguage(t);
            o.enter ? (("top" == o.enter || "bottom" == o.enter) && (e = o.enter, i = "y"), ("left" == o.enter || "right" == o.enter) && (e = o.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, i = "x")), ("top" == e || "left" == e) && (o.move ? o.move = "-" + o.move : o.move = "-" + this.options.move);
            var r = o.move || this.options.move,
                n = o.over || this.options.over,
                s = o.after || this.options.after,
                a = o.easing || this.options.easing,
                l = o.opacity || this.options.opacity,
                u = "-webkit-transition: -webkit-transform " + n + " " + a + " " + s + ",  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " " + s + ", opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                c = "-webkit-transition: -webkit-transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                f = "-webkit-transform: translate" + i + "(" + r + ");transform: translate" + i + "(" + r + ");opacity: " + l + ";",
                p = "-webkit-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
            return { transition: u, initial: f, target: p, reset: c, totalDuration: 1e3 * (parseFloat(n) + parseFloat(s)) }
        },
        getViewportH: function() {
            var e = this.docElem.clientHeight,
                i = t.innerHeight;
            return i > e ? i : e
        },
        getOffset: function(t) {
            var e = 0,
                i = 0;
            do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
            return { top: e, left: i }
        },
        isElementInViewport: function(e, i) {
            var o = t.pageYOffset,
                r = o + this.getViewportH(),
                n = e.offsetHeight,
                s = this.getOffset(e).top,
                a = s + n,
                i = i || 0;
            return r >= s + n * i && a >= o || "fixed" == (e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null)).position
        },
        extend: function(t, e) { for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }
    }, e
}(window);
/* /end */

/*-----------------*/
(function($) {
    "use strict";

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Scroll animation init
    window.sr = new scrollReveal();

    // Menu Dropdown Toggle
    if ($(".menu-trigger").length) {
        $(".menu-trigger").on("click", function() {
            $(this).toggleClass("active");
            $(".header-area .nav").slideToggle(200);
        });
    }
})(window.jQuery);

// Check localStorage data
window.onload = (event) => {

    if (localStorage.getItem("formname") !== null) {
        document.getElementById('username').innerText = localStorage.getItem("formname")
        document.getElementById('form-name').value = localStorage.getItem("formname")
    }

    if (localStorage.getItem("formjob") !== null) {
        document.getElementById('userjob').innerText = localStorage.getItem("formjob")
        document.getElementById('form-job').value = localStorage.getItem("formjob")
    }

    if (localStorage.getItem("formgender") !== null) {
        document.getElementById('usergender').innerText = localStorage.getItem("formgender")
        document.getElementById('form-gender').value = localStorage.getItem("formgender")
    }

    if (localStorage.getItem("formdate") !== null) {
        document.getElementById('userdate').innerText = localStorage.getItem("formdate")
        document.getElementById('form-date').value = localStorage.getItem("formdate")
    }

    if (localStorage.getItem("formphone") !== null) {
        document.getElementById('userphone').innerText = localStorage.getItem("formphone")
        document.getElementById('form-phone').value = localStorage.getItem("formphone")
    }

    if (localStorage.getItem("formaddress") !== null) {
        document.getElementById('useraddress').innerText = localStorage.getItem("formaddress")
        document.getElementById('form-address').value = localStorage.getItem("formaddress")
    }

    if (localStorage.getItem("formemail") !== null) {
        document.getElementById('useremail').innerText = localStorage.getItem("formemail")
        document.getElementById('form-email').value = localStorage.getItem("formemail")
    }

    if (localStorage.getItem("formemail") !== null) {
        document.getElementById('useremail').innerText = localStorage.getItem("formemail")
        document.getElementById('form-email').value = localStorage.getItem("formemail")
    }

    if (localStorage.getItem("formlink") !== null) {
        document.getElementById('userlink').innerText = localStorage.getItem("formlink")
        document.getElementById('form-link').value = localStorage.getItem("formlink")
    }

    if (localStorage.getItem("formhobby") !== null) {
        document.getElementById('userhobby').innerText = localStorage.getItem("formhobby")
        document.getElementById('form-hobby').value = localStorage.getItem("formhobby")
    }

    if (localStorage.getItem("formgoal") !== null) {
        document.getElementById('usergoal').innerText = localStorage.getItem("formgoal")
        document.getElementById('form-goal').value = localStorage.getItem("formgoal")
    }

    if (localStorage.getItem("formabout") !== null) {
        document.getElementById('userabout').innerText = localStorage.getItem("formabout")
        document.getElementById('form-about').value = localStorage.getItem("formabout")
    }

    if (localStorage.getItem("formava") !== null) {
        document.getElementById('userava').src = `data:image/png;base64,${localStorage.getItem("formava")}`;
    }

    if (localStorage.getItem("skilldata") !== null) {
        var skillArr = JSON.parse(localStorage.getItem("skilldata"))
        var ul = document.getElementById("ul-skill");

       for (var i = 0; i < skillArr.length ; i++) {

    
        var li = document.createElement("li");
        li.setAttribute("class", "pb-2");    
        
        var p1 = document.createElement("p");
        var b1 = document.createElement("b");
        b1.appendChild(document.createTextNode(`${skillArr[i].formSkillname}`));
        p1.appendChild(b1)

        var p2 = document.createElement("p");
        p2.setAttribute("class", "h6");    
        p2.appendChild(document.createTextNode(`${skillArr[i].formDescription}`));
        
        li.appendChild(p1);
        li.appendChild(p2);
        ul.appendChild(li);
    }
    }

    if (localStorage.getItem("edudata") !== null) {
        var eduArr = JSON.parse(localStorage.getItem("edudata"))
        var div_edulist = document.getElementById("edu-list");

        for (var i = 0; i < eduArr.length ; i++) {
        var divChild = document.createElement("div");
        divChild.setAttribute("class", "row pb-3");    
        
        var p_edu1 = document.createElement("p");
        var b_edu = document.createElement("b");
        b_edu.appendChild(document.createTextNode(`${eduArr[i].formMajor}`));
        p_edu1.appendChild(b_edu)

        var divChildRow = document.createElement("div");
        divChildRow.setAttribute("class", "row"); 

        
        var p_edu2 = document.createElement("p");
        p_edu2.setAttribute("class", "text-uppercase"); 
        p_edu2.appendChild(document.createTextNode(`${eduArr[i].formUniversity}`));

       
        var p_edu3 = document.createElement("p");
        p_edu3.appendChild(document.createTextNode(`(${eduArr[i].schoolFrom} - ${eduArr[i].schoolTo})`));
        
        
        
        divChildRow.appendChild(p_edu2)
        divChildRow.appendChild(p_edu3)
        divChild.appendChild(p_edu1);
        divChild.appendChild(divChildRow);
        div_edulist.appendChild(divChild)

       }
    }

    if (localStorage.getItem("wedata") !== null) {
        var weArr = JSON.parse(localStorage.getItem("wedata"))
        var div_welist = document.getElementById("we-list");
        for (var i = 0; i < weArr.length ; i++) {

        var hr = document.createElement("hr");

        var row = document.createElement("div");
        row.setAttribute("class", "row pb-3"); 

        var span1_row = document.createElement("span");
        var b_row = document.createElement("b");
        b_row.appendChild(document.createTextNode(`${weArr[i].formWork}`));

        var p_row = document.createElement("p");
        p_row.appendChild(document.createTextNode(`${weArr[i].formJobAlready} | ${weArr[i].jobFrom} - ${weArr[i].jobTo}`));

        var span2_row = document.createElement("span");
        span2_row.setAttribute("class", "position-relative mt-3"); 

        var strong_span2 = document.createElement("strong");
        var span_span2 = document.createElement("span");

        var i_strong = document.createElement("i");
        i_strong.setAttribute("class", "bi bi-award"); 
        i_strong.setAttribute("style", "font-size: 18px");
        span_span2.appendChild(document.createTextNode(`Achievement: ${weArr[i].formAchieve}`));


        span1_row.appendChild(b_row)

       

        row.appendChild(span1_row)
        row.appendChild(p_row)
        row.appendChild(span2_row)


        strong_span2.appendChild(i_strong)
        span2_row.appendChild(strong_span2)
        span2_row.appendChild(span_span2)

        div_welist.appendChild(row)
        div_welist.appendChild(hr)

           

       }    
    }

};

// Handle Form
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    swal({
        title: "Your CV is already!",
        icon: "success",
        buttons: true,
      })
      .then((ok) => {
        if (ok) {
            window.location.href = '/cv'
        }
      });
   
    
    // Form edit
    var formname = document.getElementById('form-name').value
    document.getElementById('username').innerText = formname
    localStorage.setItem("formname", formname);

    var formjob = document.getElementById('form-job').value
    document.getElementById('userjob').innerText = formjob
    localStorage.setItem("formjob", formjob);


    var e = document.getElementById("form-gender");
    var formgender = e.options[e.selectedIndex].text;
    document.getElementById('usergender').innerText = formgender
    localStorage.setItem("formgender", formgender);

    var formdate = document.getElementById('form-date').value
    document.getElementById('userdate').innerText = formdate
    localStorage.setItem("formdate", formdate);

    var formphone = document.getElementById('form-phone').value
    document.getElementById('userphone').innerText = formphone
    localStorage.setItem("formphone", formphone);

    var formaddress = document.getElementById('form-address').value
    document.getElementById('useraddress').innerText = formaddress
    localStorage.setItem("formaddress", formaddress);

    var formemail = document.getElementById('form-email').value
    document.getElementById('useremail').innerText = formemail
    localStorage.setItem("formemail", formemail);

    var formlink = document.getElementById('form-link').value
    document.getElementById('userlink').innerText = formlink
    localStorage.setItem("formlink", formlink);

    var formhobby = document.getElementById('form-hobby').value
    document.getElementById('userhobby').innerText = formhobby
    localStorage.setItem("formhobby", formhobby);

    var formgoal = document.getElementById('form-goal').value
    document.getElementById('usergoal').innerText = formgoal
    localStorage.setItem("formgoal", formgoal);

    var formabout = document.getElementById('form-about').value
    document.getElementById('userabout').innerText = formabout
    localStorage.setItem("formabout", formabout);

    //Skill
    var inputFormDiv = document.getElementById('skill-form');
    var skill_input = inputFormDiv.getElementsByTagName('input').length
    
    var formSkillNameArr = []
    for (var i = 1; i <= skill_input/2 ; i++) {

        formSkillNameArr.push({formSkillname: form["form-skillname" + i].value,formDescription: form["form-description" + i].value})
    }
    localStorage.setItem('skilldata', JSON.stringify(formSkillNameArr))


    //Education
    var inputFormDiv = document.getElementById('education-form');
    var edu_input = inputFormDiv.getElementsByTagName('input').length
    
    var formEduArr = []
    for (var i = 1; i <= edu_input/4 ; i++) {

        formEduArr.push({
            formMajor: form["form-major" + i].value,
            formUniversity: form["form-university" + i].value,
            schoolFrom: form["form-school-time-from" + i].value,
            schoolTo: form["form-school-time-to" + i].value
        })
    }
    localStorage.setItem('edudata', JSON.stringify(formEduArr))


    //Work experience
    var inputFormDiv = document.getElementById('work-experience-form');
    var we_input = inputFormDiv.getElementsByTagName('input').length
    
    var formWeArr = []
    for (var i = 1; i <= we_input/5 ; i++) {

        formWeArr.push({
            formWork: form["form-work" + i].value,
            formJobAlready: form["form-job-already" + i].value,
            jobFrom: form["form-time-job-from" + i].value,
            jobTo: form["form-time-job-to" + i].value,
            formAchieve: form["form-achieve" + i].value

        })
    }
    localStorage.setItem('wedata', JSON.stringify(formWeArr))

})


// Save image to localStorage
document.getElementById('form-ava').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
    const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
    localStorage.setItem('formava', base64String);
    document.getElementById('userava').src = `data:image/png;base64,${base64String}`
    };
    
    reader.readAsDataURL(file);
})


