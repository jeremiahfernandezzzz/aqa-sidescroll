
var main_field = document.querySelector(".field");
var banner_container = document.querySelector(".banner-container");
var banner1 = document.querySelector(".banner1");
// var services = document.querySelector(".services"); 
var ball = document.querySelector(".ball");
var field_transform = 0;
var incrementFieldIsTrue = 0;


function isIncrementFieldTrue() {
  
    window.addEventListener("wheel", function(e){
        e.preventDefault();

        if (e.deltaY < 0 && field_transform < 0) {
            field_transform += 50;
        } else if (e.deltaY > 0 && field_transform > -9300) {
            field_transform -= 50;
        }
        
        ball.style.backgroundPosition = 3*field_transform +  "px";
        // ball.innerHTML = field_transform;
    })
  
    // window.addEventListener("mousedown", function(){
    //     incrementFieldIsTrue = true;
    // })
    
    // window.addEventListener("mouseup", function(){
    //     incrementFieldIsTrue = false;
    //     ball.style.animation = "";
    // })

    window.addEventListener("keydown", function(e){
        // e.preventDefault();

        if (e.keyCode == 37 && field_transform <= 0) {
            // field_transform += 25;
            incrementFieldIsTrue = 2;
        } else if (e.keyCode == 39 && field_transform > -9300) {
            incrementFieldIsTrue = 1;
        }
        
        // ball.style.backgroundPosition = 6*field_transform +  "px";
        // ball.innerHTML = field_transform;
    })
  
    window.addEventListener("keyup", function(e){
        // e.preventDefault();

        if (e.keyCode == 37 && field_transform <= 0) {
            // field_transform += 25;
            incrementFieldIsTrue = 0;
        } else if (e.keyCode == 39 && field_transform > -9300) {
            incrementFieldIsTrue = 0;
        }
        
        // ball.style.backgroundPosition = 6*field_transform +  "px";
        // ball.innerHTML = field_transform;
    })
}

function incrementFieldTransform(){
    // ball.style.left =  field_transform / 9810 * -100 + "vw";

    if (incrementFieldIsTrue == 1 && field_transform > -9300){
        field_transform -= 10;
        ball.style.animation = "animate-char6 steps(7) infinite 1s";
    } else if (incrementFieldIsTrue == 2 && field_transform <= 0) {
        field_transform += 10;
        ball.style.animation = "animate-char6 steps(7) reverse infinite 1s";
    } else {
        ball.style.animation = "";
    }

    if (field_transform <= -250 && field_transform >= -1600) {
        banner1.style.transform = "translateY(450px)";
    } else {
        banner1.style.transform = "translateY(0px)";
    }

    if (field_transform <= -2000 && field_transform >= -3500) {
        setTimeout(function(){
            document.querySelector(".service1").style.transform = "translateX(-500px)";            
            document.querySelector(".service1").style.opacity = "1";            
        }, 100)
        setTimeout(function(){
            document.querySelector(".service3").style.transform = "translateX(-500px)";            
            document.querySelector(".service3").style.opacity = "1";
        }, 500)
        setTimeout(function(){
            document.querySelector(".service5").style.transform = "translateX(-500px)";            
            document.querySelector(".service5").style.opacity = "1";
        }, 900)
        setTimeout(function(){
            document.querySelector(".service7").style.transform = "translateX(-500px)";            
            document.querySelector(".service7").style.opacity = "1";
        }, 1300)

        setTimeout(function(){
            document.querySelector(".service2").style.transform = "translateX(500px)";            
            document.querySelector(".service2").style.opacity = "1";            
        }, 1700)
        setTimeout(function(){
            document.querySelector(".service4").style.transform = "translateX(500px)";            
            document.querySelector(".service4").style.opacity = "1";
        }, 2100)
        setTimeout(function(){
            document.querySelector(".service6").style.transform = "translateX(500px)";            
            document.querySelector(".service6").style.opacity = "1";
        }, 2500)
        setTimeout(function(){
            document.querySelector(".service8").style.transform = "translateX(500px)";            
            document.querySelector(".service8").style.opacity = "1";
        }, 2900)
    } else {

        document.querySelector(".service1").style.opacity = "0";           
        document.querySelector(".service3").style.opacity = "0";           
        document.querySelector(".service5").style.opacity = "0";           
        document.querySelector(".service7").style.opacity = "0";           

        document.querySelector(".service2").style.opacity = "0";           
        document.querySelector(".service4").style.opacity = "0";           
        document.querySelector(".service6").style.opacity = "0";           
        document.querySelector(".service8").style.opacity = "0";    
        
        document.querySelector(".service1").style.transform = "translateX(0px)";  
        document.querySelector(".service3").style.transform = "translateX(0px)";
        document.querySelector(".service5").style.transform = "translateX(0px)";
        document.querySelector(".service7").style.transform = "translateX(0px)";
        
        document.querySelector(".service2").style.transform = "translateX(0px)";
        document.querySelector(".service4").style.transform = "translateX(0px)";
        document.querySelector(".service6").style.transform = "translateX(0px)";
        document.querySelector(".service8").style.transform = "translateX(0px)";      
    }

    
    if (field_transform <= -4000 && field_transform >= -5600) {
        setTimeout(function(){
            document.querySelector(".line1").style.opacity = "1";
        }, 100)
        
        setTimeout(function(){
            document.querySelector(".line2").style.opacity = "1";
        }, 800)
        
        setTimeout(function(){
            document.querySelector(".line3").style.opacity = "1";
            // document.querySelector(".line3").style.transform = "translateX(0px)";
        }, 1500)
        
        setTimeout(function(){
            document.querySelector(".line4").style.opacity = "1";
        }, 2800)
        
        setTimeout(function(){
            document.querySelector(".line5").style.opacity = "1";
        }, 3800)
        
        setTimeout(function(){
            document.querySelector(".line6").style.opacity = "1";
        }, 4800)
        
        setTimeout(function(){
            document.querySelector(".line7").style.opacity = "1";
        }, 6300)
        
        setTimeout(function(){
            document.querySelector(".line8").style.opacity = "1";
        }, 7000)
        
        setTimeout(function(){
            document.querySelector(".line9").style.opacity = "1";
        }, 8700)

    } else {
        document.querySelector(".line1").style.opacity = "0";
        
        document.querySelector(".line2").style.opacity = "0";
        
        document.querySelector(".line3").style.opacity = "0";
        // document.querySelector(".line3").style.transform = "translateX(-100px)";

        document.querySelector(".line4").style.opacity = "0";
        
        document.querySelector(".line5").style.opacity = "0";
        
        document.querySelector(".line6").style.opacity = "0";
        
        document.querySelector(".line7").style.opacity = "0";
        
        document.querySelector(".line8").style.opacity = "0";
        
        document.querySelector(".line9").style.opacity = "0";
    }

    if (field_transform <= -6000 && field_transform >= -7400) {
        setTimeout(function(){
            document.querySelector(".testimonial1").style.transform = "translateX(0px)";            
            document.querySelector(".testimonial1").style.opacity = "1";            
        }, 100)
        setTimeout(function(){
            document.querySelector(".testimonial2").style.transform = "translateX(0px)";            
            document.querySelector(".testimonial2").style.opacity = "1";
        }, 1100)
        setTimeout(function(){
            document.querySelector(".testimonial3").style.transform = "translateX(0px)";            
            document.querySelector(".testimonial3").style.opacity = "1";
        }, 2100)
        setTimeout(function(){
            document.querySelector(".testimonial4").style.transform = "translateX(0px)";            
            document.querySelector(".testimonial4").style.opacity = "1";
        }, 3100)
    } else {
        document.querySelector(".testimonial1").style.transform = "translateX(500px)";            
        document.querySelector(".testimonial1").style.opacity = "0";    

        document.querySelector(".testimonial2").style.transform = "translateX(-500px)";            
        document.querySelector(".testimonial2").style.opacity = "0"; 

        document.querySelector(".testimonial3").style.transform = "translateX(500px)";            
        document.querySelector(".testimonial3").style.opacity = "0";

        document.querySelector(".testimonial4").style.transform = "translateX(-500px)";            
        document.querySelector(".testimonial4").style.opacity = "0";
    }

    main_field.style.transform = "translateX(" + field_transform + "px)";
    banner_container.style.transform = "translateX(" + field_transform + "px)";
}

function play(){
    incrementFieldTransform();
}

function fieldReset(){
    main_field.style.transform = "";
    banner_container.style.transform = "";
    document.querySelector(".start").innerHTML = "press right arrow or<br/>scroll down to start"
}

window.addEventListener("load", function(){
    fieldReset();
    isIncrementFieldTrue();
    setInterval(function(){
        play();
    }, 15);
});