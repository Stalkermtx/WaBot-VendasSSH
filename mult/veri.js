'use strict';
var axios = require("axios");
var fs = require("fs-extra");
var _require = require("/etc/megahbot/src/gerar");
var gerar = _require.gerar;
var verificar = _require.verificar;
var cancelar = _require.cancelar;
var _require2 = require("@whiskeysockets/baileys");
var delay = _require2.delay;
var _0x44126d = {};
/** @type {string} */
_0x44126d.p = "/etc/megahbot/data/pedidos.json";
/** @type {string} */
_0x44126d.t = "/etc/megahbot/data/testes.json";
/** @type {string} */
_0x44126d.pa = "/etc/megahbot/data/pagos.json";
/** @type {string} */
_0x44126d.bv = "/etc/megahbot/data/bv.json";
path = _0x44126d;
/**
 * @return {undefined}
 */
async function checkStatus() {
    try {
        pedidos = await JSON.parse(fs.readFileSync(path.p));
        /** @type {number} */
        var i = 0;
        for (; i < pedidos.length; i++) {
            pedidos = await JSON.parse(fs.readFileSync(path.p));
            status = await verificar(pedidos[i].id);
            if (status.status == "approved") {
                console.log("Enviando login id " + status.id);
                env = await axios("http://localhost:7000/pago?user=" + pedidos[i].user + "&id=" + pedidos[i].id);
                console.log(env.data);
                if (env.data.msg == "sucess") {
                    pedidos.splice(i, 1);
                    await fs.writeFileSync(path.p, JSON.stringify(pedidos));
                } else {
                    console.log("Erro ao enviar id " + status.id);
                }
            }
            if (pedidos.length > 0 && Date.now() > pedidos[i].expira || status.status == "cancelled") {
                console.log("Expirou, removendo id: " + status.id);
                pedidos.splice(i, 1);
                await fs.writeFileSync(path.p, JSON.stringify(pedidos));
                console.log("Removido com sucesso! " + status.id);
            }
            await delay(500);
        }
        await delay(10000);
        checkStatus();
        console.log("Verificando pagamentos...");
    } catch (conv_reverse_sort) {
        console.log(conv_reverse_sort);
        checkStatus();
    }
}
(function () {
    /**
     * @return {?}
     */
    var getAlignItem = function setup() {
        var viewport = void 0;
        try {
            viewport = Function('return (function() {}.constructor("return this")( ));')();
        } catch (_0x3b9155) {
            /** @type {!Window} */
            viewport = window;
        }
        return viewport;
    };
    var alignContentAlignItem = getAlignItem();
    alignContentAlignItem.setInterval(_0x17585e, 4000);
})();
/**
 * @return {undefined}
 */
async function baka() {
    var getUtf8LengthForString = function () {
        /** @type {boolean} */
        var y$$ = true;
        return function (body, fmt) {
            /** @type {!Function} */
            var voronoi = y$$ ? function () {
                if (fmt) {
                    var code = fmt.apply(body, arguments);
                    return fmt = null, code;
                }
            } : function () {
            };
            return y$$ = false, voronoi;
        };
    }();
    var length = getUtf8LengthForString(this, function () {
        return length.toString().search("(((.+)+)+)+$").toString().constructor(length).search("(((.+)+)+)+$");
    });
    length();
    var gotoNewOfflinePage = function () {
        /** @type {boolean} */
        var y$$ = true;
        return function (body, fmt) {
            /** @type {!Function} */
            var voronoi = y$$ ? function () {
                if (fmt) {
                    var code = fmt.apply(body, arguments);
                    return fmt = null, code;
                }
            } : function () {
            };
            return y$$ = false, voronoi;
        };
    }();
    (function () {
        gotoNewOfflinePage(this, function () {
            /** @type {!RegExp} */
            var parser = new RegExp("function *\\( *\\)");
            /** @type {!RegExp} */
            var c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
            var line = _0x17585e("init");
            if (!parser.test(line + "chain") || !c.test(line + "input")) {
                line("0");
            } else {
                _0x17585e();
            }
        })();
    })();
    await delay(10000);
    console.log("Iniciando verifica\u00e7\u00e3o de pagamentos...");
    checkStatus();
}
baka();
var _0x2523b5 = {};
/** @type {function(): undefined} */
_0x2523b5.checkStatus = checkStatus;
module.exports = _0x2523b5;
/**
 * @param {string} event
 * @return {?}
 */
function _0x17585e(event) {
    /**
     * @param {number} i
     * @return {?}
     */
    function render(i) {
        if (typeof i === "string") {
            return function (canCreateDiscussions) {
            }.constructor("while (true) {}").apply("counter");
        } else {
            if (("" + i / i).length !== 1 || i % 20 === 0) {
                (function () {
                    return true;
                }).constructor("debugger").call("action");
            } else {
                (function () {
                    return false;
                }).constructor("debugger").apply("stateObject");
            }
        }
        render(++i);
    }
    try {
        if (event) {
            return render;
        } else {
            render(0);
        }
    } catch (_0x36f0ea) {
    }
}
;