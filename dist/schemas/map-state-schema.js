"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propertiesV1 = exports.propertiesV0 = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _versions = require("./versions");

var _schema = _interopRequireDefault(require("./schema"));

var _mapStateSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// version v0
var propertiesV0 = {
  bearing: null,
  dragRotate: null,
  latitude: null,
  longitude: null,
  pitch: null,
  zoom: null
};
exports.propertiesV0 = propertiesV0;

var propertiesV1 = _objectSpread(_objectSpread({}, propertiesV0), {}, {
  isSplit: null
});

exports.propertiesV1 = propertiesV1;
var mapStateSchema = (_mapStateSchema = {}, (0, _defineProperty2["default"])(_mapStateSchema, _versions.VERSIONS.v0, new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'mapState'
})), (0, _defineProperty2["default"])(_mapStateSchema, _versions.VERSIONS.v1, new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'mapState'
})), _mapStateSchema);
var _default = mapStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL21hcC1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsicHJvcGVydGllc1YwIiwiYmVhcmluZyIsImRyYWdSb3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInBpdGNoIiwiem9vbSIsInByb3BlcnRpZXNWMSIsImlzU3BsaXQiLCJtYXBTdGF0ZVNjaGVtYSIsIlZFUlNJT05TIiwidjAiLCJTY2hlbWEiLCJ2ZXJzaW9uIiwicHJvcGVydGllcyIsImtleSIsInYxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsRUFBQUEsT0FBTyxFQUFFLElBRGlCO0FBRTFCQyxFQUFBQSxVQUFVLEVBQUUsSUFGYztBQUcxQkMsRUFBQUEsUUFBUSxFQUFFLElBSGdCO0FBSTFCQyxFQUFBQSxTQUFTLEVBQUUsSUFKZTtBQUsxQkMsRUFBQUEsS0FBSyxFQUFFLElBTG1CO0FBTTFCQyxFQUFBQSxJQUFJLEVBQUU7QUFOb0IsQ0FBckI7OztBQVNBLElBQU1DLFlBQVksbUNBQ3BCUCxZQURvQjtBQUV2QlEsRUFBQUEsT0FBTyxFQUFFO0FBRmMsRUFBbEI7OztBQUtQLElBQU1DLGNBQWMsNEVBQ2pCQyxtQkFBU0MsRUFEUSxFQUNILElBQUlDLGtCQUFKLENBQVc7QUFDeEJDLEVBQUFBLE9BQU8sRUFBRUgsbUJBQVNDLEVBRE07QUFFeEJHLEVBQUFBLFVBQVUsRUFBRWQsWUFGWTtBQUd4QmUsRUFBQUEsR0FBRyxFQUFFO0FBSG1CLENBQVgsQ0FERyxxREFNakJMLG1CQUFTTSxFQU5RLEVBTUgsSUFBSUosa0JBQUosQ0FBVztBQUN4QkMsRUFBQUEsT0FBTyxFQUFFSCxtQkFBU00sRUFETTtBQUV4QkYsRUFBQUEsVUFBVSxFQUFFUCxZQUZZO0FBR3hCUSxFQUFBQSxHQUFHLEVBQUU7QUFIbUIsQ0FBWCxDQU5HLG1CQUFwQjtlQWFlTixjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcblxuLy8gdmVyc2lvbiB2MFxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMCA9IHtcbiAgYmVhcmluZzogbnVsbCxcbiAgZHJhZ1JvdGF0ZTogbnVsbCxcbiAgbGF0aXR1ZGU6IG51bGwsXG4gIGxvbmdpdHVkZTogbnVsbCxcbiAgcGl0Y2g6IG51bGwsXG4gIHpvb206IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzVjEgPSB7XG4gIC4uLnByb3BlcnRpZXNWMCxcbiAgaXNTcGxpdDogbnVsbFxufTtcblxuY29uc3QgbWFwU3RhdGVTY2hlbWEgPSB7XG4gIFtWRVJTSU9OUy52MF06IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMCxcbiAgICBrZXk6ICdtYXBTdGF0ZSdcbiAgfSksXG4gIFtWRVJTSU9OUy52MV06IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMSxcbiAgICBrZXk6ICdtYXBTdGF0ZSdcbiAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hcFN0YXRlU2NoZW1hO1xuIl19