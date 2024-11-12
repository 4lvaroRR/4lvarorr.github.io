const btn1=document.querySelector(".boton-reservar");
 btn1.addEventListener("click",()=>{

    window.open("https://forms.office.com/pages/responsepage.aspx?id=7iKSZuXVOUWYfqMBWrbfMcSgrtTyGGBGrC7Epz79T4hUNkRPSFdYMTlZWlVSSjJIUjIwTThWM1A4Mi4u&origin=lprLin")

 });
 
 $(window).load(function() {
   setTimeout(function () {
       $(".loader").fadeOut("slow");
    }, 1000);
      
});