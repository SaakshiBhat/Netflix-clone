//Extent the questions on home page
var plusSign = document.querySelectorAll('.plus');
var qContent = document.querySelectorAll('.q-content');


function expand(e){
    //removeShow();
    var plusContentTab = document.querySelector(`#${this.id}-content`);
    plusContentTab.classList.toggle('show');
}

plusSign.forEach(item => item.addEventListener('click' , expand)); //expand the div on click on plus sign


// Display the info about any movie on clicking it
var allMovies = document.querySelectorAll(".movies");
allMovies.forEach(item => item.addEventListener('click',display));

function display(){
    console.log(this.parentElement.id);
    var parent = this.parentElement.id;

    var actualMovie = document.querySelector(`#${this.id}-info`); //which movie to display
    var thatDiv = document.querySelector(`#${parent}-info`); //below which genre to display

    //remove show from all other movies before displaying next one
    document.querySelectorAll('.this-movie').forEach(item=>item.classList.remove('show'));
    thatDiv.classList.add('show');
    actualMovie.classList.add('show');
}

//Scroll Left AND RIGHT
var scrollBarsR = document.querySelectorAll('.scroll-right');
var scrollBarsL = document.querySelectorAll('.scroll-left');
console.log(scrollBarsR);
scrollBarsR.forEach(item => item.addEventListener('click' , slide));
scrollBarsL.forEach(item => item.addEventListener('click' , slide));

function slide(e){
    var container;
    console.log(this.className);
    if(this.className == 'scroll-left'){
        container = this.previousElementSibling.id;
        document.getElementById(container).scrollLeft -= 300;
    }
    else if(this.className == 'scroll-right'){
        container = this.previousElementSibling.previousElementSibling.id;
        document.getElementById(container).scrollLeft +=300;
    }
}

//Close movies on cross button
var close = document.querySelectorAll('.close');
close.forEach(item=>item.addEventListener('click',closeit));

function closeit(){
    this.parentElement.classList.remove('show');
}

//PLAY VIDEO WHEN CLICKED ON PLAY
var movieplay = document.querySelector('.play');

movieplay.addEventListener('click',playit);
console.log(movieplay);

function playit(){
    console.log(this.id);
    document.querySelector('.fullscreen').classList.add('show');
}
