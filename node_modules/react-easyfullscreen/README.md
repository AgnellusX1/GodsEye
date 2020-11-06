# React FullScreen

[![npm version](https://badge.fury.io/js/react-easyfullscreen.svg)](https://www.npmjs.com/package/react-easyfullscreen) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-fullscreen/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-fullscreen.svg?branch=master)](https://travis-ci.com/andrelmlins/react-fullscreen) &bull; [![Dependencies](https://david-dm.org/andrelmlins/react-fullscreen.svg)](https://david-dm.org/andrelmlins/react-fullscreen) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/79ceb0f2-f703-4092-92aa-64d441c2e9c7/deploy-status)](https://app.netlify.com/sites/react-fullscreen/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/react-fullscreen.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/react-fullscreen/context:javascript)

Component that performs fullscreen in DOM Elements

## Installation

```
npm i react-easyfullscreen
// OR
yarn add react-easyfullscreen
```

## Demo [Link](https://react-fullscreen.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/react-fullscreen.git
cd react-fullscreen
npm install && npm run start
```

## Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import ReactFullscreeen from 'react-easyfullscreen';

const App = () => (
  <ReactFullscreen>
    {({ ref, onRequest, onExit }) => (
      <div
        ref={ref}
        style={{ backgroundColor: 'red', width: 120, height: 120 }}
      >
        <button onClick={() => onRequest()}>FullScreen</button>
        <button onClick={() => onExit()}>Screen</button>
      </div>
    )}
  </ReactFullscreen>
);

render(<App />, document.getElementById('root'));
```

## Properties

Raw component props (before transform):

| Prop     | Type | Description    |
| -------- | ---- | -------------- |
| onChange | func | Call in change |
| onError  | func | Call in error  |

### Children Function Properties

| Prop      | Type   | Description                 |
| --------- | ------ | --------------------------- |
| ref       | object | Ref dom element             |
| isEnabled | bool   | If it's possible fullscreen |
| onToggle  | func   | Call for fullscreen toggle  |
| onExit    | func   | Call for fullscreen exit    |
| onRequest | func   | Call for fullscreen enter   |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/react-easyfullscreen.png)](https://nodei.co/npm/react-easyfullscreen/)

## License

React FullScreen is open source software [licensed as MIT](https://github.com/andrelmlins/react-fullscreen/blob/master/LICENSE).
