// offer close
var offerBar = document.getElementById("offer")
var offerPara = document.getElementById("offer-para")
var closeOffer = document.getElementById("close-offer")

closeOffer.addEventListener("click",function(){
    offerBar.style.display="none"
})

// sidemenubar
let sidenav = document.getElementById("sidenav")
let menubarClose = document.getElementById("menubar-close")
let menubarPara = document.getElementById("menubar-para")
let menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})


menubarClose.addEventListener("click",function(){
    sidenav.style.left="-50%"
})



// collection
var productContainer = document.getElementById("container")
var search = document.getElementById("search")
var productList = productContainer.getElementsByClassName("collection-img")
var result = document.getElementById("result")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for (count=0; count<productList.length; count=count+1){
        var productname = productList[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
            console.log("result")
            // container.textContent= "No result found"
        }

    }
})

// slider
// var sliderleftbutton = document.getElementById("slider-left-activate")
// var sliderrightbutton =document.getElementById("slider-right-activate")
// var sliderimage= document.querySelector(".slider-image-container")
// var slidermargin=0

// console.log(sliderleftbutton)

// sliderrightbutton.addEventListener("click",function(){
//     slidermargin=slidermargin+100

//     if(slidermargin>200)
//     {
//         slidermargin=0
//         sliderimage.style.marginLeft=0;
//     }
//     else{
//         sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
    
   

// }
// )

// sliderleftbutton.addEventListener("click",

// function(){

//     if(slidermargin==0)
//     {
       
//         slidermargin=200
//         sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
//     else{

//         slidermargin=slidermargin-100
//     sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
    
    
// }
// )
//check box
document.addEventListener('DOMContentLoaded', ()=>{
    var check_box = document.querySelectorAll(".check_box")
    var product = document.querySelectorAll("#imagecontainer")

    check_box.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filter();
        });
    });
    function filter() {
        var categories = []
        check_box.forEach(checkbox => {
            if (checkbox.checked) {
                categories.push(checkbox.value);
            }
        });

        product.forEach(product => {
            var productCategory = product.getAttribute('data-filter');
            if (categories.includes(productCategory)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});