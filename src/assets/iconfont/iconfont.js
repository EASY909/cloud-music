
import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591001741504'); /* IE9 */
  src: url('iconfont.eot?t=1591001741504#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591001741504') format('woff'),
  url('iconfont.ttf?t=1591001741504') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591001741504#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-shoucang:before {
  content: "\e6dc";
}

.icon-bofang:before {
  content: "\e695";
}

.icon-erji:before {
  content: "\e685";
}

.icon-yinle2:before {
  content: "\e507";
}

.icon-caidan:before {
  content: "\e672";
}

.icon-back:before {
  content: "\e502";
}

.icon-search:before {
  content: "\e6e1";
}

.icon-pinglun:before {
  content: "\e660";
}

.icon-xinaixin:before {
  content: "\e649";
}

.icon-wangyiyunyinle:before {
  content: "\e503";
}
`