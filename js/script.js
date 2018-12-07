 $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").prev().slideToggle();
 });