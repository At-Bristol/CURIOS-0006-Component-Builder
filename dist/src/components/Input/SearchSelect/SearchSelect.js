'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Dialog = require('../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _countries = require('./countries.json');

var _countries2 = _interopRequireDefault(_countries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var flatten = function flatten(array) {
  return array.reduce(function (a, v) {
    return a.concat(Array.isArray(v) ? flatten(v) : v);
  }, []);
};

var search = function search(_ref) {
  var _ref$array = _ref.array,
      array = _ref$array === undefined ? [] : _ref$array,
      _ref$field = _ref.field,
      field = _ref$field === undefined ? 'label' : _ref$field,
      _ref$searchString = _ref.searchString,
      searchString = _ref$searchString === undefined ? '' : _ref$searchString;

  var getResults = function getResults(x) {
    return x.toLowerCase().substr(0, searchString.length) === searchString.toLowerCase();
  };

  return array.filter(function (e) {
    if (e[field]) {
      return Array.isArray(e[field]) ? e[field].filter(function (f) {
        return getResults(f);
      })[0] : getResults(e[field]);
    }
    return false;
  });
};

var getFilteredOptions = function getFilteredOptions(_ref2) {
  var _ref2$options = _ref2.options,
      options = _ref2$options === undefined ? [] : _ref2$options,
      _ref2$searchString = _ref2.searchString,
      searchString = _ref2$searchString === undefined ? '' : _ref2$searchString,
      _ref2$extraFields = _ref2.extraFields,
      extraFields = _ref2$extraFields === undefined ? [] : _ref2$extraFields;

  var searchFields = ['label'].concat(_toConsumableArray(extraFields));

  try {
    var a = flatten(searchFields.map(function (e) {
      return search({ array: options, field: e, searchString: searchString });
    }));

    if (a[0]) {
      a[0] = { label: a[0].label, isSelected: true };
      return a;
    }
    return [];
  } catch (e) {
    return [];
  }
};

var SearchSelect = function SearchSelect(props) {
  var options = props.options,
      content = props.content,
      isOpen = props.isOpen,
      extraFields = props.extraFields;


  var oOptions = getFilteredOptions({
    options: options,
    extraFields: extraFields,
    searchString: content
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Input2.default, {
      size: 'm',
      content: content
    }),
    isOpen ? _react2.default.createElement(_Dialog2.default, { options: oOptions }) : null
  );
};

SearchSelect.defaultProps = {
  isOpen: true,
  content: 'eng',
  options: _countries2.default,
  extraFields: ['code', 'alias']
};

SearchSelect.propTypes = {
  isOpen: _propTypes2.default.bool,
  options: _propTypes2.default.object,
  content: _propTypes2.default.string,
  extraFields: _propTypes2.default.array
};

exports.default = SearchSelect;

//# sourceMappingURL=SearchSelect.js.map