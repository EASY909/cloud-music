
import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`

@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591178022281'); /* IE9 */
  src: url('iconfont.eot?t=1591178022281#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591178022281') format('woff'),
  url('iconfont.ttf?t=1591178022281') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591178022281#iconfont') format('svg'); /* iOS 4.1- */
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
  content: "\e695";
}

.icon-erji:before {
  content: "\e685";
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

.icon-xinaixin:before {
  content: "\e649";
}

.icon-wangyiyunyinle:before {
  content: "\e504";
}
`