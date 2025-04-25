document.addEventListener("DOMContentLoaded", function () {
    function initSplide(selector, options, useExtensions = false) {
        const element = document.querySelector(selector);
        if (element) {
            const splideInstance = new Splide(selector, options);
            if (useExtensions && window.splide?.Extensions) {
                splideInstance.mount(window.splide.Extensions); // Mount with Extensions
            } else {
                splideInstance.mount(); // Normal Mount
            }
        }
    }

    // Define Splide configurations
    const sliders = [
        { selector: ".splide_main_1", options: { type: "loop", perPage: "auto", pagination: false, arrows: false, gap: "1em", perMove: 1, autoplay: false, drag: true }, useExtensions: false },
        { selector: ".partner_cards", options: { type: "loop", perPage: "auto", pagination: false, arrows: false, gap: "1em", perMove: 1, autoplay: false, drag: true }, useExtensions: false },
        { selector: ".development_slider", options: { type: "loop", perPage: "auto", pagination: false, arrows: false, gap: "1em", perMove: 1, autoplay: false, drag: true }, useExtensions: false },
        { selector: ".splide_main", options: { type: "loop", perPage: 4, pagination: false, arrows: false, focus: "center", gap: "1em", speed: 30 }, useExtensions: true },
        { selector: ".splide_2", options: { type: "loop", perPage: "auto", pagination: false, arrows: false, gap: "1em", speed: 30, autoWidth: true }, useExtensions: true }
    ];

    // Initialize each Splide instance
    sliders.forEach(slider => initSplide(slider.selector, slider.options, slider.useExtensions));
});


$(document).ready(function () {
    let reviewList = $(".reviews-list");
    // Ensure .reviews-list is scrollable
    if (reviewList.length === 0) {
        console.log("Error: .reviews-list not found!");
    } else {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        // Animate each .single-review when it enters the scrollable .reviews-list
        $(".single-review").each(function () {
            gsap.fromTo(
                $(this),
                { opacity: 1, y: 50, scale: 0.78 }, // Start state (hidden and scaled down)
                {
                    opacity: 1,
                    y: 0,
                    scale: 1, // End state (fully visible and normal scale)
                    duration: 1,
                    scrollTrigger: {
                        trigger: $(this),
                        start: "top 80%", // When 80% of the element is visible
                        end: "bottom 50%",
                        scrub: 1,
                    },
                }
            );
        });

        // Update progress bar based on scroll position
        const progressBar = $(".progress-bar");

        reviewList.scroll(function () {
            console.log("Scroll event triggered!");  // Check if this is logged in the console

            let scrollTop = reviewList.scrollTop();
            let scrollHeight = reviewList[0].scrollHeight - reviewList.innerHeight();
            let progress = (scrollTop / scrollHeight) * 100;

            // Ensure progress stays between 0 and 100
            progress = Math.min(Math.max(progress, 0), 100);

            // Log the progress for debugging
            console.log("Scroll progress:", progress);

            // Animate the height of the progress bar using GSAP
            const progressBar = $(".progress-bar");
            gsap.to(progressBar, {
                height: progress + "%", // Animate height based on scroll progress
                duration: 0.3
            });
        });
    }
    $('.faq-sec .pt-2:not(:first-child) .overflow-hidden').hide();
    $('.faq-sec .pt-2:not(:first-child) button').attr('aria-expanded', 'false'); // Set aria-expanded to false for all except the first
    $('.faq-sec .pt-2:first-child button .transform-icon').text('-'); // Set the first button icon to '-'

    // Handle FAQ item click
    $('.faq-sec button').on('click', function () {
        var $button = $(this); // The clicked button
        var $content = $button.next('div.accordian-class'); // The content to toggle
        //var $icon = $button.find('span'); // The icon (either "+" or "-")
        var isExpanded = $button.attr('aria-expanded') === 'true'; // Check if it's currently expanded

        // Close all other FAQs
        $('.faq-sec button').not($button).attr('aria-expanded', 'false');
        $('.faq-sec .accordian-class').not($content).slideUp(); // Hide other content

        // If the clicked item was not expanded, expand it
        $(".faq-sec button .transform-icon").html('+');
        if (!isExpanded) {
            $content.slideDown(); // Show the clicked content
            $button.attr('aria-expanded', 'true');
            $button.find(".transform-icon").html("-");
            // $icon.text('-'); // Change icon to minus
        } else {
            $content.slideUp(); // Hide the clicked content if it's already expanded
            $button.attr('aria-expanded', 'false');
            $icon.text('+'); // Change icon to plus
        }
    });
    $(".light-theme .header-logo").toggleClass("hidden");
    $(".megaMenu").mouseover(function () {
        $(".header").addClass('menu-active');
        $(".header-logo").toggleClass("hidden");
        $(".light-theme .header-logo").toggleClass("hidden");
    });
    $(".megaMenu").mouseout(function () {
        $(".header").removeClass('menu-active');
        $(".header-logo").toggleClass("hidden");
        $(".light-theme .header-logo").toggleClass("hidden");
    });

});


$(document).ready(function () {
    $(".tab-button").click(function () {
        // Reset only within the same parent container
        var $parentContainer = $(this).closest(".tab-container"); // Adjust this selector if needed
        $parentContainer.find(".tab-button").removeClass("active");
        $parentContainer.find(".tab-button div").removeClass("home-module--techActive--abf49");
        $parentContainer.find(".tab-button div strong").removeClass("!font-bold");
        $parentContainer.find(".tab-content").addClass("hidden");

        // Activate the clicked button and corresponding content
        $(this).addClass("active");
        $(this).find("div").addClass("home-module--techActive--abf49");
        $(this).find("div strong").addClass("!font-bold");

        var tabId = $(this).data("tab");
        $("#" + tabId).removeClass("hidden");
    });

    // Ensure the first tab is active within each tab-container
    $(".tab-container").each(function () {
        $(this).find(".tab-button:first").addClass("active");
        $(this).find(".tab-button:first div").addClass("home-module--techActive--abf49");
        $(this).find(".tab-content").addClass("hidden");
        $(this).find(".tab-content:first").removeClass("hidden");
    });
});




$('.data-counter').counterUp({
    delay: 10,
    time: 1000
});