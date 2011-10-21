    ______  ___                    _____________  __
    ___   |/  /_____ _________________  ____/_  |/ /
    __  /|_/ /_  __ `/_  ___/_  ___/_  /_   __    / 
    _  /  / / / /_/ /_  /   _(__  )_  __/   _    |  
    /_/  /_/  \__,_/ /_/    /____/ /_/      /_/|_|


Simple little jQuery script to add behaviours to a website declaratively via classes. Zoom Zoom!

## Usage:

Include the Script...

### Image Rollovers

Decorate your image tags with .mars-rollover and you will get rollovers when the image is rollover'ed

    <img src='/images/blah.png' class='mars-rollover' />
    -> 
    <img src='/images/blah-over.png' class='mars-rollover' />

### Default text clearerer

Decorate an input with .mars-input-clear and it will clear the input field when focused, and unclear (if there is no text changes) on unfocus

    <input name='search' class='mars-input-clear' value='Search...' />

###Password Clearer

Create a password field, decorate with .mars-password, put the value in of whatever you want the user to see (i.e. Password!), this function will replace the origional password field with a text field, with your value in it. When the user focuses, it get's switched back to the origional password input

    <input name='search' class='mars-password' value='Password' />

Wazzam!

Enjoy.
