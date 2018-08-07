'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = function Value(props) {
  var label = props.label,
      value = props.value,
      icon = props.icon,
      unit = props.unit,
      trendIcon = props.trendIcon,
      isIconLast = props.isIconLast;


  return _react2.default.createElement(
    _Box2.default,
    { alignItems: 'center', fill: false },
    _react2.default.createElement(
      _Box2.default,
      { alignItems: 'baseline' },
      !isIconLast ? _react2.default.createElement(_Icon2.default, { icon: icon, size: 'xs' }) : null,
      unit ? _react2.default.createElement(
        _Heading2.default,
        { strong: false, tag: 'h5', padding: { horizontal: 'xs' } },
        unit
      ) : null,
      _react2.default.createElement(
        _Heading2.default,
        { tag: 'h3' },
        value
      ),
      label ? _react2.default.createElement(
        _Heading2.default,
        { strong: false, tag: 'h5', padding: { horizontal: 'xs' } },
        label
      ) : null,
      trendIcon ? _react2.default.createElement(_Icon2.default, { icon: trendIcon, size: 'xs' }) : null,
      isIconLast ? _react2.default.createElement(
        _Box2.default,
        { fill: false, padding: { horizontal: 'xs' } },
        _react2.default.createElement(_Icon2.default, { icon: icon, size: 'xs' })
      ) : null
    )
  );
};

Value.propTypes = {
  value: _propTypes2.default.number,
  label: _propTypes2.default.label,
  icon: _propTypes2.default.string,
  trendIcon: _propTypes2.default.string,
  unit: _propTypes2.default.string,
  isIconLast: _propTypes2.default.bool
};

Value.defaultProps = {
  value: 0,
  label: null,
  icon: null,
  trendIcon: null,
  unit: null,
  isIconLast: false
};

exports.default = Value;

//# sourceMappingURL=Value.js.map