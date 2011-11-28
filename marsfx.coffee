(($) ->

  log = () ->
    console.log(arguments) if console.log

  MarsFX =
    rollovers: ->
      overImageName = (image) ->
        url = image.src.split(".")
        url[url.length - 2] += "-over"
        url.join "."
      images = $("img.mars-rollover")
      images.each ->
        el = $(this)
        el.attr "data-orig-src", el.attr("src")
        el.attr "data-over-src", overImageName(this)
        $ "<img src='" + overImageName(this) + "'></img>"

      images.hover (->
        el = $(this)
        el.attr "src", el.attr("data-over-src")
      ), ->
        el = $(this)
        el.attr "src", el.attr("data-orig-src")

    inputClear: ->
      search = $("input.mars-input-clear")
      search.each ->
        clear = ->
          return  unless $(this).val() is @orig
          $(this).val ""
        set = ->
          return  unless not $(this).val()
          $(this).val @orig
        @orig = $(this).val()
        $(this).focus(clear).blur(set)

    password: ->
      passwords = $("input.mars-password")
      passwords.each ->
          @viewable = $ "<input type='text' value='#{$(this).attr('value')}'>"
          @orig = $(this)
          @viewable.attr "class", @orig.attr("class")
          @viewable.attr "id", @orig.attr("id")
          @orig.replaceWith(@viewable)
        
          @viewable.focus =>
            @viewable.replaceWith(@orig)
            @orig.val ""
            @orig.focus()
        
  $(document).ready ->
    for fn of MarsFX
      #log "calling #{fn}"
      MarsFX[fn]()
    false
)(jQuery)
