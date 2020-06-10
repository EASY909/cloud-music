import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591775277960'); /* IE9 */
  src: url('iconfont.eot?t=1591775277960#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591775277960') format('woff'),
  url('iconfont.ttf?t=1591775277960') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591775277960#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shunxubofang:before {
  content: "\e689";
}

.icon-xunhuanbofang:before {
  content: "\e625";
}

.icon-gengduo1:before {
  content: "\e501";
}

.icon-icon-next-1:before {
  content: "\e502";
}

.icon-shoucang:before {
  content: "\e6dc";
}

.icon-icon-next-11:before {
  content: "\e579";
}

.icon-bofang:before {
  content: "\e66e";
}

.icon-bofang1:before {
  content: "\e695";
}

.icon-erji:before {
  content: "\e685";
}

.icon-danquxunhuan:before {
  content: "\e614";
}

.icon-bofangliebiao:before {
  content: "\e691";
}

.icon-yinle2:before {
  content: "\e507";
}

.icon-caidan:before {
  content: "\e672";
}

.icon-zanting:before {
  content: "\e60e";
}

.icon-back:before {
  content: "\e503";
}

.icon-search:before {
  content: "\e6e1";
}

.icon-pinglun:before {
  content: "\e660";
}

.icon-suijibofang:before {
  content: "\e670";
}

.icon-xiala:before {
  content: "\e621";
}

.icon-shanchu:before {
  content: "\e637";
}

.icon-xinaixin:before {
  content: "\e649";
}

.icon-wangyiyunyinle:before {
  content: "\e504";
}
`