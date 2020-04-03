
var main_field = document.querySelector(".field");
var banner_container = document.querySelector(".banner-container");
var banner1 = document.querySelector(".banner1");
var player = document.querySelector(".player");
var field_transform = 65;
var incrementFieldIsTrue = false;


function isIncrementFieldTrue() {
  
    window.addEventListener("wheel", function(e){
      if (e) {
        incrementFieldIsTrue = true;
      } else {
        incrementFieldIsTrue = false;
      }
    })
  
    window.addEventListener("mousedown", function(){
        incrementFieldIsTrue = true;
        // player.style.animation = "animate-char6 steps(4) reverse infinite 1s";
    })
    
    window.addEventListener("mouseup", function(){
        incrementFieldIsTrue = false;
        player.style.animation = "";
    })

    window.addEventListener("mousescroll", function(e){
        e.preventDefault();
        incrementFieldIsTrue = true;
    })
}

function incrementFieldTransform(){
    if (incrementFieldIsTrue && field_transform >= -9610){
        field_transform -= 5;
        // player.innerHTML = field_transform;
    }

    if (field_transform <= -435 && field_transform >= -1435) {
        banner1.style.transform = "translateY(460px)";
    } else {
        banner1.style.transform = "translateY(0px)";
    }

    main_field.style.transform = "translateX(" + field_transform + "px)";
    banner_container.style.transform = "translateX(" + field_transform + "px)";
}

function play(){
    incrementFieldTransform();
}

window.addEventListener("load", function(){
    isIncrementFieldTrue();
    setInterval(function(){
        play();
    }, 15);
});