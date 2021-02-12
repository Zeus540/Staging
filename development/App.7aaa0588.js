// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/assets/images/g1.jpg":[function(require,module,exports) {
module.exports = "/g1.6e6a3265.jpg";
},{}],"../src/assets/images/g3.jpg":[function(require,module,exports) {
module.exports = "/g3.3cd85709.jpg";
},{}],"../src/assets/images/babyshower.jpg":[function(require,module,exports) {
module.exports = "/babyshower.98166445.jpg";
},{}],"../src/assets/images/graduation.jpg":[function(require,module,exports) {
module.exports = "/graduation.a563234e.jpg";
},{}],"../src/assets/images/proposal.jpg":[function(require,module,exports) {
module.exports = "/proposal.6d65d516.jpg";
},{}],"../src/components/Welcome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _g = _interopRequireDefault(require("../assets/images/g1.jpg"));

var _g2 = _interopRequireDefault(require("../assets/images/g3.jpg"));

var _babyshower = _interopRequireDefault(require("../assets/images/babyshower.jpg"));

var _graduation = _interopRequireDefault(require("../assets/images/graduation.jpg"));

var _proposal = _interopRequireDefault(require("../assets/images/proposal.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Welcome = function Welcome() {
  var template = "\n    <div class=\"containerSection1\">\n\n      <div class=\"left\">\n        <div>\n        <h1>\n        EVENTS </h1>\n    \n        </div>\n      </div>\n\n      <div class=\"right\">\n\n      <div class=\"rightInner1\">\n      <h1>\n      Engagements</h1>\n      <div class=\"imgHolder\">\n      <img src=".concat(_g2.default, "></img>\n     <a href=\"../../public/gallery.html\"></a>\n      </div>\n     \n      \n \n      </div>\n\n   \n      <div class=\"rightInner3\">\n      <h1>\n      BIRTHDAYS </h1>\n      <div class=\"imgHolder\">\n      <img src=").concat(_g.default, "></img>\n      </div>\n      </div>\n\n      <div class=\"rightInner4\">\n      <h1>\n      BABY SHOWERS </h1>\n      <div class=\"imgHolder\">\n      <img src=").concat(_babyshower.default, "></img>\n      </div>\n      </div>\n\n      <div class=\"rightInner5\">\n      <h1>\n      Graduation Celebrations </h1>\n      <div class=\"imgHolder\">\n      <img src=").concat(_graduation.default, "></img>\n      </div>\n      </div>\n\n      <div class=\"rightInner6\">\n      <h1>\n      Proposals & Engagements</h1>\n      <div class=\"imgHolder\">\n      <img src=").concat(_proposal.default, "></img>\n      </div>\n      </div>\n      </div>\n\n    </div>\n  ");
  return template;
};

var _default = Welcome;
exports.default = _default;
},{"../assets/images/g1.jpg":"../src/assets/images/g1.jpg","../assets/images/g3.jpg":"../src/assets/images/g3.jpg","../assets/images/babyshower.jpg":"../src/assets/images/babyshower.jpg","../assets/images/graduation.jpg":"../src/assets/images/graduation.jpg","../assets/images/proposal.jpg":"../src/assets/images/proposal.jpg"}],"../src/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Header = function Header() {
  var template = "\n    <div class=\"container\">\n\n   header\n\n    </div>\n  ";
  return template;
};

var _default = Header;
exports.default = _default;
},{}],"../src/assets/images/1.png":[function(require,module,exports) {
module.exports = "/1.0d91c6a6.png";
},{}],"../src/assets/images/2.png":[function(require,module,exports) {
module.exports = "/2.b05505dc.png";
},{}],"../src/assets/images/3.png":[function(require,module,exports) {
module.exports = "/3.88df389c.png";
},{}],"../src/components/Packages.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("../assets/images/1.png"));

var _2 = _interopRequireDefault(require("../assets/images/2.png"));

var _3 = _interopRequireDefault(require("../assets/images/3.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Packages = function Packages() {
  var template = "\n    <div class=\"containerPackages\">\n\n     \n\n      <div class=\"rightPackages\">\n\n      <div class=\"rightInner1Packages\">\n      <h1>Blooming<br> Bachelorette</h1>\n      <img src=".concat(_.default, "></img>\n      <h1>Officially a fianc\xE9<br>Let\u2019s get this party started!</h1>\n      <p>Before a bachelorette blooms into the beautiful bride, a celebration must be had. A bachelorette party is a very special moment in every woman\u2019s life. We celebrate the woman you were, and are becoming. It\u2019s a coming together of your nearest and dearest to relax, let go of the pre-wedding stress and just have some FUN. Whether it\u2019s champagne and massages, or a night out on the town, we can help your entourage make it a night to remember.</p>\n      </div>\n    \n      <div class=\"rightInner2Packages\">\n      <h1>Queen<br> Protea</h1>\n      <img src=").concat(_2.default, "></img>\n      <h1>You said YES!<br> Now where to begin?</h1>\n      <p>The Queen Protea experience is one of our most sought after and extensive packages. This is for the couple who need our assistance from the word go. We\u2019re talking setting budgets, creating invitations and navigating the fine art of table seating, right until we see that magnificent moment where you dance the night away as a married couple. From planning your special day and any events leading up to the day, to coordinating with third-party suppliers, as well as on the day coordination \u2013 rest comfortably knowing you\u2019re in good hands.</p>\n      </div>\n\n      <div class=\"rightInner3Packages\">\n      <h1>Delicate<br> Daisy</h1>\n      <img src=").concat(_3.default, "></img>\n      <h1>The A Team\u2019s <br> very own support team</h1>\n      <p>The Delicate Daisy experience is for the couple who are on it. Your wedding planning process is well underway, with your venue and service providers booked and ready to go. This is where we step in. We would meet a month before your wedding date for a complete hand-over, ensuring you and your fianc\xE9 can kick back, relax and enjoy the next month, as we smooth-sail right into your wedding day.</p>\n      </div>\n\n      </div>\n\n      <div class=\"leftPackages\">\n        <h1>PACKAGES</h1>\n      </div>\n    </div>\n  ");
  return template;
};

var _default = Packages;
exports.default = _default;
},{"../assets/images/1.png":"../src/assets/images/1.png","../assets/images/2.png":"../src/assets/images/2.png","../assets/images/3.png":"../src/assets/images/3.png"}],"../src/components/ClientFeedback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ClientFeedback = function ClientFeedback() {
  var template = "\n    <div class=\"ClientFeedback\">\n\n    <div class=\"ClientCard\">\n    <div>\n    <h1>CLIENT TESTAMONIALS</h1>\n    </div>\n    <div>\n    <p class=\"clear\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid saepe modi nisi alias, omnis adipisci itaque? Eius amet ratione repellendus expedita officiis illo et assumenda consequuntur id incidunt. Provident, impedit error doloribus eius sint eligendi molestiae. Rerum, laboriosam vitae inventore id magni hic! A minus doloribus distinctio? Sit, rem.</p>\n     <br>\n    <p class=\"name\">BOB ROSS</p>\n   \n    </div>\n    </div>\n\n    </div>\n  ";
  return template;
};

var _default = ClientFeedback;
exports.default = _default;
},{}],"../src/components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Footer = function Footer() {
  var template = "\n    <div class=\"container\">\n\n    Footer\n\n    </div>\n  ";
  return template;
};

var _default = Footer;
exports.default = _default;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/App.js":[function(require,module,exports) {
"use strict";

var _Welcome = _interopRequireDefault(require("./components/Welcome"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Packages = _interopRequireDefault(require("./components/Packages"));

var _ClientFeedback = _interopRequireDefault(require("./components/ClientFeedback"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

require("./scss/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  document.getElementById("root").innerHTML = "\n  ".concat((0, _Header.default)(), "\n\n  ").concat((0, _Packages.default)(), "\n  ").concat((0, _Welcome.default)(), "\n  ").concat((0, _ClientFeedback.default)(), "\n\n  ");
};

App();
},{"./components/Welcome":"../src/components/Welcome.js","./components/Header":"../src/components/Header.js","./components/Packages":"../src/components/Packages.js","./components/ClientFeedback":"../src/components/ClientFeedback.js","./components/Footer":"../src/components/Footer.js","./scss/app.scss":"../src/scss/app.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42911" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/App.js"], null)
//# sourceMappingURL=/App.7aaa0588.js.map