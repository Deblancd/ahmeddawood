'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * demo4.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{

    // From https://davidwalsh.name/javascript-debounce-function.
    var debounce = function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // equation of a line
    var lineEq = function lineEq(y2, y1, x2, x1, currentVal) {
        // y = mx + b
        var m = (y2 - y1) / (x2 - x1);
        var b = y1 - m * x1;

        return m * currentVal + b;
    };

    // from http://www.quirksmode.org/js/events_properties.html#position
    var getMousePos = function getMousePos(e) {
        var posx = 0;
        var posy = 0;
        if (!e) {
            var _e = window.event;
        }
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return {
            x: posx,
            y: posy
        };
    };

    var MorphingBG = function () {
        function MorphingBG(el) {
            _classCallCheck(this, MorphingBG);

            this.DOM = {};
            this.DOM.el = el;
            this.DOM.el.style.opacity = 0;
            this.DOM.el.style.transition = 'transform 2s ease-out';
            this.DOM.pathEl = this.DOM.el.querySelector('path');
            this.paths = this.DOM.pathEl.getAttribute('pathdata:id').split(';');
            this.paths.splice(this.paths.length, 0, this.DOM.pathEl.getAttribute('d'));
            this.win = { width: window.innerWidth, height: window.innerHeight };
            this.animate();
            this.initEvents();
        }

        _createClass(MorphingBG, [{
            key: 'animate',
            value: function animate() {
                anime.remove(this.DOM.pathEl);
                anime({
                    targets: this.DOM.pathEl,
                    duration: 10000,
                    easing: [0.5, 0, 0.5, 1],
                    d: this.paths,
                    loop: true
                });
            }
        }, {
            key: 'initEvents',
            value: function initEvents() {
                var _this = this;

                // Mousemove event / Tilt functionality.
                var tilt = {
                    tx: this.win.width / 8,
                    ty: this.win.height / 4,
                    rz: 45,
                    sx: [0.5, 1.3],
                    sy: [0.5, 1.3]
                };
                var onMouseMoveFn = function onMouseMoveFn(ev) {
                    requestAnimationFrame(function () {
                        if (!_this.started) {
                            _this.started = true;
                            anime({
                                targets: _this.DOM.el,
                                duration: 300,
                                easing: 'linear',
                                opacity: [0, 1]
                            });
                        } else {
                            var mousepos = getMousePos(ev);
                            var rotZ = 2 * tilt.rz / _this.win.height * mousepos.y - tilt.rz;
                            var scaleX = mousepos.x < _this.win.width / 2 ? lineEq(tilt.sx[0], tilt.sx[1], _this.win.width / 2, 0, mousepos.x) : lineEq(tilt.sx[1], tilt.sx[0], _this.win.width, _this.win.width / 2, mousepos.x);
                            var scaleY = mousepos.y < _this.win.height / 2 ? lineEq(tilt.sy[0], tilt.sy[1], _this.win.height / 2, 0, mousepos.y) : lineEq(tilt.sy[1], tilt.sy[0], _this.win.height, _this.win.height / 2, mousepos.y);
                            var transX = 2 * tilt.tx / _this.win.width * mousepos.x - tilt.tx;
                            var transY = 2 * tilt.ty / _this.win.height * mousepos.y - tilt.ty;

                            _this.DOM.el.style.transform = 'translate3d(' + transX + 'px, ' + transY + 'px,0) rotate3d(0,0,1,' + rotZ + 'deg) scale3d(' + scaleX + ',' + scaleY + ',1)';
                        }
                    });
                };

                // Window resize.
                var onResizeFn = debounce(function () {
                    return _this.win = { width: window.innerWidth, height: window.innerHeight };
                }, 20);

                document.addEventListener('mousemove', onMouseMoveFn);
                document.addEventListener('touchstart', onMouseMoveFn);
                window.addEventListener('resize', function (ev) {
                    return onResizeFn();
                });
            }
        }]);

        return MorphingBG;
    }();

    new MorphingBG(document.querySelector('svg.scene'));
}