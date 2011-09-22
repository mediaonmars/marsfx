______  ___                    _____________  __
___   |/  /_____ _________________  ____/_  |/ /
__  /|_/ /_  __ `/_  ___/_  ___/_  /_   __    / 
_  /  / / / /_/ /_  /   _(__  )_  __/   _    |  
/_/  /_/  \__,_/ /_/    /____/ /_/      /_/|_|


Simple little jQuery script to add behaviours to a website declaritively(?).

## Usage:

Include the Script..

### Image Rollovers

Decorate your image tags with .mars-rollover and you will get rollovers when the image is rollover'ed

    <img src='/images/blah.png' class='mars-rollover' />
    -> 
    <img src='/images/blah-over.png' class='mars-rollover' />

### Default text clearerer

Decorate an input with .mars-search-clear and it will clear the search field when focused, and unclear (if there is no text) on unfocus

    <input name='search' class='mars-search-clear' value='Search...' />

Wazzam!

Enjoy.