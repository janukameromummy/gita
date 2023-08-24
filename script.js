
var iframeGita = document.getElementById("iframeGita");
var controls = document.querySelector(".controls");



function flip(){
    var pageNo= document.getElementById("pageno").value;
    var newPage= 1+parseInt(pageNo);
    var newSrc = "https://heyzine.com/flip-book/eb41065bbf.html#page/" + newPage;
    
    iframeGita.src = newSrc;
}
function goto() {
    var chapter = document.getElementById("chapterSelect").value;
    
    if (chapter == "chapter1") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/14";
    } 
    else if(chapter == "chapter2") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/27";
    }
    else if(chapter == "chapter3") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/52";
    }
    else if(chapter == "chapter4") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/67";
    }
    else if(chapter == "chapter5") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/82";
    }
    else if(chapter == "chapter6") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/92";
    }
    else if(chapter == "chapter7") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/108";
    }
    else if(chapter == "chapter8") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/117";
    }
    else if(chapter == "chapter9") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/127";
    }
    else if(chapter == "chapter10") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/139";
    }
    else if(chapter == "chapter11") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/152";
    }
    else if(chapter == "chapter12") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/173";
    }
    else if(chapter == "chapter13") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/180";
    }
    else if(chapter == "chapter14") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/193";
    }
    else if(chapter == "chapter15") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/203";
    }
    else if(chapter == "chapter16") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/213";
    }
    else if(chapter == "chapter17") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/221";
    }
    else if(chapter == "chapter18") {
        iframeGita.src = "https://heyzine.com/flip-book/eb41065bbf.html#page/230";
    }
}
