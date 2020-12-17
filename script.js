$(document).ready(function() {
    $("nav").find("li").on("click", "a", function() {
        $('#navbarNavDropdown').collapse('hide');
    });
});