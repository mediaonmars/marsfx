$ = jQuery

$.fn.marsSlideshow = $.fn.slideshow = (opts) ->

  defaults =
    wait: 2000
    transition: 1000

  opts = $.extend defaults, opts

  return @.each ->
    current = 0
    transitioning = 0
    fadedIn = =>
      current = transitioning
      $(images[current]).attr("style", "display: block")
      setTimeout transition, opts.wait
    setTransitionStyles = (c, t)->
      styles =
        top: c.offset().top
        left: c.offset().left
        width: c.width()
        height: c.height()
        position: 'absolute'
      t.css styles
    transition = =>
      transitioning = (current + 1) % images.length
      $current = $(images[current])
      $transitioning = $(images[transitioning])
      setTransitionStyles $current, $transitioning
      $current.fadeOut(opts.transition)
      $transitioning.fadeIn(opts.transition, fadedIn)

    waitForLoad = =>
      loaded = false
      images.each ->
        el = $(@)
        unless Math.min(el.width(), el.height()) is 0
          loaded = true
      if loaded
        setTimeout transition, opts.wait
      else
        setTimeout waitForLoad, 100

    container = $(@)
    images = container.find "img"


    waitForLoad()