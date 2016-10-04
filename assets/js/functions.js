/*global $, jQuery */
/* Contents
// ------------------------------------------------>
	1. MAGNIFIC POPUP
	2. PROJECTS FLITER
*/	
$(document).ready(function() {
    "use strict";

	
    /* ------------------ 1.MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });

    /* ------------------ 2.PROJECTS FLITER ------------------ */

    var $ProjectsFilter = $(".projects-filter"),
        ProjectLength = $ProjectsFilter.length,
        $shopFilter = $(".shop-filter"),
        shopLength = $shopFilter.length,
        $projectsAll = $("#projects-all"),
        $shopAll = $("#shop-all");

    // init Isotope For Projects
    $ProjectsFilter.find("a").click(function(e) {
        e.preventDefault();
        $ProjectsFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });

    if (ProjectLength > 0) {
        $projectsAll.imagesLoaded().progress(function() {
            $projectsAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".project-item",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    $ProjectsFilter.find("a").click(function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $projectsAll.imagesLoaded().progress(function() {
            $projectsAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".project-item",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });


}(jQuery));