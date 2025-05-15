let hscoreEl = document.getElementById("hscore-el");
let hscore = 0;

function add1homescore(){
    hscore+=1;
    hscoreEl.textContent = hscore;
}
function add2homescore(){
     hscore+=2;
    hscoreEl.textContent = hscore;
}
function add3homescore(){
     hscore+=3;
    hscoreEl.textContent = hscore;
}

let gscoreEl = document.getElementById("gscore-el");
let gscore = 0;

function add1guessscore(){
    gscore+=1;
    gscoreEl.textContent = gscore;
}
function add2guessscore(){
     gscore+=2;
    gscoreEl.textContent = gscore;
}
function add3guessscore(){
     gscore+=3;
    gscoreEl.textContent = gscore;          
}


