irm
===

Install Required Modules

## Installation

```
npm install -g irm
```

## Usage

You start writing script without having any deps installed like a boss

```javascript
var Promise = require('bluebird');
var _ = require('lodash');
var request = require('request');
// ...
```

`irm` will find all deps used in your project and install it via npm
```
irm
```

equals

```
npm install bluebird lodash request
```

## LICENSE
MIT
