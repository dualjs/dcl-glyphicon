# dcl-glyphicon

DCL Glyphicon widget. It is a Dual wrapper of Bootstrap Glyphicon.

It imports Twitter Bootstrap styles from `'dcl-bootstrap'` module automatically.

## Installation

    npm install dcl-glyphicon

## Usage

Create an icon with `new` keyword:

```javascript
var Icon = require('dcl-glyphicon');

var i = new Icon();
i.setGlyph('save');
```

...or declaratively:

```javascript
var D = require('dual');
var b = D.fromJSON([
  'icon', //using alias 'icon'
  {
    glyph: 'ok'
  }], {
  icon : require('dcl-glyphicon') //declaring module 'dcl-glyphicon' as alias 'icon'
});
```

Then use it:

```javascript
// - in another Dual node:
myDualNode.appendChild(i);

// - directly in DOM tree:
document.body.appendChild(i.domify());

// - on the server:
res.end(i.stringify());

```

## Buiding

1. All Dual and DCL parts are written in CommonJS, so `Browserify` is used for building JS. You just have to `require('dcl-glyphicon')`.
2. Stylesheet is built with `grunt-dcl-resources` and `grunt-less`. Please, see `Gruntfile.js` demo task to find out how it is done.
