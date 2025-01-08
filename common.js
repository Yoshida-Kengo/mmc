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
    

function deleteCookies(cookieList) {
    const pathList = ['/', '/mmc.github.io/sub_home/stg_page','/mmc.github.io/sub_home/prod_page'];
    

    cookieList.forEach(function(name) {
        pathList.forEach(function(path){
            document.cookie = name + '=; max-age=0;path=' + path + ';';
        })
    });
}


function cashClear() {
    clearCookies();
    clearLocalStorage();
    deleteCookies(["mc_token", "mc_customerid"]);
    alert('キャッシュがクリアされました！');
}

function getCookie() {
    const formattedCookies = document.cookie.split('; ').join('\n');


    alert(formattedCookies);
}