'use strict';

var component1 = require('npm-test-package1');
var component2 = require('npm-test-package2');

document.body.appendChild(component1());
document.body.appendChild(component2());
