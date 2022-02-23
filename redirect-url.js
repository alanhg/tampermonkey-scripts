// ==UserScript==
// @name         Redirect URL
// @namespace    https://1991421.cn
// @version      0.1
// @description  解决部分站点访问的二次拦截，自动跳转到目标页，比如微信中链接的拦截
// @author       You
// @match        https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.match(/^https:\/\/weixin110.qq.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi/)){
        document.getElementsByClassName('weui-btn weui-btn_default')[0].click();
    }
})();
