!function($){"use strict";var s=$(window);$(document).ready(function(){function e(s){var e=s.item.count,n=s.item.index+1;$("#owl-counter").html(n+" / "+e)}$(".sidenav").sidenav(),$(".collapsible").collapsible(),$(".dropdown-trigger").dropdown({hover:s.width()>600,coverTrigger:!1,alignment:"center",constrainWidth:!1}),$(".tooltipped").tooltip({margin:0});var n=$(".owl-project");n.owlCarousel({loop:!0,margin:10,nav:!0,dots:!0,responsive:{0:{items:1}},autoHeight:!0,touchDrag:!0});var a=$(".screenshots-slider");a.length>0&&a.owlCarousel({loop:!0,responsiveClass:!0,nav:!0,animateOut:"slideOutLeft",animateIn:"zoomIn",dots:!1,autoplay:!1,smartSpeed:500,navSpeed:200,touchDrag:!0,center:!0,items:1}),$("#fullpage").fullpage({autoScrolling:!0,scrollHorizontally:!0,menu:"#menu",lockAnchors:!0,anchors:["Home","Portfolio","Skills","Contact"],navigation:!0,navigationPosition:"right",navigationTooltips:["Home","Portfolio","Skills","Contact"],showActiveTooltip:!0,slidesNavigation:!0,slidesNavPosition:"bottom",responsiveHeight:700,responsiveWidth:992}),$("#video-btn").on("click",function(){console.log("x")});var r=mixitup(".mixContainer",{animation:{duration:350,nudge:!0,reverseOut:!0,effects:"fade scale(0.01) stagger(30ms)"}}),t=function(s){for(var e=function(s){for(var e=s.childNodes,n=e.length,a=[],r,t,i,o,g=0;n>g;g++)r=e[g],1===r.nodeType&&(t=r.children[0],i=t.getAttribute("data-size").split("x"),o={src:t.getAttribute("href"),w:parseInt(i[0],10),h:parseInt(i[1],10)},r.children.length>1&&(o.title=r.children[1].innerHTML),t.children.length>0&&(o.msrc=t.children[0].getAttribute("src")),o.el=r,a.push(o));return a},n=function g(s,e){return s&&(e(s)?s:g(s.parentNode,e))},a=function(s){s=s||window.event,s.preventDefault?s.preventDefault():s.returnValue=!1;var e=s.target||s.srcElement,a=n(e,function(s){return s.tagName&&"FIGURE"===s.tagName.toUpperCase()});if(a){for(var t=a.parentNode,i=a.parentNode.childNodes,o=i.length,g=0,l,c=0;o>c;c++)if(1===i[c].nodeType){if(i[c]===a){l=g;break}g++}return l>=0&&r(l,t),!1}},r=function(s,n,a,r){var t=document.querySelectorAll(".pswp")[0],i,o,g;if(g=e(n),o={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(s){var e=g[s].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,a=e.getBoundingClientRect();return{x:a.left,y:a.top+n,w:a.width}}},r)if(o.galleryPIDs){for(var l=0;l<g.length;l++)if(g[l].pid==s){o.index=l;break}}else o.index=parseInt(s,10)-1;else o.index=parseInt(s,10);isNaN(o.index)||(a&&(o.showAnimationDuration=0),i=new PhotoSwipe(t,PhotoSwipeUI_Default,g,o),i.init())},t=document.querySelectorAll(s),i=0,o=t.length;o>i;i++)t[i].setAttribute("data-pswp-uid",i+1),t[i].onclick=a};$(".my-gallery").length&&t(".my-gallery");var i=function(s){for(var e={books01:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/04.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/05.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/01-Sure-Profile/06.png",w:2880,h:1800}],books02:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/04.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/05.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/06.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/07.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/08.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/09.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/10.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/02-CairoICT-Collective/11.png",w:2880,h:1800}],books03:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/04.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/05.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/06.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/03-ExportIT-Brochure/07.png",w:2880,h:1800}],books04:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/04.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/05.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/06.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/07.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/08.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/09.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/04-ITIDA-Profile/10.png",w:2880,h:1800}],books05:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/04.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/05.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/06.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/05-Gartner-Brochure/07.png",w:2880,h:1800}],books06:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/06-ITIDA-Notebooks/04.png",w:2880,h:1800}],books07:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/01-Books&Mags/07-NoDa-Novel/01.png",w:2880,h:1800}],folds01:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/02-Foldings/TanqeebBrochure/01.png",w:2880,h:1800}],cards01:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/04.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/05.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/06.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/07.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/01-ITIDA-Cards/08.png",w:2880,h:1800}],cards02:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/02-TanqeebCard/01.png",w:2880,h:1800}],cards03:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/03.png",w:2880,h:1800}],cards04:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/03-Cards&Flyers/04.png",w:2880,h:1800}],packing01:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/04-Packing/CoffeeBox/01.png",w:2880,h:1800}],packing02:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/04-Packing/EgyptOn-Bag/01.png",w:2880,h:1800}],hangs01:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ICI-Posters/04.png",w:2880,h:1800}],hangs02:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/03.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/05-Hangs/ITIDA-Certificates/04.png",w:2880,h:1800}],outdoor01:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/01-01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/01-02.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/01-03.png",w:2880,h:1800}],outdoor02:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/02.png",w:2880,h:1800}],outdoor03:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/03-01.png",w:2880,h:1800},{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/03-02.png",w:2880,h:1800}],outdoor04:[{src:"./assets/images/all/03-PrintingsIn&Outdoor/06-Outdoor/04.png",w:2880,h:1800}],websites01:[{src:"./assets/images/all/05-ScreenDesigns/01-Websites/01-EnerpizeWebsite/WebDesignsArtboard 2.jpg",w:2044,h:1155},{src:"./assets/images/all/05-ScreenDesigns/01-Websites/01-EnerpizeWebsite/WebDesignsArtboard 3.jpg",w:2044,h:1155},{src:"./assets/images/all/05-ScreenDesigns/01-Websites/01-EnerpizeWebsite/WebDesignsArtboard 4.jpg",w:2044,h:1155}],websites02:[{src:"./assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/01.jpg",w:2044,h:1155},{src:"./assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/02.jpg",w:2044,h:1155},{src:"./assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/03.jpg",w:2044,h:1155},{src:"./assets/images/all/05-ScreenDesigns/01-Websites/02-EnerpizeSoftware/04.jpg",w:2044,h:1155}],mail01:[{src:"./assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbEgyptOn-Newsletter.png",w:652,h:3731}],mail02:[{src:"./assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbGrowIT-ScrollPamphlit.png",w:607,h:3899}],mail03:[{src:"./assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbITAC-Eflyer-01.png",w:2880,h:1800},{src:"./assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbITAC-Eflyer-02.png",w:2880,h:1800}],mail04:[{src:"./assets/images/all/05-ScreenDesigns/03-Mail/Online-ads.psbItac-Newsletter.png",w:873,h:2053}],presentations01:[{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/01.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/02.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/03.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/04.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/05.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/06.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/07.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/08.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/09.png",w:2248,h:1594},{src:"./assets/images/all/06-Presentaion/01-Presentations/01-Marketing/10.png",w:2248,h:1594}],presentations02:[{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/01.png",w:2454,h:1524},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/02.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/03.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/04.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/05.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/06.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/07.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/08.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/09.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/10.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/11.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/12.png",w:2454,h:1542},{src:"./assets/images/all/06-Presentaion/01-Presentations/02-SW/13.png",w:2454,h:1542}],presentations03:[{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/01.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/02.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/03.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/04.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/05.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/06.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/07.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/08.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/09.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/10.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/11.png",w:1972,h:1478},{src:"./assets/images/all/06-Presentaion/01-Presentations/03-EME/12.png",w:1972,h:1478}],graphs01:[{src:"./assets/images/all/06-Presentaion/03-Graphs/01.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/02.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/03.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/04.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/05.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/06.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/07.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/08.png",w:2232,h:1580},{src:"./assets/images/all/06-Presentaion/03-Graphs/09.png",w:2232,h:1580}],videos01:[{src:"./assets/images/all/06-Presentaion/02-Videos/01.mov",w:2880,h:1800}],videos02:[{src:"./assets/images/all/06-Presentaion/02-Videos/02.mov",w:2880,h:1800}]},n,a=function(s){for(var e=s.childNodes,n=e.length,a=[],r,t,i,o,g=0;n>g;g++)r=e[g],1===r.nodeType&&(t=r.children[0],i=t.getAttribute("data-size").split("x"),o={src:t.getAttribute("href"),w:parseInt(i[0],10),h:parseInt(i[1],10)},r.children.length>1&&(o.title=r.children[1].innerHTML),t.children.length>0&&(o.msrc=t.children[0].getAttribute("src")),o.el=r,a.push(o));return a},r=function c(s,e){return s&&(e(s)?s:c(s.parentNode,e))},t=function(s){n=e[s.path[1].className.split(" ")[0]],s=s||window.event,s.preventDefault?s.preventDefault():s.returnValue=!1;var a=s.target||s.srcElement,t=r(a,function(s){return s.tagName&&"FIGURE"===s.tagName.toUpperCase()});if(t){for(var o=t.parentNode,g=t.parentNode.childNodes,l=g.length,c=0,p,h=0;l>h;h++)if(1===g[h].nodeType){if(g[h]===t){p=c;break}c++}return p>=0&&i(p,o),!1}},i=function(s,e,a,r){var t=document.querySelectorAll(".pswp")[0],i,o,g;if(g=n,o={galleryUID:e.getAttribute("data-pswp-uid")},r)if(o.galleryPIDs){for(var l=0;l<g.length;l++)if(g[l].pid==s){o.index=l;break}}else o.index=parseInt(s,10)-1;else o.index=parseInt(s,10);isNaN(o.index)||(a&&(o.showAnimationDuration=0),i=new PhotoSwipe(t,PhotoSwipeUI_Default,g,o),i.init())},o=document.querySelectorAll(s),g=0,l=o.length;l>g;g++)o[g].setAttribute("data-pswp-uid",g+1),o[g].onclick=t};$(".my-gallery-single").length&&i(".my-gallery-single")})}(jQuery);