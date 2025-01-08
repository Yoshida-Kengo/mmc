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
    

function deleteCookieEverywhere(name) {
    var paths = [
        '/',          // ルートパス
        '/path1',     // 推定される他のパス1
        '/path2',     // 推定される他のパス2
        // 必要に応じて他の可能性のあるパスを追加
    ];
    
    var domains = [
        window.location.hostname, // 現在のホスト名
        // 必要に応じて他の関連するドメインを追加
    ];

    paths.forEach(function(path) {
        domains.forEach(function(domain) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=' + path + '; domain=' + domain + ';';
        });
        // ドメイン未指定（現在のサブドメインを含むすべてのサブドメインを試す）
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=' + path + ';';
    });
}


function cashClear() {
    clearCookies();
    clearLocalStorage();
    deleteCookieEverywhere('myCookie');
    alert('キャッシュがクリアされました！');
}