
import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1590654752961'); /* IE9 */
  src: url('iconfont.eot?t=1590654752961#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWIAAsAAAAACtgAAAU6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqIdIdCATYCJAMUCwwABCAFhG0HURtPCVGULk6B7Mdh7IYeYqVDbKRLlwbDj+B/tL1xiqBae79n4YLgEgWowo7LR0VFAgv/kaRj+YVCNuJtrVkZhMn4sqwiVOi3e9kDzqY0vk5XqRfyX7gfwFOTds5AIe3AYpIupssF/HGvasbSgM1n3+Iyx9YxLZYLBThAY6zWFlW0JSpyUbqIZ5NdKDg4B3CbQKdxHcld68M5UVBwSUDBZZwpEoWMVmkgh3ZFU7GziGeq9nQ/vcVT9/Px32K0k9SMr9w7XhqJyc/07Cu2tFXqwKDw1mdGbx8ZCxIKcV5pPZQO4gUn7axKz1iX0C7MiXXFbz97+P9/wDzgH4u0PcomJHl9f7wGl3YDfjNW+IlRCMGvKoTErwcImV8P+XeKtOKOTvQRt4iPBroJfFVSNdIJ89kV6eiYmPgZivV9eRkLVrWW9QhcBDInWXKIW5o4woAfaiNzeS1T5C6a7avNe/apziGOa4glcsLewPvEZxA12UUNSDyjUoR28hjnGqI4hSAUoXmKHQU67XC+5mtVOgV6UeGOA/kJ6RFpL75uZO+C5NLJpQP+HuEeVGUW1RHvGBToVJj0HRMk87WPcxGGeUZ3BYjc3ksFYNn6VXgEVwLAG0QU6KdYQbWTILYMZaRayi8CMKXjEHQalQAHTlJXrgmDvdd1krquaILLV4WS8W0AcI1QSwLBMmJYyh3BVEvomtsYGPUYTgYikRskkSCoxOYDESqlDKjGE9vysMebiUDngBBaPduJeZbF+MkZs+wlOnmuZnyKF6GUk7MNz+29hjCcvHIU9aFQvEoRT89OixBgwb8tg03G434fvEpxlItHMtR+QqvrzBD9XXdeDgdTS45PR6um9MJUplpsSR7R6Th/YWozuiquPNOQUNNsRnOOMK6wc3oJnZzuOlcrm8MV1zaMZJCHLgbooKgb5EPv/SPRM7TeSsLlw5FFW0b9qbgh0GGoR6rSvCggS6w8GOQy7Q99ymUBVUTMLGB5OB1dR5w07l7N1zt7p4KUUJqXHhwiKvxydOlqpQw9o4Fk/Rag3h+ca6iY4OmZoJgrWZYVlxjmfvTwEFEX0Ss+srBosCyqS/pZW/tJRkasiBWp1ReLCpbGca1yTTC9Oj3ctErQ4l+pFH176C5EVFJu0+UMZsqA2Y4SWpiWFSeXiNHAoayuMHUaDUwz911HJkODe1KMBtdsx9Gk0ezX75eUY0tYSriExk7FSLJbsdcVyQ6Fr1MP5PY5tL3yVyPPnQxMv+7o1GDS3NBksuzp1vXgUyrADA5iCgTLsDU3GWGsHP/ZLhrE4UAIRePgaIxQwzDcGA3jgFwAWj15HZsHIO+9iL3ZFLPn7M6YB+/1WUZkM7JCWAy/0kEP9MC7r2RAb6tHbrE89w3LI/Pe2TxiS5kKuLjOOlJcAr16pAkndAoD7+gkg/7WIx8h5xPajSSQtBmDrN0EuuAXoOqyDI12G9Bp3np/lyEkLUoH5nwYhH5fSHo9h6zfD7rgf6Ea9Q+N/sjQaT/aJ3aZijOGeToKRgPC8yAuIgyUNHDJFx7RvHuC0gJHuSJpOwBqyqr5xBoDpHWsycg2R5mZCqLTQx+s2X3oeSGkpocOSu7FZnI0VlGJrvqkXkSKnyjZQZDAkAHcvAGbFAoo05+VCt9/hEx3HoEaKk6YrxDR7OHBUM+AgF5LA1LFfSnXHkwjjGEFqF5+yAdWaEaeiIZAVD3NgSTWYy0Rjoz1sZOiSnvbl/u3Me+zVZW/skaKHCVqNOpVlrZlBtMdu+7HEYX0Z7TJYsnk5XSUIGklEgAA') format('woff2'),
  url('iconfont.woff?t=1590654752961') format('woff'),
  url('iconfont.ttf?t=1590654752961') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1590654752961#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-music:before {
  content: "\e502";
}

.icon-erji:before {
  content: "\e685";
}

.icon-mirrorlightctrl:before {
  content: "\e6e0";
}

.icon-search:before {
  content: "\e6e1";
}
`
