/**
 * set a cookie
 * @param {string} name cookie name
 * @param {string} value cookie value
 * @param {number} days days to expire
 */
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

/**
 * get a cookie
 * @param {string} name cookie name
 */
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * erase a cookie
 * @param {string} name cookie name
 */
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

export const cookieService = { setCookie, getCookie, eraseCookie };
