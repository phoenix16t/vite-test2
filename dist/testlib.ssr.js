'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$1 = /*#__PURE__*/vue.defineComponent({
  name: 'TestlibSample',
  // vue component name
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-943ef802");

vue.pushScopeId("data-v-943ef802");

var _hoisted_1$1 = {
  class: "testlib-sample"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createTextVNode(".");

vue.popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.createVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2$1]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, " Click +1 "), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, " Click -1 "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.increment(5);
    })
  }, " Click +5 "), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.decrement(5);
    })
  }, " Click -5 "), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, " Reset ")]);
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$1 = "\n.testlib-sample[data-v-943ef802] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.testlib-sample p[data-v-943ef802] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-943ef802";var script = {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-12eeae1e");

vue.pushScopeId("data-v-12eeae1e");

var _hoisted_1 = {
  class: "hello"
};

var _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<p data-v-12eeae1e> For a guide and recipes on how to configure / customize this project,<br data-v-12eeae1e> check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-cli documentation</a>. </p><h3 data-v-12eeae1e>Installed CLI Plugins</h3><ul data-v-12eeae1e><li data-v-12eeae1e><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>babel</a></li><li data-v-12eeae1e><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>eslint</a></li></ul><h3 data-v-12eeae1e>Essential Links</h3><ul data-v-12eeae1e><li data-v-12eeae1e><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Core Docs</a></li><li data-v-12eeae1e><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Forum</a></li><li data-v-12eeae1e><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Community Chat</a></li><li data-v-12eeae1e><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Twitter</a></li><li data-v-12eeae1e><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>News</a></li></ul><h3 data-v-12eeae1e>Ecosystem</h3><ul data-v-12eeae1e><li data-v-12eeae1e><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-router</a></li><li data-v-12eeae1e><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vuex</a></li><li data-v-12eeae1e><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-devtools</a></li><li data-v-12eeae1e><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-loader</a></li><li data-v-12eeae1e><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>awesome-vue</a></li></ul>", 7);

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("h1", null, vue.toDisplayString($props.msg), 1), _hoisted_2]);
});var css_248z = "\nh3[data-v-12eeae1e] {\n  margin: 40px 0 0;\n}\nul[data-v-12eeae1e] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-12eeae1e] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-12eeae1e] {\n  color: #42b983;\n}\n.hello[data-v-12eeae1e] {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-12eeae1e";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,HelloWorld: script,TestlibSample: script$1});var install = function installTestlib(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,HelloWorld: script,TestlibSample: script$1});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;