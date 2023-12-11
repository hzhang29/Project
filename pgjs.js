
window.onload = function() {

let scrollCont = document.querySelector(".gallery");

scrollCont.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollCont.scrollLeft += evt.deltaY;
})


    let forward = document.getElementById("forward")
    let backward = document.getElementById("backward")



    forward.addEventListener("click", ()=>{
        scrollCont.style.scrollBehavior = "smooth"
        scrollCont.scrollLeft -= 330;
    })

    backward.addEventListener("click", ()=>{
        scrollCont.style.scrollBehavior = "smooth"
        scrollCont.scrollLeft +=330;
    })


}


/*I use multiple JS pages because window.onload does funky stuff I don't understand when there are too many
functions, and I don't know good ways to initiate some functions without using windows.onload so i thought it best
just to divide JS into different pages */