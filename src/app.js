'use strict';

var component1 = require('workflow-test-package1');
var component2 = require('workflow-test-package2');

document.body.appendChild(component1());
document.body.appendChild(component2());
