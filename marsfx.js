(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  (function() {
    var MarsFX, log;
    log = function() {
      if (console.log) {
        return console.log(arguments);
      }
    };
    MarsFX = {
      rollovers: function() {
        var images, overImageName;
        overImageName = function(image) {
          var url;
          url = image.src.split(".");
          url[url.length - 2] += "-over";
          return url.join(".");
        };
        images = $("img.mars-rollover");
        images.each(function() {
          var el;
          el = $(this);
          el.attr("data-orig-src", el.attr("src"));
          el.attr("data-over-src", overImageName(this));
          return $("<img src='" + overImageName(this) + "'></img>");
        });
        return images.hover((function() {
          var el;
          el = $(this);
          return el.attr("src", el.attr("data-over-src"));
        }), function() {
          var el;
          el = $(this);
          return el.attr("src", el.attr("data-orig-src"));
        });
      },
      inputClear: function() {
        var search;
        search = $("input.mars-input-clear");
        return search.each(function() {
          var clear, set;
          clear = function() {
            if ($(this).val() !== this.orig) {
              return;
            }
            return $(this).val("");
          };
          set = function() {
            if (!!$(this).val()) {
              return;
            }
            return $(this).val(this.orig);
          };
          this.orig = $(this).val();
          return $(this).focus(clear).blur(set);
        });
      },
      password: function() {
        var passwords;
        passwords = $("input.mars-password");
        return passwords.each(function() {
          this.viewable = $("<input type='text' value='" + ($(this).attr('value')) + "'>");
          this.orig = $(this);
          this.viewable.attr("class", this.orig.attr("class"));
          this.viewable.attr("id", this.orig.attr("id"));
          this.orig.replaceWith(this.viewable);
          return this.viewable.focus(__bind(function() {
            this.viewable.replaceWith(this.orig);
            this.orig.val("");
            return this.orig.focus();
          }, this));
        });
      }
    };
    return $(document).ready(function() {
      var fn;
      for (fn in MarsFX) {
        MarsFX[fn]();
      }
      return false;
    });
  })(jQuery);
}).call(this);
