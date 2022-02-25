function setCookie (c_name, value, exdays) {
  var exdate = new Date ();
  exdate.setDate (exdate.getDate () + exdays);
  var c_value =
    escape (value) +
    (exdays == null ? '' : '; expires=' + exdate.toUTCString ()+'; path=/');
  document.cookie = c_name + '=' + c_value;
}

//To get the cookie:-
function getCookie (c_name) {
  var i, x, y, ARRcookies = document.cookie.split (';');
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr (0, ARRcookies[i].indexOf ('='));
    y = ARRcookies[i].substr (ARRcookies[i].indexOf ('=') + 1);
    x = x.replace (/^\s+|\s+$/g, '');
    if (x == c_name) {
      return unescape (y);
    }
  }
}
//to Delete the cookie:-
function cookieDelete (c_name) {
  setCookie (c_name, 'delete', -1);
}

var aZ = getCookie ('checkOnce');
if (aZ) {
  //do Some thing here
  setCookie ('checkOnce', 'second', null);
} else {
  setCookie ('checkOnce', 'first', null);
}

