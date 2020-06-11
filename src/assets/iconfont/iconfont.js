import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591864912081'); /* IE9 */
  src: url('iconfont.eot?t=1591864912081#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591864912081') format('woff'),
  url('iconfont.ttf?t=1591864912081') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591864912081#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-delete:before {
  content: "\e504";
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
  content: "\e505";
}
`
