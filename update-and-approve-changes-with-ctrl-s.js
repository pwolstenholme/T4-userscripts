// ==UserScript==
// @name       Update and Approve T4 content by pressing Ctrl-S
// @namespace  http://wolstenhol.me
// @version    0.1
// @description  Quickly publish T4 content
// @match      https://sitemanager.manchester.ac.uk/terminalfour/SiteManager?ctfn=content&fnno=*&sid=*&svi=*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

jQuery(document).keydown(function(event) {

    //19 for Mac Command+S
    if (!( String.fromCharCode(event.which).toLowerCase() == 's' && event.ctrlKey) && !(event.which == 19)) return true;
    jQuery( ".tab-button-dd-submenu li a" ).first().click();
    event.preventDefault();
    return false;
});