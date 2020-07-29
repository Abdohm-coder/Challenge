$(function(){

    "use stict";

    $("body").click(function(){
        $(".nav-active").addClass("navbar-nav").removeClass("nav-active");
        $(".toggle").addClass("burger").removeClass("toggle");
    });

    $(".nav-bar").click(function(e){
        e.preventDefault();
        e.stopPropagation();
    });

    $(".navbar-nav .nav-item a").click(function(e){
        e.preventDefault();
        
        $("html,body").animate({
            scrollTop: $("#" + $(this).attr("data-scroll")).offset().top - 80
        },1000);
        
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    
    });



    //  Local Storage




    if(localStorage.getItem("Name")== null || localStorage.getItem("Name")==""){
        
        var setName = prompt("أدخل اسمك");

        localStorage.setItem("Name",setName);
      }

      alert("أهلا بك "+localStorage.getItem("Name"));




    //  Sync Navbar 




    $(window).scroll(function(){

        $(".block").each(function(){

            if($(window).scrollTop() > $(this).offset().top - 200){

                var blockID = $(this).attr("id");
                $(".navbar-nav .nav-item a[data-scroll='"+ blockID+"']").addClass("active").parent().siblings().find("a").removeClass("active");
                console.log();
            }
        });



    //      head animation


    $("#main .text h1").addClass("animation1");


        if($(window).scrollTop() >= $("#head").offset().top -80  && $(window).scrollTop() < $("#works").offset().top -80){
            
            if($("#main .text h1").hasClass("animation1")){

            }else{

            $("#main .text h1").addClass("animation1");

            }

        }else{

            $("#main .text h1").removeClass("animation1");

        }




        //      Works animation





        if($(window).scrollTop() >= $("#works").offset().top -400 && $(window).scrollTop() < $("#skills").offset().top){
            
            $(".images img").slideDown(1000);

        }else{

            $(".images img").slideUp(1000);
        }




        //      Skills animation





        if($(window).scrollTop() >= $("#skills").offset().top -200 && $(window).scrollTop() < $("#last").offset().top-200){
            
               $(".khanats .khana>div").fadeIn(500).addClass("progress-circle");            
               
            }else{

                $(".khanats .khana>div").fadeOut(2000).end().removeClass("progress-circle");
        }

    });
   
});