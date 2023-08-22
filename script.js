
var iframeGita = document.getElementById("iframeGita");
var controls = document.querySelector(".controls");
controls.style.display="none";
iframeGita.style.display="none";
var pageNo= document.getElementById("pagenumber").value;



function random(){
    var pageNo= document.getElementById("pagenumber").value;
    var newPageNo = 38+ parseInt(pageNo);
    alert(newPageNo);
    var newSrc = "https://heyzine.com/flip-book/829dfa8f37.html#page/" + newPageNo;
    
    iframeGita.src = newSrc;
}


function nepali(){
    iframeGita.style.display="block";
    controls.style.display="flex";
}



function goToChapter() {
    var chapter = document.getElementById("chapterSelect").value;
    
    if (chapter == "chapter1") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/75";
    } 
    else if(chapter == "chapter2") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/104";
    }
    else if(chapter == "chapter3") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/180";
    }
    else if(chapter == "chapter4") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/224";
    }
    else if(chapter == "chapter5") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/274";
    }
    else if(chapter == "chapter6") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/302";
    }
    else if(chapter == "chapter7") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/348";
    }
    else if(chapter == "chapter8") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/392";
    }
    else if(chapter == "chapter9") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/420";
    }
    else if(chapter == "chapter10") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/470";
    }
    else if(chapter == "chapter11") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/512";
    }
    else if(chapter == "chapter12") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/562";
    }
    else if(chapter == "chapter13") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/584";
    }
    else if(chapter == "chapter14") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/622";
    }
    else if(chapter == "chapter15") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/646";
    }
    else if(chapter == "chapter16") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/670";
    }
    else if(chapter == "chapter17") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/696";
    }
    else if(chapter == "chapter18") {
        iframeGita.src = "https://heyzine.com/flip-book/829dfa8f37.html#page/716";
    }
}
