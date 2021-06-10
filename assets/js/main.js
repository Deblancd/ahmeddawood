(function ($) {
    "use strict";

    var $window = $(window);


    $(document).ready(function () {

      // Materialize CSS initialization
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();
      $('.dropdown-trigger').dropdown({
        hover: $window.width() > 600,
        coverTrigger: false,
        alignment: "center",
        constrainWidth: false
      });
      $('.tooltipped').tooltip({
        margin: 0
      });
      
      //Owl Carousel for projects
      var owlProjects = $('.owl-project');
      owlProjects.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
          0:{
            items:1
          }
        },
        autoHeight:true,
        touchDrag: true,
      });
  
      var $screenShotsSlider = $('.screenshots-slider')
      if ($screenShotsSlider.length > 0) {
        $screenShotsSlider.owlCarousel({
          loop: true ,
          responsiveClass: true,
          nav: true,
          animateOut: "slideOutLeft",
          animateIn: "zoomIn",
          dots: false,
          autoplay: false,
          smartSpeed: 500,
          navSpeed: 200,
          touchDrag: true,
          center: true,
          items: 1,
        })
      }
  
      function counter(event) {
        var items     = event.item.count;
        var item      = event.item.index + 1;
        $('#owl-counter').html(item+" / "+items)
      }
  
      $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        menu: '#menu',
        lockAnchors: true,
        anchors:['Home', 'Portfolio', 'Skills', 'Contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Portfolio', 'Skills', 'Contact'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        responsiveHeight: 700,
        responsiveWidth: 992
      });
      
      $('#video-btn').on('click', function() {console.log('x')});
  
      var mixer = mixitup('.mixContainer', {
        "animation": {
          "duration": 350,
          "nudge": true,
          "reverseOut": true,
          "effects": "fade scale(0.01) stagger(30ms)"
        }
      });
      
      var initPhotoSwipeFromDOM = function(gallerySelector) {
    
        // parse slide data (url, title, size ...) from DOM elements
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
          var thumbElements = el.childNodes,
              numNodes = thumbElements.length,
              items = [],
              figureEl,
              linkEl,
              size,
              item;
      
          for(var i = 0; i < numNodes; i++) {
        
            figureEl = thumbElements[i]; // <figure> element
        
            // include only element nodes
            if(figureEl.nodeType !== 1) {
              continue;
            }
        
            linkEl = figureEl.children[0]; // <a> element
        
            size = linkEl.getAttribute('data-size').split('x');
        
            // create slide object
            item = {
              src: linkEl.getAttribute('href'),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
            };
        
        
        
            if(figureEl.children.length > 1) {
              // <figcaption> content
              item.title = figureEl.children[1].innerHTML;
            }
        
            if(linkEl.children.length > 0) {
              // <img> thumbnail element, retrieving thumbnail url
              item.msrc = linkEl.children[0].getAttribute('src');
            }
        
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
          }
      
          return items;
        };
    
        // find nearest parent element
        var closest = function closest(el, fn) {
          return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };
    
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
          e = e || window.event;
          e.preventDefault ? e.preventDefault() : e.returnValue = false;
      
          var eTarget = e.target || e.srcElement;
      
          // find root element of slide
          var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
          });
      
          if(!clickedListItem) {
            return;
          }
      
          // find index of clicked item by looping through all child nodes
          // alternatively, you may define index via data- attribute
          var clickedGallery = clickedListItem.parentNode,
              childNodes = clickedListItem.parentNode.childNodes,
              numChildNodes = childNodes.length,
              nodeIndex = 0,
              index;
      
          for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
              continue;
            }
        
            if(childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
            }
            nodeIndex++;
          }
      
      
      
          if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
          }
          return false;
        };
    
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
              gallery,
              options,
              items;
      
          items = parseThumbnailElements(galleryElement);
      
          // define options (if needed)
          options = {
        
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        
            getThumbBoundsFn: function(index) {
              // See Options -> getThumbBoundsFn section of documentation for more info
              var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                  pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect();
          
              return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }
        
          };
      
          // PhotoSwipe opened from URL
          if(fromURL) {
            if(options.galleryPIDs) {
              // parse real index when custom PIDs are used
              // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
              for(var j = 0; j < items.length; j++) {
                if(items[j].pid == index) {
                  options.index = j;
                  break;
                }
              }
            } else {
              // in URL indexes start from 1
              options.index = parseInt(index, 10) - 1;
            }
          } else {
            options.index = parseInt(index, 10);
          }
      
          // exit if index not found
          if( isNaN(options.index) ) {
            return;
          }
      
          if(disableAnimation) {
            options.showAnimationDuration = 0;
          }
          gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
        };
        var galleryElements = document.querySelectorAll( gallerySelector );
    
        for(var i = 0, l = galleryElements.length; i < l; i++) {
          galleryElements[i].setAttribute('data-pswp-uid', i+1);
          galleryElements[i].onclick = onThumbnailsClick;
        }
        
      };
      if($('.my-gallery').length) {
        initPhotoSwipeFromDOM('.my-gallery');
      }
  
      
      
      
      
      
      
      
      
      
      
      
  
      var initPhotoSwipeFromDOM2 = function(gallerySelector) {
        
        var allItems = {
          books01: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/04.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/05.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/06.png',
              w: 2880,
              h: 1800
            }
          ],
          books02: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/04.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/05.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/06.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/07.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/08.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/09.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/10.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/11.png',
              w: 2880,
              h: 1800
            },
          ],
          books03: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/04.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/05.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/06.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/07.png',
              w: 2880,
              h: 1800
            },
          ],
          books04: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/04.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/05.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/06.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/07.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/08.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/09.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/10.png',
              w: 2880,
              h: 1800
            },
          ],
          books05: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/04.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/05.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/06.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/07.png',
              w: 2880,
              h: 1800
            },
          ],
          books06: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/04.png',
              w: 2880,
              h: 1800
            },
          ],
          books07: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/07-NoDa-Novel/01.png',
              w: 2880,
              h: 1800
            },
          ],
          folds01: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/02-Foldings/TanqeebBrochure/01.png',
              w: 2880,
              h: 1800
            },
          ],
          cards01: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/04.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/05.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/06.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/07.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/08.png',
              w: 2880,
              h: 1800
            },
          ],
          cards02: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/02-TanqeebCard/01.png',
              w: 2880,
              h: 1800
            },
          ],
          cards03: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/03.png',
              w: 2880,
              h: 1800
            },
          ],
          cards04: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/04.png',
              w: 2880,
              h: 1800
            },
          ],
          packing01: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/04-Packing/CoffeeBox/01.png',
              w: 2880,
              h: 1800
            },
          ],
          packing02: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/04-Packing/EgyptOn-Bag/01.png',
              w: 2880,
              h: 1800
            },
          ],
          hangs01: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/04.png',
              w: 2880,
              h: 1800
            },
          ],
          hangs02: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/03.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/04.png',
              w: 2880,
              h: 1800
            },
          ],
          outdoor01: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/01-01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/01-02.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/01-03.png',
              w: 2880,
              h: 1800
            },
          ],
          outdoor02: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/02.png',
              w: 2880,
              h: 1800
            },
          ],
          outdoor03: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/03-01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/03-02.png',
              w: 2880,
              h: 1800
            },
          ],
          outdoor04: [
            {
              src: './assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/04.png',
              w: 2880,
              h: 1800
            },
          ],
          websites01: [
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/01-EnerpizeWebsite/WebDesignsArtboard 2.jpg',
              w: 2044,
              h: 1155
            },
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/01-EnerpizeWebsite/WebDesignsArtboard 3.jpg',
              w: 2044,
              h: 1155
            },
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/01-EnerpizeWebsite/WebDesignsArtboard 4.jpg',
              w: 2044,
              h: 1155
            },
          ],
          websites02: [
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/01.jpg',
              w: 2044,
              h: 1155
            },
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/02.jpg',
              w: 2044,
              h: 1155
            },
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/03.jpg',
              w: 2044,
              h: 1155
            },
            {
              src: './assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/04.jpg',
              w: 2044,
              h: 1155
            },
          ],
          mail01: [
            {
              src: './assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbEgyptOn-Newsletter.png',
              w: 652,
              h: 3731
            },
          ],
          mail02: [
            {
              src: './assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbGrowIT-ScrollPamphlit.png',
              w: 607,
              h: 3899
            },
          ],
          mail03: [
            {
              src: './assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbITAC-Eflyer-01.png',
              w: 2880,
              h: 1800
            },
            {
              src: './assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbITAC-Eflyer-02.png',
              w: 2880,
              h: 1800
            },
          ],
          mail04: [
            {
              src: './assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbItac-Newsletter.png',
              w: 873,
              h: 2053
            },
          ],
          presentations01: [
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/01.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/02.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/03.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/04.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/05.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/06.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/07.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/08.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/09.png',
              w: 2248,
              h: 1594
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/01-Marketing/10.png',
              w: 2248,
              h: 1594
            },
          ],
          presentations02: [
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/01.png',
              w: 2454,
              h: 1524
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/02.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/03.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/04.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/05.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/06.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/07.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/08.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/09.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/10.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/11.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/12.png',
              w: 2454,
              h: 1542
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/02-SW/13.png',
              w: 2454,
              h: 1542
            },
          ],
          presentations03: [
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/01.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/02.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/03.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/04.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/05.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/06.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/07.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/08.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/09.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/10.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/11.png',
              w: 1972,
              h: 1478
            },
            {
              src: './assets/images/all/06-Presentaion/01-Presentations/03-EME/12.png',
              w: 1972,
              h: 1478
            },
          ],
          graphs01: [
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/01.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/02.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/03.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/04.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/05.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/06.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/07.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/08.png',
              w: 2232,
              h: 1580
            },
            {
              src: './assets/images/all/06-Presentaion/03-Graphs/09.png',
              w: 2232,
              h: 1580
            },
          ],
          videos01: [
            {
              src: './assets/images/all/06-Presentaion/02-Videos/01.mov',
              w: 2880,
              h: 1800
            },
          ],
          videos02: [
            {
              src: './assets/images/all/06-Presentaion/02-Videos/02.mov',
              w: 2880,
              h: 1800
            },
          ],
        };
        
        var requestedItem;
    
        // parse slide data (url, title, size ...) from DOM elements
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
          var thumbElements = el.childNodes,
              numNodes = thumbElements.length,
              items = [],
              figureEl,
              linkEl,
              size,
              item;
      
          for(var i = 0; i < numNodes; i++) {
        
            figureEl = thumbElements[i]; // <figure> element
        
            // include only element nodes
            if(figureEl.nodeType !== 1) {
              continue;
            }
        
            linkEl = figureEl.children[0]; // <a> element
        
            size = linkEl.getAttribute('data-size').split('x');
        
            // create slide object
            item = {
              src: linkEl.getAttribute('href'),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
            };
        
        
        
            if(figureEl.children.length > 1) {
              // <figcaption> content
              item.title = figureEl.children[1].innerHTML;
            }
        
            if(linkEl.children.length > 0) {
              // <img> thumbnail element, retrieving thumbnail url
              item.msrc = linkEl.children[0].getAttribute('src');
            }
        
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
          }
      
          return items;
        };
    
        // find nearest parent element
        var closest = function closest(el, fn) {
          return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };
    
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
          if(e.path) {
            requestedItem = allItems[e.path[1].className.split(" ")[0]];
          } else if (e.currentTarget) {
            requestedItem = allItems[e.currentTarget.classList[0]];
          }
          e = e || window.event;
          e.preventDefault ? e.preventDefault() : e.returnValue = false;
      
          var eTarget = e.target || e.srcElement;
      
          // find root element of slide
          var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
          });
      
          if(!clickedListItem) {
            return;
          }
      
          // find index of clicked item by looping through all child nodes
          // alternatively, you may define index via data- attribute
          var clickedGallery = clickedListItem.parentNode,
              childNodes = clickedListItem.parentNode.childNodes,
              numChildNodes = childNodes.length,
              nodeIndex = 0,
              index;
      
          for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
              continue;
            }
        
            if(childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
            }
            nodeIndex++;
          }
      
      
      
          if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
          }
          return false;
        };
        
    
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
              gallery,
              options,
              items;
  
          items = requestedItem;
      
          // define options (if needed)
          options = {
        
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        
          };
      
          // PhotoSwipe opened from URL
          if(fromURL) {
            if(options.galleryPIDs) {
              // parse real index when custom PIDs are used
              // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
              for(var j = 0; j < items.length; j++) {
                if(items[j].pid == index) {
                  options.index = j;
                  break;
                }
              }
            } else {
              // in URL indexes start from 1
              options.index = parseInt(index, 10) - 1;
            }
          } else {
            options.index = parseInt(index, 10);
          }
      
          // exit if index not found
          if( isNaN(options.index) ) {
            return;
          }
      
          if(disableAnimation) {
            options.showAnimationDuration = 0;
          }
          gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
        };
        var galleryElements = document.querySelectorAll( gallerySelector );
    
        for(var i = 0, l = galleryElements.length; i < l; i++) {
          galleryElements[i].setAttribute('data-pswp-uid', i+1);
          galleryElements[i].onclick = onThumbnailsClick;
        }
        
      };
      if($('.my-gallery-single').length) {
        initPhotoSwipeFromDOM2('.my-gallery-single');
      }
  
    });

})(jQuery);
