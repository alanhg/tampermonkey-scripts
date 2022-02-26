// ==UserScript==
// @name         Redirect URL
// @namespace    https://1991421.cn
// @version      0.1
// @description  è§£å³é¨åç«ç¹è®¿é®çäºæ¬¡æ¦æªï¼èªå¨è·³è½¬å°ç®æ é¡µï¼æ¯å¦å¾®ä¿¡ä¸­é¾æ¥çæ¦æª
// @author       Alan He
// @match        https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
     function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.documentElement.textContent;
      }

    if(window.location.href.match(/^https:\/\/weixin110.qq.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi/)){
      // document.getElementsByClassName('weui-btn weui-btn_default')[0].click();
      window.location.href=htmlDecode(cgiData.url);
    }
})();
