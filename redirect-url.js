// ==UserScript==
// @name         Redirect URL
// @namespace    https://1991421.cn
// @version      0.1
// @description  解决恼人的网页拦截，比如微信打开链接
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
      window.location.href=htmlDecode(cgiData.url);
    }
})();
