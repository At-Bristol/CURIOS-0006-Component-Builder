"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSpacing = function getSpacing(size, props) {
  try {
    return props.theme.spacing[size];
  } catch (e) {
    return null;
  }
};

var getSpacings = function getSpacings(sizeObj, props) {
  var horizontal = sizeObj.horizontal,
      vertical = sizeObj.vertical;


  var h = getSpacing(horizontal, props) || 0;
  var v = getSpacing(vertical, props) || 0;

  return v + " " + h + " " + v + " " + h;
};

exports.default = {
  getSpacing: getSpacing,
  getSpacings: getSpacings
};

//# sourceMappingURL=spacing.js.map