'use strict'

// $('.owl-carousel').owlCarousel({
//     loop:true,    
//     margin:10,
//     center:true,
//     autoplay:true,
//     dots:false,    
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3.5
//         }
//     }
// })


$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        centerPadding: '100px',
        arrows: false,
        centerMode: true,
        autoplay:true,
        swipeToSlide:true,
        adaptiveHeight:true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                centerPadding: '120px'                                                
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  centerPadding: '190px'                                                
                }
            },
            {
                breakpoint: 426,
                settings: {
                  slidesToShow: 1,
                  centerPadding: '25px'
                }
            },
            {
                breakpoint: 376,
                settings: {
                  slidesToShow: 1,
                  centerPadding: '20px'
                }
            },
            {
                breakpoint: 321,
                settings: {
                  slidesToShow: 1,
                  centerPadding: '0px'
                }
            }
        ]
    });
});


function sidebarpl(option){
    if(option === "tik"){
        document.getElementById('pl-tik').className = "mt-2 color--blue";
        document.getElementById('pl-all').className = "color--grey";
        document.getElementById('pl-dka').className = "mt-2 color--grey";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("plcontent").innerHTML =
            this.responseText;
            }
        };
        xhttp.open("GET", "text/tik.txt", true);
        xhttp.send();
    }
    else if(option === "all"){
        document.getElementById('pl-tik').className = "mt-2 color--grey";
        document.getElementById('pl-all').className = "color--blue";
        document.getElementById('pl-dka').className = "mt-2 color--grey";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("plcontent").innerHTML =
            this.responseText;
            }
        };
        xhttp.open("GET", "text/all.txt", true);
        xhttp.send();
    }
    else if(option === "dka"){
        document.getElementById('pl-tik').className = "mt-2 color--grey";
        document.getElementById('pl-all').className = "color--grey";
        document.getElementById('pl-dka').className = "mt-2 color--blue";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            document.getElementById("plcontent").innerHTML =
            this.responseText;
            }
        };
        xhttp.open("GET", "text/dka.txt", true);
        xhttp.send();
    }
}