"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNWRAP_TASK = exports.DELAY_TASK = exports.ACTION_TASK = exports.GET_SAVED_MAPS_TASK = exports.LOAD_CLOUD_MAP_TASK = exports.EXPORT_FILE_TO_CLOUD_TASK = exports.LOAD_MAP_STYLE_TASK = exports.PROCESS_FILE_DATA = exports.LOAD_FILE_TASK = void 0;

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _d3Request = require("d3-request");

var _fileHandler = require("../processors/file-handler");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var LOAD_FILE_TASK = _tasks["default"].fromPromise(function (_ref) {
  var file = _ref.file,
      fileCache = _ref.fileCache,
      loaders = _ref.loaders,
      loadOptions = _ref.loadOptions;
  return (0, _fileHandler.readFileInBatches)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  });
}, 'LOAD_FILE_TASK');

exports.LOAD_FILE_TASK = LOAD_FILE_TASK;

var PROCESS_FILE_DATA = _tasks["default"].fromPromise(_fileHandler.processFileData, 'PROCESS_FILE_CONTENT');

exports.PROCESS_FILE_DATA = PROCESS_FILE_DATA;
var LOAD_MAP_STYLE_TASK = (0, _tasks.taskCreator)(function (_ref2, success, error) {
  var url = _ref2.url,
      id = _ref2.id;
  return (0, _d3Request.json)(url, function (err, result) {
    if (err) {
      error(err);
    } else {
      if (!result) {
        error(new Error('Map style response is empty'));
      }

      success({
        id: id,
        style: result
      });
    }
  });
}, 'LOAD_MAP_STYLE_TASK');
/**
 * task to upload file to cloud provider
 */

exports.LOAD_MAP_STYLE_TASK = LOAD_MAP_STYLE_TASK;

var EXPORT_FILE_TO_CLOUD_TASK = _tasks["default"].fromPromise(function (_ref3) {
  var provider = _ref3.provider,
      payload = _ref3.payload;
  return provider.uploadMap(payload);
}, 'EXPORT_FILE_TO_CLOUD_TASK');

exports.EXPORT_FILE_TO_CLOUD_TASK = EXPORT_FILE_TO_CLOUD_TASK;

var LOAD_CLOUD_MAP_TASK = _tasks["default"].fromPromise(function (_ref4) {
  var provider = _ref4.provider,
      payload = _ref4.payload;
  return provider.downloadMap(payload);
}, 'LOAD_CLOUD_MAP_TASK');

exports.LOAD_CLOUD_MAP_TASK = LOAD_CLOUD_MAP_TASK;

var GET_SAVED_MAPS_TASK = _tasks["default"].fromPromise(function (provider) {
  return provider.listMaps();
}, 'GET_SAVED_MAPS_TASK');
/**
 *  task to dispatch a function as a task
 */


exports.GET_SAVED_MAPS_TASK = GET_SAVED_MAPS_TASK;

var ACTION_TASK = _tasks["default"].fromCallback(function (_, cb) {
  return cb();
}, 'ACTION_TASK');

exports.ACTION_TASK = ACTION_TASK;

var DELAY_TASK = _tasks["default"].fromCallback(function (delay, cb) {
  return window.setTimeout(function () {
    return cb();
  }, delay);
}, 'DELAY_TASK');

exports.DELAY_TASK = DELAY_TASK;

var UNWRAP_TASK = _tasks["default"].fromPromise(function (promise) {
  return promise;
}, 'UNWRAP');

exports.UNWRAP_TASK = UNWRAP_TASK;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrcy90YXNrcy5qcyJdLCJuYW1lcyI6WyJMT0FEX0ZJTEVfVEFTSyIsIlRhc2siLCJmcm9tUHJvbWlzZSIsImZpbGUiLCJmaWxlQ2FjaGUiLCJsb2FkZXJzIiwibG9hZE9wdGlvbnMiLCJQUk9DRVNTX0ZJTEVfREFUQSIsInByb2Nlc3NGaWxlRGF0YSIsIkxPQURfTUFQX1NUWUxFX1RBU0siLCJzdWNjZXNzIiwiZXJyb3IiLCJ1cmwiLCJpZCIsImVyciIsInJlc3VsdCIsIkVycm9yIiwic3R5bGUiLCJFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLIiwicHJvdmlkZXIiLCJwYXlsb2FkIiwidXBsb2FkTWFwIiwiTE9BRF9DTE9VRF9NQVBfVEFTSyIsImRvd25sb2FkTWFwIiwiR0VUX1NBVkVEX01BUFNfVEFTSyIsImxpc3RNYXBzIiwiQUNUSU9OX1RBU0siLCJmcm9tQ2FsbGJhY2siLCJfIiwiY2IiLCJERUxBWV9UQVNLIiwiZGVsYXkiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiVU5XUkFQX1RBU0siLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLElBQU1BLGNBQWMsR0FBR0Msa0JBQUtDLFdBQUwsQ0FDNUI7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxNQUFRQyxTQUFSLFFBQVFBLFNBQVI7QUFBQSxNQUFtQkMsT0FBbkIsUUFBbUJBLE9BQW5CO0FBQUEsTUFBNEJDLFdBQTVCLFFBQTRCQSxXQUE1QjtBQUFBLFNBQ0Usb0NBQWtCO0FBQUNILElBQUFBLElBQUksRUFBSkEsSUFBRDtBQUFPQyxJQUFBQSxTQUFTLEVBQVRBLFNBQVA7QUFBa0JDLElBQUFBLE9BQU8sRUFBUEEsT0FBbEI7QUFBMkJDLElBQUFBLFdBQVcsRUFBWEE7QUFBM0IsR0FBbEIsQ0FERjtBQUFBLENBRDRCLEVBRzVCLGdCQUg0QixDQUF2Qjs7OztBQU1BLElBQU1DLGlCQUFpQixHQUFHTixrQkFBS0MsV0FBTCxDQUMvQk0sNEJBRCtCLEVBRy9CLHNCQUgrQixDQUExQjs7O0FBTUEsSUFBTUMsbUJBQW1CLEdBQUcsd0JBQ2pDLGlCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQjtBQUFBLE1BQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLE1BQU9DLEVBQVAsU0FBT0EsRUFBUDtBQUFBLFNBQ0UscUJBQVlELEdBQVosRUFBaUIsVUFBQ0UsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2hDLFFBQUlELEdBQUosRUFBUztBQUNQSCxNQUFBQSxLQUFLLENBQUNHLEdBQUQsQ0FBTDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1hKLFFBQUFBLEtBQUssQ0FBQyxJQUFJSyxLQUFKLENBQVUsNkJBQVYsQ0FBRCxDQUFMO0FBQ0Q7O0FBQ0ROLE1BQUFBLE9BQU8sQ0FBQztBQUFDRyxRQUFBQSxFQUFFLEVBQUZBLEVBQUQ7QUFBS0ksUUFBQUEsS0FBSyxFQUFFRjtBQUFaLE9BQUQsQ0FBUDtBQUNEO0FBQ0YsR0FURCxDQURGO0FBQUEsQ0FEaUMsRUFhakMscUJBYmlDLENBQTVCO0FBZ0JQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1HLHlCQUF5QixHQUFHakIsa0JBQUtDLFdBQUwsQ0FDdkM7QUFBQSxNQUFFaUIsUUFBRixTQUFFQSxRQUFGO0FBQUEsTUFBWUMsT0FBWixTQUFZQSxPQUFaO0FBQUEsU0FBeUJELFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkQsT0FBbkIsQ0FBekI7QUFBQSxDQUR1QyxFQUd2QywyQkFIdUMsQ0FBbEM7Ozs7QUFNQSxJQUFNRSxtQkFBbUIsR0FBR3JCLGtCQUFLQyxXQUFMLENBQ2pDO0FBQUEsTUFBRWlCLFFBQUYsU0FBRUEsUUFBRjtBQUFBLE1BQVlDLE9BQVosU0FBWUEsT0FBWjtBQUFBLFNBQXlCRCxRQUFRLENBQUNJLFdBQVQsQ0FBcUJILE9BQXJCLENBQXpCO0FBQUEsQ0FEaUMsRUFHakMscUJBSGlDLENBQTVCOzs7O0FBTUEsSUFBTUksbUJBQW1CLEdBQUd2QixrQkFBS0MsV0FBTCxDQUNqQyxVQUFBaUIsUUFBUTtBQUFBLFNBQUlBLFFBQVEsQ0FBQ00sUUFBVCxFQUFKO0FBQUEsQ0FEeUIsRUFHakMscUJBSGlDLENBQTVCO0FBS1A7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFdBQVcsR0FBR3pCLGtCQUFLMEIsWUFBTCxDQUN6QixVQUFDQyxDQUFELEVBQUlDLEVBQUo7QUFBQSxTQUFXQSxFQUFFLEVBQWI7QUFBQSxDQUR5QixFQUd6QixhQUh5QixDQUFwQjs7OztBQU1BLElBQU1DLFVBQVUsR0FBRzdCLGtCQUFLMEIsWUFBTCxDQUN4QixVQUFDSSxLQUFELEVBQVFGLEVBQVI7QUFBQSxTQUFlRyxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxXQUFNSixFQUFFLEVBQVI7QUFBQSxHQUFsQixFQUE4QkUsS0FBOUIsQ0FBZjtBQUFBLENBRHdCLEVBR3hCLFlBSHdCLENBQW5COzs7O0FBTUEsSUFBTUcsV0FBVyxHQUFHakMsa0JBQUtDLFdBQUwsQ0FDekIsVUFBQWlDLE9BQU87QUFBQSxTQUFJQSxPQUFKO0FBQUEsQ0FEa0IsRUFHekIsUUFIeUIsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgVGFzaywge3Rhc2tDcmVhdG9yfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcbmltcG9ydCB7anNvbiBhcyByZXF1ZXN0SnNvbn0gZnJvbSAnZDMtcmVxdWVzdCc7XG5pbXBvcnQge3JlYWRGaWxlSW5CYXRjaGVzLCBwcm9jZXNzRmlsZURhdGF9IGZyb20gJy4uL3Byb2Nlc3NvcnMvZmlsZS1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IExPQURfRklMRV9UQVNLID0gVGFzay5mcm9tUHJvbWlzZShcbiAgKHtmaWxlLCBmaWxlQ2FjaGUsIGxvYWRlcnMsIGxvYWRPcHRpb25zfSkgPT5cbiAgICByZWFkRmlsZUluQmF0Y2hlcyh7ZmlsZSwgZmlsZUNhY2hlLCBsb2FkZXJzLCBsb2FkT3B0aW9uc30pLFxuICAnTE9BRF9GSUxFX1RBU0snXG4pO1xuXG5leHBvcnQgY29uc3QgUFJPQ0VTU19GSUxFX0RBVEEgPSBUYXNrLmZyb21Qcm9taXNlKFxuICBwcm9jZXNzRmlsZURhdGEsXG5cbiAgJ1BST0NFU1NfRklMRV9DT05URU5UJ1xuKTtcblxuZXhwb3J0IGNvbnN0IExPQURfTUFQX1NUWUxFX1RBU0sgPSB0YXNrQ3JlYXRvcihcbiAgKHt1cmwsIGlkfSwgc3VjY2VzcywgZXJyb3IpID0+XG4gICAgcmVxdWVzdEpzb24odXJsLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgZXJyb3IobmV3IEVycm9yKCdNYXAgc3R5bGUgcmVzcG9uc2UgaXMgZW1wdHknKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VjY2Vzcyh7aWQsIHN0eWxlOiByZXN1bHR9KTtcbiAgICAgIH1cbiAgICB9KSxcblxuICAnTE9BRF9NQVBfU1RZTEVfVEFTSydcbik7XG5cbi8qKlxuICogdGFzayB0byB1cGxvYWQgZmlsZSB0byBjbG91ZCBwcm92aWRlclxuICovXG5leHBvcnQgY29uc3QgRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXG4gICh7cHJvdmlkZXIsIHBheWxvYWR9KSA9PiBwcm92aWRlci51cGxvYWRNYXAocGF5bG9hZCksXG5cbiAgJ0VYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0snXG4pO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DTE9VRF9NQVBfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXG4gICh7cHJvdmlkZXIsIHBheWxvYWR9KSA9PiBwcm92aWRlci5kb3dubG9hZE1hcChwYXlsb2FkKSxcblxuICAnTE9BRF9DTE9VRF9NQVBfVEFTSydcbik7XG5cbmV4cG9ydCBjb25zdCBHRVRfU0FWRURfTUFQU19UQVNLID0gVGFzay5mcm9tUHJvbWlzZShcbiAgcHJvdmlkZXIgPT4gcHJvdmlkZXIubGlzdE1hcHMoKSxcblxuICAnR0VUX1NBVkVEX01BUFNfVEFTSydcbik7XG4vKipcbiAqICB0YXNrIHRvIGRpc3BhdGNoIGEgZnVuY3Rpb24gYXMgYSB0YXNrXG4gKi9cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEFTSyA9IFRhc2suZnJvbUNhbGxiYWNrKFxuICAoXywgY2IpID0+IGNiKCksXG5cbiAgJ0FDVElPTl9UQVNLJ1xuKTtcblxuZXhwb3J0IGNvbnN0IERFTEFZX1RBU0sgPSBUYXNrLmZyb21DYWxsYmFjayhcbiAgKGRlbGF5LCBjYikgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gY2IoKSwgZGVsYXkpLFxuXG4gICdERUxBWV9UQVNLJ1xuKTtcblxuZXhwb3J0IGNvbnN0IFVOV1JBUF9UQVNLID0gVGFzay5mcm9tUHJvbWlzZShcbiAgcHJvbWlzZSA9PiBwcm9taXNlLFxuXG4gICdVTldSQVAnXG4pO1xuIl19