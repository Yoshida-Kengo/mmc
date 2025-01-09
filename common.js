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
    if(formattedCookies == null || formattedCookies == '') {
        alert("クッキーは存在しません。");
    } else {
        alert(formattedCookies);
    }
}

function getCookieValue(name) {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function setCardButtonOnClickListener(event) {
    document.querySelectorAll(event).forEach(button => {
        button.addEventListener('click', eventIgnition);
        // イベント発火
        function eventIgnition() {
            const newUrl = window.location.origin + window.location.pathname + "?" + button.value;
            history.pushState(null, null, newUrl);
            // window.location.href = newUrl;
            mc_tracker('EVENT' , button.value,{});
            // alert('カスタマーID「' + getCookieValue('mc_customerid') + '」がイベント「' + button.value + '」を送信しました');
            alert('カスタマーID「' + getCookieValue('mc_customerid') + '」\nmc_token「' + getCookieValue('mc_token') + '」\nがイベント「' + button.value + '」を送信しました');
    }
    });
}

function setSubmitButtonOnClickListener(event) {
    document.querySelectorAll(event).forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // フォームの送信を防ぐ
            var inputId = this.getAttribute("data-input");
            var attributeKey = this.getAttribute("data-attribute");
            var inputValue = document.getElementById(inputId).value; // 入力値を取得
            document.getElementById("output").textContent = inputValue; // 取得した値を表示
            mc_tracker('SET_ATTRIBUTES', {
                [attributeKey] : inputValue
            });
            alert('カスタマーID「' + getCookieValue('mc_customerid') + '」\nmc_token「' + getCookieValue('mc_token') + '」\nのカスタマー属性「' + attributeKey + '」に「' + inputValue + '」を設定しました');
        });
    });
}

