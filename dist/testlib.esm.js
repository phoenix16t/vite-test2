import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId, createStaticVNode } from 'vue';

var script$1 = /*#__PURE__*/defineComponent({
  name: 'TestlibSample',

  // vue component name
  data() {
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
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId$1 = /*#__PURE__*/withScopeId("data-v-943ef802");

pushScopeId("data-v-943ef802");

const _hoisted_1$1 = {
  class: "testlib-sample"
};

const _hoisted_2$1 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2$1]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, " Reset ")]);
});

function styleInject(css, ref) {
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
}

var css_248z$1 = "\n.testlib-sample[data-v-943ef802] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.testlib-sample p[data-v-943ef802] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-943ef802";

var script = {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-12eeae1e");

pushScopeId("data-v-12eeae1e");

const _hoisted_1 = {
  class: "hello"
};

const _hoisted_2 = /*#__PURE__*/createStaticVNode("<p data-v-12eeae1e> For a guide and recipes on how to configure / customize this project,<br data-v-12eeae1e> check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-cli documentation</a>. </p><h3 data-v-12eeae1e>Installed CLI Plugins</h3><ul data-v-12eeae1e><li data-v-12eeae1e><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>babel</a></li><li data-v-12eeae1e><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>eslint</a></li></ul><h3 data-v-12eeae1e>Essential Links</h3><ul data-v-12eeae1e><li data-v-12eeae1e><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Core Docs</a></li><li data-v-12eeae1e><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Forum</a></li><li data-v-12eeae1e><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Community Chat</a></li><li data-v-12eeae1e><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>Twitter</a></li><li data-v-12eeae1e><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>News</a></li></ul><h3 data-v-12eeae1e>Ecosystem</h3><ul data-v-12eeae1e><li data-v-12eeae1e><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-router</a></li><li data-v-12eeae1e><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vuex</a></li><li data-v-12eeae1e><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-devtools</a></li><li data-v-12eeae1e><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>vue-loader</a></li><li data-v-12eeae1e><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-12eeae1e>awesome-vue</a></li></ul>", 7);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("h1", null, toDisplayString($props.msg), 1), _hoisted_2]);
});

var css_248z = "\nh3[data-v-12eeae1e] {\n  margin: 40px 0 0;\n}\nul[data-v-12eeae1e] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-12eeae1e] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-12eeae1e] {\n  color: #42b983;\n}\n.hello[data-v-12eeae1e] {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-12eeae1e";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  HelloWorld: script,
  TestlibSample: script$1
});

// Import vue components

const install = function installTestlib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as HelloWorld, script$1 as TestlibSample };
