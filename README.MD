# react-native-carousel-banner
> a cross-platform (`iOS`, `Android`, `Web`) react native carousel component
  

[![npm](https://img.shields.io/npm/v/react-native-carousel-banner.svg?style=flat-square)](https://www.npmjs.com/package/react-native-carousel-banner) ![](https://img.shields.io/travis/yuanfux/react-native-carousel-banner/main.svg?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/yuanfux/react-native-carousel-banner.svg?style=flat-square) ![NPM](https://img.shields.io/npm/l/react-native-hsv-color-picker.svg?style=flat-square) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square) ![](https://img.shields.io/maintenance/yes/2020.svg?style=flat-square)



<p align="center">

<img  width="400"  src="https://user-images.githubusercontent.com/6414178/74084331-090d0c80-4aa9-11ea-90d6-c7b74e86b75d.gif">

</p>



`react-native-carousel-banner` is a React Native component for building a cross-platform carousel.

Highlighted Features:

1. **Cross Platform** - uniform behaviors among `iOS`, `Android` and `Web`
2. **Loop Cycle** - support head-to-tail / tail-to-head loop cycle
3. **Auto Play** - auto play with smooth transition

## Install
```bash
yarn add react-native-carousel-banner
```

## Usage
> a minimally-configured carousel
```js
import Carousel from 'react-native-carousel-banner';

const DATA = [
  '/images/0.jpg',
  '/images/1.jpg',
  '/images/2.jpg',
];


<Carousel data={DATA} roundedSize={5} />
```

## Props
#### Basic Props
| Prop | Type | Default | Description |
|--|--|--| -- |
| `data` | string[]  | `[]` |  the item data  |
| `height` | number  | `170` | `height` of image  |
| `roundedSize` | number  | `0` | `borderRadius` of image  |
| `autoplay` | boolean  | `true` | determine whether the auto play mode is enabled or not |
| `autoplayInterval` | number  | `5000` | delay between item transitions in `milliseconds`  |
| `dotColor` | string  | `#f97316` | index dot `backgroundColor`  |
| `onChange` | function  | null | callback of index changed  |

#### Props of onChange
| Prop | Type | Default | Description |
|--|--|--| -- |
| `currentIndex` | number  | `0` |  the current page number  |
| `total` | number  | `0` |  the total number of pages  |

## License
MIT
