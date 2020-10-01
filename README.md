# react-native-touch-ripple
![platforms](https://img.shields.io/badge/platforms-Android%20|%20iOS-brightgreen.svg)
[![npm](https://img.shields.io/badge/npm-0.0.4-blue)](https://www.npmjs.com/package/react-native-touch-ripple)
[![travis](https://travis-ci.org/gusgard/react-native-swiper-flatlist.svg?branch=master)](https://www.npmjs.com/package/react-native-touch-ripple)

![Demo](https://github.com/noddy1996/react-native-touch-ripple/blob/master/example/demo/demo.gif)

## Features

* Easy to use
* Configurable
* Consistent look and feel on iOS and Android
* Can be used as drop-in replacement for [TouchableWithoutFeedback][touchable]
* Pure javascript implementation
* RTL Support

## Installation

```bash
npm install --save react-native-touch-ripple
```
or
```bash
yarn add react-native-touch-ripple
```

## Usage

```javascript
import React, { Component } from 'react';
import { Text } from 'react-native';
import TouchRipple  from 'react-native-touch-ripple'

class Example extends Component {
  render() {
    return (
      <TouchRipple>
        <Text>Press Here</Text>
      </TouchRipple>
    );
  }
}
```

## Properties

 name                        | description                            | type     | default
:--------------------------- |:-------------------------------------- | --------:|:------------
 rippleColor                 | Ripple color                           |   String | rgb(0, 0, 0)
 rippleOpacity               | Ripple opacity                         |   Number | 0.3
 rippleDuration              | Ripple duration in ms                  |   Number | 400
 rippleSize                  | Ripple size restriction                |   Number | 0
 rippleContainerBorderRadius | Ripple container border radius         |   Number | 0
 rippleCentered              | Ripple always starts from center       |  Boolean | false
 rippleSequential            | Ripple should start in sequence        |  Boolean | false
 rippleFades                 | Ripple fades out                       |  Boolean | true
 disabled                    | Ripple should ignore touches           |  Boolean | false
 onPressIn                   | Touch moved in or started callback     | Function | -
 onPressOut                  | Touch moved out or terminated callback | Function | -
 onPress                     | Touch up inside bounds callback        | Function | -
 onLongPress                 | Touch delayed after onPressIn callback | Function | -
 onRippleAnimation           | Animation start callback               | Function | -

Other [TouchableWithoutFeedback][touchable] properties will also work


