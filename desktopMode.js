var targetWidth = 992;
var deviceWidth = 'device-width';
var viewport = $('meta[name="viewport"]');

// Create and set a cookie for 5 years
var setCookie = function (cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (1825 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Get the cookie
var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

// Upon clicking your #view-full link, you'll want to update the page content without refreshing
var showFullSite = function () {
    $(viewport).attr("content", "width=" + targetWidth);
    $(function () {
        $("#view-full").addClass('hidden');
        $("#view-regular").removeClass('hidden');
    });
}

// Upon clicking your #view-regular link, you'll want to update the page content without refreshing
var showRegularSite = function () {
    $(viewport).attr("content", "width=" + deviceWidth + ", initial-scale=1");
    $(function () {
        $("#view-regular").addClass('hidden');
        $("#view-full").removeClass('hidden');
    });
}

// As the page loads, check to see if the user already wants to be in full mode
// Since we want to put this script before the header, we'll want to wait until the rest of the DOM loads before modifying classes
if (getCookie("viewport") == "full") {
    showFullSite();
}

// Once page finishes loading, we want the links we create to set the cookie and refresh content
$(function () {
    // Set cookie viewport=full
    $("#view-full").click(function () {
        setCookie("viewport", "full");
        showFullSite();
    });

    // Set cookie viewport=regular
    $("#view-regular").click(function () {
        setCookie("viewport", "");
        showRegularSite();
    });
});
