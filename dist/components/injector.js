"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injector = injector;
exports.flattenDeps = flattenDeps;
exports.provideRecipesToInjector = provideRecipesToInjector;
exports.typeCheckRecipe = typeCheckRecipe;
exports.withState = withState;
exports.ERROR_MSG = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _window = require("global/window");

var _context = _interopRequireDefault(require("./context"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MissingComp = function MissingComp() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

var ERROR_MSG = {
  wrongRecipeType: "injectComponents takes an array of factories replacement pairs as input, " + "each pair be a array as [originalFactory, replacement].",
  noDep: function noDep(fac, parent) {
    return "".concat(fac.name, " is required as a dependency of ").concat(parent.name, ", ") + "but is not provided to injectComponents. It will not be rendered.";
  },
  notFunc: 'factory and its replacement should be a function'
};
exports.ERROR_MSG = ERROR_MSG;

function injector() {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var cache = new Map(); // map<factory, factory -> ?>

  var get = function get(fac, parent) {
    var factory = map.get(fac); // factory is not injected

    if (!factory) {
      _window.console.error(ERROR_MSG.noDep(fac, parent));

      return MissingComp;
    } // check if custom factory deps is declared


    var instances = cache.get(factory) || factory.apply(void 0, (0, _toConsumableArray2["default"])(factory.deps ? factory.deps.map(function (dep) {
      return get(dep, factory);
    }) : []));
    cache.set(fac, instances);
    return instances;
  }; // if you have two functions that happen to have the exactly same text
  // it will be override: 2018-02-05


  return {
    provide: function provide(factory, replacement) {
      if (!typeCheckRecipe([factory, replacement])) {
        return injector(map);
      }

      return injector(new Map(map).set(factory, replacement));
    },
    get: get
  };
} // entryPoint


function flattenDeps(allDeps, factory) {
  var addToDeps = allDeps.concat([factory]);
  return Array.isArray(factory.deps) && factory.deps.length ? factory.deps.reduce(function (accu, dep) {
    return flattenDeps(accu, dep);
  }, addToDeps) : addToDeps;
}

function provideRecipesToInjector(recipes, appInjector) {
  var provided = new Map();
  return recipes.reduce(function (inj, recipe) {
    var _inj;

    if (!typeCheckRecipe(recipe)) {
      return inj;
    } // collect dependencies of custom factories, if there is any.
    // Add them to the appInjector


    var customDependencies = flattenDeps([], recipe[1]);
    inj = customDependencies.reduce(function (ij, factory) {
      if (provided.get(factory)) {
        _window.console.warn("".concat(factory.name, " already injected from ").concat(provided.get(factory).name, ", injecting ").concat(recipe[0].name, " after ").concat(provided.get(factory).name, " will override it"));
      }

      return ij.provide(factory, factory);
    }, inj);
    provided.set(recipe[0], recipe[1]);
    return (_inj = inj).provide.apply(_inj, (0, _toConsumableArray2["default"])(recipe));
  }, appInjector);
}

function typeCheckRecipe(recipe) {
  if (!Array.isArray(recipe) || recipe.length < 2) {
    _window.console.error('Error injecting [factory, replacement]', recipe);

    _window.console.error(ERROR_MSG.wrongRecipeType);

    return false;
  }

  var _recipe = (0, _slicedToArray2["default"])(recipe, 2),
      factory = _recipe[0],
      replacement = _recipe[1];

  if (typeof factory !== 'function') {
    _window.console.error('Error injecting factory: ', factory);

    _window.console.error(ERROR_MSG.notFunc);

    return false;
  } else if (typeof replacement !== 'function') {
    _window.console.error('Error injecting replacement for: ', factory);

    _window.console.error(ERROR_MSG.notFunc);

    return false;
  }

  return true;
}

var identity = function identity(state) {
  return state;
}; // Helper to add reducer state to custom component


function withState() {
  var lenses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
  var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (Component) {
    var WrappedComponent = function WrappedComponent(_ref) {
      var state = _ref.state,
          props = (0, _objectWithoutProperties2["default"])(_ref, ["state"]);
      return /*#__PURE__*/_react["default"].createElement(_context["default"].Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Component, lenses.reduce(function (totalState, lens) {
          return _objectSpread(_objectSpread({}, totalState), lens(context.selector(state)));
        }, props));
      });
    };

    return (0, _reactRedux.connect)(function (state) {
      return _objectSpread(_objectSpread({}, mapStateToProps(state)), {}, {
        state: state
      });
    }, function (dispatch) {
      return Object.keys(actions).reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, (0, _redux.bindActionCreators)(actions[key], dispatch)));
      }, {});
    })(WrappedComponent);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luamVjdG9yLmpzIl0sIm5hbWVzIjpbIk1pc3NpbmdDb21wIiwiRVJST1JfTVNHIiwid3JvbmdSZWNpcGVUeXBlIiwibm9EZXAiLCJmYWMiLCJwYXJlbnQiLCJuYW1lIiwibm90RnVuYyIsImluamVjdG9yIiwibWFwIiwiTWFwIiwiY2FjaGUiLCJnZXQiLCJmYWN0b3J5IiwiQ29uc29sZSIsImVycm9yIiwiaW5zdGFuY2VzIiwiZGVwcyIsImRlcCIsInNldCIsInByb3ZpZGUiLCJyZXBsYWNlbWVudCIsInR5cGVDaGVja1JlY2lwZSIsImZsYXR0ZW5EZXBzIiwiYWxsRGVwcyIsImFkZFRvRGVwcyIsImNvbmNhdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJlZHVjZSIsImFjY3UiLCJwcm92aWRlUmVjaXBlc1RvSW5qZWN0b3IiLCJyZWNpcGVzIiwiYXBwSW5qZWN0b3IiLCJwcm92aWRlZCIsImluaiIsInJlY2lwZSIsImN1c3RvbURlcGVuZGVuY2llcyIsImlqIiwid2FybiIsImlkZW50aXR5Iiwic3RhdGUiLCJ3aXRoU3RhdGUiLCJsZW5zZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhY3Rpb25zIiwiQ29tcG9uZW50IiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiY29udGV4dCIsInRvdGFsU3RhdGUiLCJsZW5zIiwic2VsZWN0b3IiLCJkaXNwYXRjaCIsIk9iamVjdCIsImtleXMiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsc0JBQU0sNENBQU47QUFBQSxDQUFwQjs7QUFFTyxJQUFNQyxTQUFTLEdBQUc7QUFDdkJDLEVBQUFBLGVBQWUsRUFDYix1SUFGcUI7QUFLdkJDLEVBQUFBLEtBQUssRUFBRSxlQUFDQyxHQUFELEVBQU1DLE1BQU47QUFB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QUFBLEtBREEsRUFFTCxVQUFBWSxRQUFRO0FBQUEsYUFDTkMsTUFBTSxDQUFDQyxJQUFQLENBQVlWLE9BQVosRUFBcUJoQixNQUFyQixDQUNFLFVBQUNDLElBQUQsRUFBTzBCLEdBQVA7QUFBQSwrQ0FDSzFCLElBREwsNENBRUcwQixHQUZILEVBRVMsK0JBQW1CWCxPQUFPLENBQUNXLEdBQUQsQ0FBMUIsRUFBaUNILFFBQWpDLENBRlQ7QUFBQSxPQURGLEVBS0UsRUFMRixDQURNO0FBQUEsS0FGSCxFQVVMTixnQkFWSyxDQUFQO0FBV0QsR0E1QkQ7QUE2QkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IEtlcGxlckdsQ29udGV4dCBmcm9tICdjb21wb25lbnRzL2NvbnRleHQnO1xuXG5jb25zdCBNaXNzaW5nQ29tcCA9ICgpID0+IDxkaXYgLz47XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9NU0cgPSB7XG4gIHdyb25nUmVjaXBlVHlwZTpcbiAgICBgaW5qZWN0Q29tcG9uZW50cyB0YWtlcyBhbiBhcnJheSBvZiBmYWN0b3JpZXMgcmVwbGFjZW1lbnQgcGFpcnMgYXMgaW5wdXQsIGAgK1xuICAgIGBlYWNoIHBhaXIgYmUgYSBhcnJheSBhcyBbb3JpZ2luYWxGYWN0b3J5LCByZXBsYWNlbWVudF0uYCxcblxuICBub0RlcDogKGZhYywgcGFyZW50KSA9PlxuICAgIGAke2ZhYy5uYW1lfSBpcyByZXF1aXJlZCBhcyBhIGRlcGVuZGVuY3kgb2YgJHtwYXJlbnQubmFtZX0sIGAgK1xuICAgIGBidXQgaXMgbm90IHByb3ZpZGVkIHRvIGluamVjdENvbXBvbmVudHMuIEl0IHdpbGwgbm90IGJlIHJlbmRlcmVkLmAsXG5cbiAgbm90RnVuYzogJ2ZhY3RvcnkgYW5kIGl0cyByZXBsYWNlbWVudCBzaG91bGQgYmUgYSBmdW5jdGlvbidcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RvcihtYXAgPSBuZXcgTWFwKCkpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7IC8vIG1hcDxmYWN0b3J5LCBmYWN0b3J5IC0+ID8+XG4gIGNvbnN0IGdldCA9IChmYWMsIHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBtYXAuZ2V0KGZhYyk7XG4gICAgLy8gZmFjdG9yeSBpcyBub3QgaW5qZWN0ZWRcbiAgICBpZiAoIWZhY3RvcnkpIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoRVJST1JfTVNHLm5vRGVwKGZhYywgcGFyZW50KSk7XG4gICAgICByZXR1cm4gTWlzc2luZ0NvbXA7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgY3VzdG9tIGZhY3RvcnkgZGVwcyBpcyBkZWNsYXJlZFxuICAgIGNvbnN0IGluc3RhbmNlcyA9XG4gICAgICBjYWNoZS5nZXQoZmFjdG9yeSkgfHxcbiAgICAgIGZhY3RvcnkoLi4uKGZhY3RvcnkuZGVwcyA/IGZhY3RvcnkuZGVwcy5tYXAoZGVwID0+IGdldChkZXAsIGZhY3RvcnkpKSA6IFtdKSk7XG5cbiAgICBjYWNoZS5zZXQoZmFjLCBpbnN0YW5jZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZXM7XG4gIH07XG5cbiAgLy8gaWYgeW91IGhhdmUgdHdvIGZ1bmN0aW9ucyB0aGF0IGhhcHBlbiB0byBoYXZlIHRoZSBleGFjdGx5IHNhbWUgdGV4dFxuICAvLyBpdCB3aWxsIGJlIG92ZXJyaWRlOiAyMDE4LTAyLTA1XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogKGZhY3RvcnksIHJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBpZiAoIXR5cGVDaGVja1JlY2lwZShbZmFjdG9yeSwgcmVwbGFjZW1lbnRdKSkge1xuICAgICAgICByZXR1cm4gaW5qZWN0b3IobWFwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmplY3RvcihuZXcgTWFwKG1hcCkuc2V0KGZhY3RvcnksIHJlcGxhY2VtZW50KSk7XG4gICAgfSxcbiAgICBnZXRcbiAgfTtcbn1cblxuLy8gZW50cnlQb2ludFxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5EZXBzKGFsbERlcHMsIGZhY3RvcnkpIHtcbiAgY29uc3QgYWRkVG9EZXBzID0gYWxsRGVwcy5jb25jYXQoW2ZhY3RvcnldKTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZmFjdG9yeS5kZXBzKSAmJiBmYWN0b3J5LmRlcHMubGVuZ3RoXG4gICAgPyBmYWN0b3J5LmRlcHMucmVkdWNlKChhY2N1LCBkZXApID0+IGZsYXR0ZW5EZXBzKGFjY3UsIGRlcCksIGFkZFRvRGVwcylcbiAgICA6IGFkZFRvRGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVSZWNpcGVzVG9JbmplY3RvcihyZWNpcGVzLCBhcHBJbmplY3Rvcikge1xuICBjb25zdCBwcm92aWRlZCA9IG5ldyBNYXAoKTtcblxuICByZXR1cm4gcmVjaXBlcy5yZWR1Y2UoKGluaiwgcmVjaXBlKSA9PiB7XG4gICAgaWYgKCF0eXBlQ2hlY2tSZWNpcGUocmVjaXBlKSkge1xuICAgICAgcmV0dXJuIGluajtcbiAgICB9XG5cbiAgICAvLyBjb2xsZWN0IGRlcGVuZGVuY2llcyBvZiBjdXN0b20gZmFjdG9yaWVzLCBpZiB0aGVyZSBpcyBhbnkuXG4gICAgLy8gQWRkIHRoZW0gdG8gdGhlIGFwcEluamVjdG9yXG4gICAgY29uc3QgY3VzdG9tRGVwZW5kZW5jaWVzID0gZmxhdHRlbkRlcHMoW10sIHJlY2lwZVsxXSk7XG4gICAgaW5qID0gY3VzdG9tRGVwZW5kZW5jaWVzLnJlZHVjZSgoaWosIGZhY3RvcnkpID0+IHtcbiAgICAgIGlmIChwcm92aWRlZC5nZXQoZmFjdG9yeSkpIHtcbiAgICAgICAgQ29uc29sZS53YXJuKFxuICAgICAgICAgIGAke2ZhY3RvcnkubmFtZX0gYWxyZWFkeSBpbmplY3RlZCBmcm9tICR7cHJvdmlkZWQuZ2V0KGZhY3RvcnkpLm5hbWV9LCBpbmplY3RpbmcgJHtcbiAgICAgICAgICAgIHJlY2lwZVswXS5uYW1lXG4gICAgICAgICAgfSBhZnRlciAke3Byb3ZpZGVkLmdldChmYWN0b3J5KS5uYW1lfSB3aWxsIG92ZXJyaWRlIGl0YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlqLnByb3ZpZGUoZmFjdG9yeSwgZmFjdG9yeSk7XG4gICAgfSwgaW5qKTtcblxuICAgIHByb3ZpZGVkLnNldChyZWNpcGVbMF0sIHJlY2lwZVsxXSk7XG4gICAgcmV0dXJuIGluai5wcm92aWRlKC4uLnJlY2lwZSk7XG4gIH0sIGFwcEluamVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVDaGVja1JlY2lwZShyZWNpcGUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJlY2lwZSkgfHwgcmVjaXBlLmxlbmd0aCA8IDIpIHtcbiAgICBDb25zb2xlLmVycm9yKCdFcnJvciBpbmplY3RpbmcgW2ZhY3RvcnksIHJlcGxhY2VtZW50XScsIHJlY2lwZSk7XG4gICAgQ29uc29sZS5lcnJvcihFUlJPUl9NU0cud3JvbmdSZWNpcGVUeXBlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBbZmFjdG9yeSwgcmVwbGFjZW1lbnRdID0gcmVjaXBlO1xuICBpZiAodHlwZW9mIGZhY3RvcnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICBDb25zb2xlLmVycm9yKCdFcnJvciBpbmplY3RpbmcgZmFjdG9yeTogJywgZmFjdG9yeSk7XG4gICAgQ29uc29sZS5lcnJvcihFUlJPUl9NU0cubm90RnVuYyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXBsYWNlbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIENvbnNvbGUuZXJyb3IoJ0Vycm9yIGluamVjdGluZyByZXBsYWNlbWVudCBmb3I6ICcsIGZhY3RvcnkpO1xuICAgIENvbnNvbGUuZXJyb3IoRVJST1JfTVNHLm5vdEZ1bmMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBpZGVudGl0eSA9IHN0YXRlID0+IHN0YXRlO1xuLy8gSGVscGVyIHRvIGFkZCByZWR1Y2VyIHN0YXRlIHRvIGN1c3RvbSBjb21wb25lbnRcbmV4cG9ydCBmdW5jdGlvbiB3aXRoU3RhdGUobGVuc2VzID0gW10sIG1hcFN0YXRlVG9Qcm9wcyA9IGlkZW50aXR5LCBhY3Rpb25zID0ge30pIHtcbiAgcmV0dXJuIENvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgV3JhcHBlZENvbXBvbmVudCA9ICh7c3RhdGUsIC4uLnByb3BzfSkgPT4gKFxuICAgICAgPEtlcGxlckdsQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge2NvbnRleHQgPT4gKFxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5sZW5zZXMucmVkdWNlKFxuICAgICAgICAgICAgICAodG90YWxTdGF0ZSwgbGVucykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50b3RhbFN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLmxlbnMoY29udGV4dC5zZWxlY3RvcihzdGF0ZSkpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBwcm9wc1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9LZXBsZXJHbENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcblxuICAgIHJldHVybiBjb25uZWN0KFxuICAgICAgc3RhdGUgPT4gKHsuLi5tYXBTdGF0ZVRvUHJvcHMoc3RhdGUpLCBzdGF0ZX0pLFxuICAgICAgZGlzcGF0Y2ggPT5cbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykucmVkdWNlKFxuICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgW2tleV06IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zW2tleV0sIGRpc3BhdGNoKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgIClcbiAgICApKFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufVxuIl19