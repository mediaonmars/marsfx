(function() {
  var $;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $ = jQuery;
  $.fn.marsSlideshow = $.fn.slideshow = function(opts) {
    var defaults;
    defaults = {
      wait: 2000,
      transition: 1000
    };
    opts = $.extend(defaults, opts);
    return this.each(function() {
      var container, current, fadedIn, images, setTransitionStyles, transition, transitioning, waitForLoad;
      current = 0;
      transitioning = 0;
      fadedIn = __bind(function() {
        current = transitioning;
        $(images[current]).attr("style", "display: block");
        return setTimeout(transition, opts.wait);
      }, this);
      setTransitionStyles = function(c, t) {
        var styles;
        styles = {
          top: c.offset().top,
          left: c.offset().left,
          width: c.width(),
          height: c.height(),
          position: 'absolute'
        };
        return t.css(styles);
      };
      transition = __bind(function() {
        var $current, $transitioning;
        transitioning = (current + 1) % images.length;
        $current = $(images[current]);
        $transitioning = $(images[transitioning]);
        setTransitionStyles($current, $transitioning);
        $current.fadeOut(opts.transition);
        return $transitioning.fadeIn(opts.transition, fadedIn);
      }, this);
      waitForLoad = __bind(function() {
        var loaded;
        loaded = false;
        images.each(function() {
          var el;
          el = $(this);
          if (Math.min(el.width(), el.height()) !== 0) {
            return loaded = true;
          }
        });
        if (loaded) {
          return setTimeout(transition, opts.wait);
        } else {
          return setTimeout(waitForLoad, 100);
        }
      }, this);
      container = $(this);
      images = container.find("img");
      return waitForLoad();
    });
  };
}).call(this);
