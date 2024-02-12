
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let pieces;

var sides;

var obj;

var statuses;



function HomeSetup() {

    pieces = [
        ["C#", "MySQL"],
        ["Unreal Engine"],
        ["C#", "Unity Engine"],
        ["HTML", "CSS", "Javascript"],
        ["Node.js", "MySQL", "CSS", "HTML", "Javascript"],
        ["Java", "Processing"],
        ["C#", "Unity Engine"],
        ["C#", "Unity Engine"],
        ["Game Maker Studio"],
        ["HTML", "CSS", "Javascript"]
    ];

    sides = document.getElementsByTagName("h4");

    obj = document.getElementsByClassName("content-item");

    // for(let i = 0; i < sides.length; i++) {
    //     statuses[i] = 0;
    // }


}

function CheckTags(id) {

    var meme = 0;
    for (let i = 0; i < pieces[id].length; i++) {

        for (let u = 0; u < sides.length; u++) {
            if (sides[u].innerHTML === pieces[id][i]) {
                //alert(sides[u].innerHTML);
                sides[u].style.color = "cadetblue";
                sides[u].style.transform = "translate(50px, 0)";
                sides[u].style.transition = "1s"
                
            }
        }
    }
}

function CheckItems(id) {

    Reset();
    
    for (let i = 0; i < pieces.length; i++) {
        obj[i].style.display = "none";
        
        for (let u = 0; u < pieces[i].length; u++) {

            if (pieces[i][u] === id) {
                

                //CheckTags(i);
                document.getElementById(id).style.color = "cadetblue";
                document.getElementById(id).style.transform = "translate(50px, 0)";
                document.getElementById(id).style.transition = "1s";
                obj[i].style.display = "block";
                
                
            }
        }
    }


}

function Hide() {
    for(let i = 0; i < obj.length; i++) {
        
        
    }
    
    endTimeout();
}

function Highlight(id) {
    document.getElementById(id).style.color = "cadetblue";
}

function Clear(id) {

    document.getElementById(id).style.color = "antiquewhite";
    
}

function Reset() {
    for (let u = 0; u < sides.length; u++) {


        sides[u].style.transform = "translate(0, 0)";
        sides[u].style.color = "antiquewhite";
       

    }
}

function ShowAll() {
    for (let i = 0; i < obj.length; i++) {
        obj[i].style.display = "block";

        // obj[i].style.opacity = "0";
        // obj[i].style.transform = "translate(0,100px)";
       
        // obj[i].style.transition = "1s";

        
        // 
        //obj[i].style.display = "none";
    }

    //obj[obj.length - 1].addEventListener('transitionend', Show(0));
    Reset();
}

function Show() {
    obj[num].style.opacity = "1";
        obj[num].style.transform = "translate(0, 0)";
}


