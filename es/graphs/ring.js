import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { getTwoPointDistance } from '../utils/graphs';
import Graph from '../core/graph.class';

var Ring = /*#__PURE__*/function (_Graph) {
  _inherits(Ring, _Graph);

  var _super = _createSuper(Ring);

  function Ring(config) {
    var _this;

    _classCallCheck(this, Ring);

    _this = _super.call(this, Graph.mergeDefaultShape({
      rx: 0,
      ry: 0,
      r: 0
    }, config, function (_ref) {
      var _ref$shape = _ref.shape,
          rx = _ref$shape.rx,
          ry = _ref$shape.ry,
          r = _ref$shape.r;
      if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') throw new Error('CRender Graph Ring: Ring shape configuration is invalid!');
    }));

    _defineProperty(_assertThisInitialized(_this), "name", 'ring');

    return _this;
  }

  _createClass(Ring, [{
    key: "draw",
    value: function draw() {
      var shape = this.shape,
          ctx = this.render.ctx;
      var rx = shape.rx,
          ry = shape.ry,
          r = shape.r;
      ctx.beginPath();
      ctx.arc(rx, ry, r > 0 ? r : 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }, {
    key: "hoverCheck",
    value: function hoverCheck(point) {
      var shape = this.shape,
          style = this.style;
      var rx = shape.rx,
          ry = shape.ry,
          r = shape.r;
      var lineWidth = style.lineWidth;
      var halfLineWidth = lineWidth / 2;
      var minDistance = r - halfLineWidth;
      var maxDistance = r + halfLineWidth;
      var distance = getTwoPointDistance(point, [rx, ry]);
      return distance >= minDistance && distance <= maxDistance;
    }
  }, {
    key: "setGraphCenter",
    value: function setGraphCenter() {
      var shape = this.shape,
          style = this.style;
      var rx = shape.rx,
          ry = shape.ry;
      style.graphCenter = [rx, ry];
    }
  }, {
    key: "move",
    value: function move(_ref2) {
      var movementX = _ref2.movementX,
          movementY = _ref2.movementY;
      var shape = this.shape;
      this.attr('shape', {
        rx: shape.rx + movementX,
        ry: shape.ry + movementY
      });
    }
  }]);

  return Ring;
}(Graph);

export default Ring;