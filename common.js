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

function cashClear() {
    clearCookies();
    clearLocalStorage();
    alert('キャッシュがクリアされました！');
}

function clearLocalStorage() {
localStorage.clear();
}
