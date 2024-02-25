(function ($) {
   "use strict";

   /*=========================
	PRELOADER JS
	===========================*/
   $(window).on("load", function (event) {
      $(".preloader").delay(500).fadeOut(500);
   });

   /*=========================
	HERO SLIDER JS
	===========================*/
   function heroSlider() {
      var BasicSlider = $(".hero-slider");
      BasicSlider.on("init", function (e, slick) {
         var $firstAnimatingElements = $(".hero-slide:first-child").find(
            "[data-animation]"
         );
         doAnimations($firstAnimatingElements);
      });
      BasicSlider.on(
         "beforeChange",
         function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
               '.hero-slide[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
         }
      );
      BasicSlider.on(
         "init reInit afterChange",
         function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $(".hero-area .slider-nav-counter").html(
               "<span>" + i + "</span>" + " / " + slick.slideCount
            );
         }
      );
      BasicSlider.slick({
         autoplay: false,
         autoplaySpeed: 10000,
         dots: false,
         fade: true,
         arrows: true,
         appendArrows: ".hero-area .slider-nav",
         prevArrow:
            '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
         nextArrow:
            '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
      });

      function doAnimations(elements) {
         var animationEndEvents =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
         elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data("delay");
            var $animationType = "animated " + $this.data("animation");
            $this.css({
               "animation-delay": $animationDelay,
               "-webkit-animation-delay": $animationDelay,
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
               $this.removeClass($animationType);
            });
         });
      }
   }
   heroSlider();

   /*=========================
	brand-slider
	===========================*/
   $(".brand-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      appendArrows: ".brand-area .slider-nav",
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
               arrows: true,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               arrows: true,
            },
         },
      ],
   });

   /*=========================
	company-slider
	===========================*/
   $(".company-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
      appendArrows: ".company-area .slider-nav",
      appendDots: ".company-area .slider-nav",
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });

   /*=========================
	testimony-tabs
	===========================*/
   $(".testimony-area .testimony-tabs").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      asNavFor: ".testimony-area .testimony-links",
      fade: true,
   });
   $(".testimony-area .testimony-links").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      asNavFor: ".testimony-area .testimony-tabs",
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
      appendArrows: ".testimony-area .slider-nav",
      vertical: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               arrows: true,
               vertical: false,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 3,
               arrows: true,
               vertical: false,
            },
         },
      ],
   });

   // service-testimony-slider
   $(".service-testimony-slider .testimony-tabs").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
      appendArrows: ".service-testimony-slider .slider-nav",
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });

   // search-popup
   const searchPop = document.querySelectorAll('.search-popup')

   searchPop.forEach(pop => {
      let triggerIcon = document.querySelectorAll('.search-pop-close, .search-pop-open')
      triggerIcon.forEach(icon => {
         icon.addEventListener('click', (e)=>{
            e.preventDefault();
            pop.classList.toggle('active')
         })
      });
   });


   // header top gap
   const gapTaker = document.querySelectorAll(".hero-area, .page-title-area");

   window.addEventListener("load", () => {
      gapTaker.forEach((taker) => {
         let headerHeight;
         if (document.querySelector(".header-area")) {
             headerHeight = document
               .querySelector(".header-area")
               .getBoundingClientRect().height;
         }
         taker.style.marginTop = headerHeight + "px";
      });
   });

   /*=========================
	advice-slider
	===========================*/
   $(".advice-slider").on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
         var i = (currentSlide ? currentSlide : 0) + 1;
         $(".advice-area .slider-nav-counter").html(
            "<span>" + i + "</span>" + " / " + slick.slideCount
         );
      }
   );
   $(".advice-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      appendArrows: ".advice-area .slider-nav",
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });



   // shop-kit-slider
   $(".shop-kit-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
      appendArrows: ".shop-kit-slider-wrap .slider-nav",

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
               arrows: true,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               arrows: true,
            },
         },
      ],
   });


   // single-shop-slider
   $(".single-shop-slider").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      let next_slick_img = $('.single-shop-slide.slick-current').next().find('img').attr("src")
      let prev_slick_img = $('.single-shop-slide.slick-current').prev().find('img').attr("src")

      $('.single-shop-nav-next img').attr("src", next_slick_img);
      $('.single-shop-nav-prev img').attr("src", prev_slick_img);
  });

   $(".single-shop-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '.single-shop-nav-prev',
      nextArrow: '.single-shop-nav-next',
   });

   // show or hide input password text
   const passwordBx = document.querySelectorAll(".password-bx");

   passwordBx.forEach((bx) => {
      let input = bx.querySelector("input");
      let icon = bx.querySelector("i");

      icon.addEventListener("click", () => {
         if (input.type == "password") {
            input.type = "text";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
         } else {
            input.type = "password";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
         }
      });
   });

   /*=========================
	magnificPopup image JS
	===========================*/
   $(".video-btn").magnificPopup({
      type: "iframe",
   });

   $(".pop-img-btn").magnificPopup({
      type: "image",
   });
   $(".gallery-item > a").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });
   $(".single-shop-slide a.icon").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });


   // responsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
			document.querySelector('.resonsive-slide').classList.toggle('active')
		})
	});
	
	// if has child
	const listItem = document.querySelectorAll('.responsive-menu ul li')
	listItem.forEach(item => {
		if (item.contains(item.querySelector('ul'))) {
			item.classList.add('has-child')
			item.querySelector('a').addEventListener('click', (e)=>{
				e.preventDefault();
			})
		}
	});

	// responsive menu clicking event
	const responsiveMenuLink = document.querySelectorAll('.responsive-menu ul li.has-child')
	responsiveMenuLink.forEach(link => {
		link.addEventListener('click', ()=>{
			let submenu = document.querySelector('.submenu')
			link.classList.toggle('active');
			submenu.classList.toggle('active');
	
			if (submenu.style.maxHeight) {
				submenu.style.maxHeight = null
			}else{
				submenu.style.maxHeight = submenu.scrollHeight + 10 + 'px'
			}
		})
	});

   // make same height and width by padding
   addPaddingAsWidth(document.querySelectorAll(".testimony-tab"));
   addPaddingAsWidth(document.querySelectorAll(".testimony-link"));

   function addPaddingAsWidth(items) {
      items.forEach((item) => {
         item.style.paddingTop = item.getBoundingClientRect().width + "px";
      });
   }

   // apply lergest height to items
   window.addEventListener("load", () => {
      applyLergestheight(document.querySelectorAll(".company-slide"));
      applyLergestheight(document.querySelectorAll(".experience-bx"));
      applyLergestheight(document.querySelectorAll(".repair-bx"));
      applyLergestheight(document.querySelectorAll(".advice-slide"));
      applyLergestheight(document.querySelectorAll(".about-offer-card"));
      applyLergestheight(document.querySelectorAll(".single-service-item"));
   });
   function applyLergestheight(items) {
      const itemheight = [];
      items.forEach((item) => {
         itemheight.push(item.getBoundingClientRect().height);
      });
      items.forEach((item) => {
         item.style.height = Math.max.apply(null, itemheight) + "px";
      });
   }

   //FAQ ACCORDION
   const faqWrap = document.querySelectorAll(".faq-box-wrap");
   faqWrap.forEach((wrap) => {
      let faqBox = wrap.querySelectorAll(".faq-box");
      faqBox.forEach((bx) => {
         let title = bx.querySelector(".faq-box-title");
         let body = bx.querySelector(".faq-box-body");
         if (bx.classList.contains("active")) {
            body.style.maxHeight = body.scrollHeight + "px";
         }
         title.addEventListener("click", () => {
            if (bx.classList.contains("active")) {
               bx.classList.remove("active");
               body.style.maxHeight = null;
            } else {
               for (let i = 0; i < faqBox.length; i++) {
                  faqBox[i].classList.remove("active");
                  faqBox[i].querySelector(".faq-box-body").style.maxHeight =
                     null;
               }
               bx.classList.add("active");
               body.style.maxHeight = body.scrollHeight + "px";
            }
         });
      });
   });


   // hidden address field
   const hiddenAdress = document.querySelectorAll('.address-hidden-bx')
   hiddenAdress.forEach(bx => {
      let title = bx.querySelector('h4')
      title.addEventListener('click', ()=>{
         bx.classList.toggle('active')
      })
   });



   // select sibling child
   const selectableList = document.querySelectorAll(
      ".shop-filter-category ul li, .shop-filter-list li, .shop-sort li, .shop-view-mode li, .color-list li, .size-list li"
   );
   selectableList.forEach((list) => {
      list.addEventListener("click", () => {
         let sibling = list.parentElement.children;

         if (list.classList.contains('active')) {
            for (let i = 0; i < sibling.length; i++) {
               sibling[i].classList.remove("active");
            }
         }else{
            for (let i = 0; i < sibling.length; i++) {
               sibling[i].classList.remove("active");
            }
            list.classList.add("active");
         }
      });
   });

   // selectable star action
   const selectableStarts = document.querySelectorAll('.selectable-start li')

   selectableStarts.forEach((star, index) => {
      star.addEventListener('click', ()=>{
         for (let i = 0; i < star.parentElement.children.length; i++) {
           star.parentElement.children[i].classList.remove('ratted')
         }
         for (let i = 0; i <= index; i++) {
           star.parentElement.children[i].classList.add('ratted')
         }
         document.getElementsByName('ratted-value')[0].value = index + 1
      })
   });


   

   // change the view mode in shop page
   const shopViewModebtns = document.querySelectorAll(".shop-view-mode li");
   shopViewModebtns.forEach((btn) => {
      let productWrap = document.querySelector(".product-item-wrap");
      btn.addEventListener("click", () => {
         productWrap.classList.remove("list-mode");
         if (btn.classList.contains("list-mode-btn")) {
            productWrap.classList.add("list-mode");
         }
      });
   });

   const shopFIlterShower = document.querySelectorAll(
      ".shop-filter-close, .shop-filter-open, .shop-filter-overlay"
   );
   shopFIlterShower.forEach((btn) => {
      btn.addEventListener("click", () => {
         let shopFilterWrap = document.querySelector(".shop-page-area");
         shopFilterWrap.classList.toggle("offset-active");
      });
   });

   // price range
   $(document).ready(function () {
      if (document.getElementById("slider-range") != null) {
         $(".noUi-handle").on("click", function () {
            $(this).width(50);
         });
         var rangeSlider = document.getElementById("slider-range");
         var moneyFormat = wNumb({
            decimals: 0,
            thousand: ",",
            prefix: "$",
         });
         noUiSlider.create(rangeSlider, {
            start: [1000, 4000],
            step: 1,
            range: {
               min: [10],
               max: [5000],
            },
            format: moneyFormat,
            connect: true,
         });

         // Set visual min and max values and also update value hidden form inputs
         rangeSlider.noUiSlider.on("update", function (values, handle) {
            document.getElementById("slider-range-value1").innerHTML =
               values[0];
            document.getElementById("slider-range-value2").innerHTML =
               values[1];
            document.getElementsByName("min-value").value = moneyFormat.from(
               values[0]
            );
            document.getElementsByName("max-value").value = moneyFormat.from(
               values[1]
            );
         });
      }
   });

   //  add serial-no
   const serialList = document.querySelectorAll(".serial-no");
   serialList.forEach((list, index) => {
      list.children[0].innerText = index + 1;
   });

   // qty
   const qty = document.querySelectorAll("div.qty");
   qty.forEach((wrap) => {
      let input = wrap.querySelector("input");
      let stepUp = wrap.querySelector(".spin-up");
      let stepDown = wrap.querySelector(".spin-down");
      stepUp.addEventListener("click", () => {
         input.stepUp();
      });
      stepDown.addEventListener("click", () => {
         input.stepDown();
      });
   });

   // sticky
   var wind = $(window);
   var sticky = $(".header-content");
   wind.on("scroll", function () {
      var scroll = wind.scrollTop();
      if (scroll < 150) {
         sticky.removeClass("sticky");
      } else {
         sticky.addClass("sticky");
      }
   });

   // GALLERY AREA
   // GALLERY MASONRY
   if (window.matchMedia("(max-width: 767px)").matches) {
      $(".gallery-content").slick({
         slidesToShow: 2,
         slidesToScroll: 1,
         dots: false,
         arrows: true,
         appendArrows: ".gallery-area .slider-nav",
         prevArrow:
            '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
         nextArrow:
            '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
      });
   } else {
      $(".gallery-content").imagesLoaded(function () {
         $(".gallery-content").isotope({
            itemSelector: ".gallery-item",
            masonry: {            
               columnWidth: ".gallery-sizer",
             }
         });

         // skrollr activation
         var s = skrollr.init({
            forceHeight: false,
            smoothScrollingDuration: 100,
         });
         if (s.isMobile()) {
            s.destroy();
         }
      });
   }

   // GALLERY PGGE 
   	// init Isotope
	$('.gallery-page-content').imagesLoaded( function() {
		var $grid = $('.gallery-page-content').isotope({
         itemSelector: ".gallery-item",
         masonry: {            
            columnWidth: ".gallery-sizer",
          }
		});
		// filter items on button click
		$('.gallery-page-link').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			$(this).addClass('active').siblings().removeClass('active');
		});

		const galleryFilter = document.querySelectorAll('.gallery-page-link, .gallery-page-overlay, .gallery-filter-btn')
		galleryFilter.forEach(btn => {
			btn.addEventListener('click', ()=>{
				for (let i = 0; i < galleryFilter.length; i++) {
					galleryFilter[i].classList.toggle('active')
				}
			})
		});
	 });

   // niceSelect
   $("select").niceSelect();

   /*=========================
	SCROLL-UP JS
	===========================*/
   $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });

   // account address edit 
   const accountAddressBx = document.querySelectorAll('.account-address-bx')
   accountAddressBx.forEach(bx => {
      let icon = bx.querySelector('.icon')
      icon.addEventListener('click', ()=>{
         bx.classList.toggle('active')
      })
      
   });

   // custom tab
   tabFunc(
      document.querySelectorAll(".product-link li"),
      document.querySelectorAll(".product-tab")
   );
   tabFunc(
      document.querySelectorAll(".service-choose-link li"),
      document.querySelectorAll(".service-choose-tab")
   );
   tabFunc(
      document.querySelectorAll(".account-link li"),
      document.querySelectorAll(".account-tab")
   );
   tabFunc(
      document.querySelectorAll(".single-shop-link li"),
      document.querySelectorAll(".single-shop-tab")
   );

   function tabFunc(tabLinks, tabs) {
      tabLinks.forEach((link, index) => {
         link.addEventListener("click", () => {
            for (let i = 0; i < tabLinks.length; i++) {
               tabLinks[i].classList.remove("active");
               tabs[i].classList.remove("active");
            }
            link.classList.add("active");
            tabs[index].classList.add("active");
         });
      });
   }

   // One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .responsive-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


})(jQuery);
