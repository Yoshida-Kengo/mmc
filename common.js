function clearCookies() {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const d = window.location.hostname.split(".");
      while (d.length > 0) {
        const cookieBase = encodeURIComponent(c.split(";")[0].split("=")[0]) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=';
        const domain = d.join('.');
        document.cookie = cookieBase + domain;
        d.shift();
      }
    }
}

function clearLocalStorage() {
    localStorage.clear();
}
    

function deleteCookies(deleteList) {
    deleteList.forEach(function(name) {
        document.cookie = 'name= ' + name + '; max-age=0;';
    });
}


function cashClear() {
    clearCookies();
    clearLocalStorage();
    deleteCookies(["mc_token", "mc_customerid"]);
    // deleteCookieEverywhere('myCookie');
    alert('キャッシュがクリアされました！');
}

function addCookie() {
    var expire = new Date();
    expire.setTime( expire.getTime() + 1000 * 60 );

    document.cookie = 'data=123;expires=' + expire.toUTCString();
}

function getCookie() {
    alert(document.cookie);
}