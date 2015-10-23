// Set targetWidth to forced page width you want Desktop Mode to be
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

// As the page loads, check to see if the user wants to be in Desktop Mode
// Since this script is placed before the header, we wait for DOM to laod before modifying classes
if (getCookie("viewport") == "desktop") {
    $(viewport).attr("content", "width=" + targetWidth);
    $(function () {
        $("#view-toggle").addClass("view-desktop").removeClass("view-regular").text("Regular Mode");
    });
}

// Once page finishes loading, we want the link to set the cookie and refresh content
// For toggle link, use: <a href="#" id="view-toggle" class="view-desktop">Desktop Mode</a>
$(function () {
    $("#view-toggle").click(function () {
        if ($("#view-toggle").hasClass("view-desktop")) {
            setCookie("viewport", "desktop");
            $(viewport).attr("content", "width=" + targetWidth);
            $("#view-toggle").toggleClass("view-desktop view-regular").text("Regular Mode");
        }
        else if ($("#view-toggle").hasClass("view-regular")) {
            setCookie("viewport", "");
            $(viewport).attr("content", "width=" + deviceWidth + ", initial-scale=1");
            $("#view-toggle").toggleClass("view-desktop view-regular").text("Desktop Mode");
        }
    });
});
