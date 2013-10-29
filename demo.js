/*jshint browser:true*/
var D = require('dual');
var Icon = require('./');

var demo = D.fromJSON([
    'div', [
        ['icon', {
            glyph: 'save'
        }],
        ['icon', {
            glyph: 'open'
        }],
        ['icon', {
            glyph: 'move'
        }]
    ]
], {
    'icon': Icon
});

// var assets = D.utils.indexBy(demo, false, 'ui:asset');

document.body.appendChild(demo.domify());