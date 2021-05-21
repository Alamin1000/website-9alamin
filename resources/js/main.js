//STICKY MENU
$(document).ready(function(){
    $(".js-interactive").waypoint(function(direction){
        if (direction == "down"){
            $(".header-menu").addClass("sticky");
        } else {
            $(".header-menu").removeClass("sticky")
        }
    });
});
//MOBILE MENU
function openNav() {
    document.getElementById("overlay-menu").style.width = "100%";
}
function closeNav() {
    document.getElementById("overlay-menu").style.width = "0%";
};
//BROWSER SCROLL COMPATIBILITY
$(document).ready(function(){
    $("a").on('click', function(event){
        
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
