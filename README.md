irm
===

Install Required Modules


Finds all dependencies for your project via [all-requires](http://github.com/boo1ean/all-requires) and installs it with [npm](http://github.com/npm/npm) 

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

## Install and save deps

You can pass same options as for `npm install` command

irm --save

## LICENSE
MIT
