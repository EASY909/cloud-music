

import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1593912068172'); /* IE9 */
  src: url('iconfont.eot?t=1593912068172#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1593912068172') format('woff'),
  url('iconfont.ttf?t=1593912068172') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1593912068172#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gengduo1:before {
  content: "\e501";
}

.icon-zanting:before {
  content: "\e630";
}

.icon-shoucang:before {
  content: "\e6dc";
}

.icon-bofang:before {
  content: "\e66e";
}

.icon-bofang1:before {
  content: "\e695";
}

.icon-shunxubofang:before {
  content: "\e509";
}

.icon-erji:before {
  content: "\e685";
}

.icon-pinglunpt:before {
  content: "\e65c";
}

.icon-fanhuipt:before {
  content: "\e65e";
}

.icon-sousuo:before {
  content: "\e65f";
}

.icon-shangyiqu:before {
  content: "\e663";
}

.icon-caidan:before {
  content: "\e664";
}

.icon-bofang2:before {
  content: "\e665";
}

.icon-zanting1:before {
  content: "\e666";
}

.icon-xihuan:before {
  content: "\e668";
}

.icon-yinle2:before {
  content: "\e507";
}

.icon-caidan1:before {
  content: "\e672";
}

.icon-xihuan-kongpt-wangyiicon:before {
  content: "\e615";
}

.icon-xiayiqu-wangyiicon:before {
  content: "\e617";
}

.icon-suijibofang-wangyiicon:before {
  content: "\e619";
}

.icon-back:before {
  content: "\e502";
}

.icon-delete:before {
  content: "\e503";
}

.icon-react:before {
  content: "\e59c";
}

.icon-xiala:before {
  content: "\e621";
}

.icon-shanchu:before {
  content: "\e637";
}

.icon-loop:before {
  content: "\e506";
}

.icon-vue:before {
  content: "\e609";
}
`
