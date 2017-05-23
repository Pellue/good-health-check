'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stream = require('stream');

var Filter = function (_Stream$Transform) {
	(0, _inherits3.default)(Filter, _Stream$Transform);

	function Filter(options) {
		(0, _classCallCheck3.default)(this, Filter);

		options = (0, _assign2.default)({}, options, {
			objectMode: true
		});
		return (0, _possibleConstructorReturn3.default)(this, (Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call(this, options));
	}

	(0, _createClass3.default)(Filter, [{
		key: '_transform',
		value: function _transform(data, enc, next) {

			if (data.event === 'response' && data.config.suppressResponseEvent === true) {
				return next();
			}

			return next(null, data);
		}
	}]);
	return Filter;
}(Stream.Transform);

module.exports = Filter;