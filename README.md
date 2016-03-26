# MenuOverflowHandler
jQuery plugin for handling extra menu items by moving those items to sub-menu

How to use:

After bind your fav. menu plugin (such as Superfish) on your menu items (usually ul/li), call OverflowHandler on the 'ul',

Ex.

$('ul').overflowHandler();


Available options:
availableCount: Number, // default 6
overflowText: String,   // default 'سایر'
overflowHref: String    // default '#'


Changelog:
2.0
1. changed the name of main method to overflowHandler.
2. Bootstrap support added.
3. return this added for having jQuery's chain when you using the plugin.
 
Last updated: 3/26/2016


Feel free to report any bug or asking new features !
