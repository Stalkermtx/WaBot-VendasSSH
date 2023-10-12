'use strict';
var _0x3bf858 = function () {
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
var _0x2fe5e6 = _0x3bf858(undefined, function () {
    return _0x2fe5e6.toString().search("(((.+)+)+)+$").toString().constructor(_0x2fe5e6).search("(((.+)+)+)+$");
});
_0x2fe5e6();
var _0x4587ea = function () {
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
    _0x4587ea(this, function () {
        /** @type {!RegExp} */
        var parser = new RegExp("function *\\( *\\)");
        /** @type {!RegExp} */
        var c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        var line = _0x5790fb("init");
        if (!parser.test(line + "chain") || !c.test(line + "input")) {
            line("0");
        } else {
            _0x5790fb();
        }
    })();
})();
var axios = require("axios");
var fs = require("fs-extra");
var ms = require("ms");
var _require = require("/root/config");
var config = _require.config;
var moment = require("moment-timezone");
/** @type {string} */
token = "" + config.token_mp;
(function () {
    /**
     * @return {?}
     */
    var getAlignItem = function setup() {
        var viewport = void 0;
        try {
            viewport = Function('return (function() {}.constructor("return this")( ));')();
        } catch (_0x1cd6fa) {
            /** @type {!Window} */
            viewport = window;
        }
        return viewport;
    };
    var alignContentAlignItem = getAlignItem();
    alignContentAlignItem.setInterval(_0x5790fb, 4000);
})();
hoje = moment.tz("America/Sao_Paulo").format("DD/MM/yyyy");
horario = moment.tz("America/Sao_Paulo").format("HH:mm");
console.log("Ativando em " + hoje + " \u00e1s " + horario + " (Bras\u00edlia)");
expira = ms("10m");
var _0x83a69e = {};
/** @type {string} */
_0x83a69e.p = "/etc/megahbot/data/pedidos.json";
/** @type {string} */
_0x83a69e.t = "/etc/megahbot/data/testes.json";
/** @type {string} */
_0x83a69e.pa = "/etc/megahbot/data/pagos.json";
/** @type {string} */
_0x83a69e.bv = "/etc/megahbot/data/bv.json";
path = _0x83a69e;
/**
 * @param {number} index
 * @return {?}
 */
function delay(index) {
    return new Promise(function (_nextEventFunc) {
        return setTimeout(_nextEventFunc, index * 1000);
    });
}
/**
 * @param {string} currentAppUser
 * @param {?} nextAppUser
 * @return {?}
 */
async function gerar(currentAppUser, nextAppUser) {
    m10 = moment.tz("America/Sao_Paulo").add(10, "m").format("yyyy-MM-DDTHH:mm:ss.000z:00");
    m102 = moment.tz("America/Sao_Paulo").add(10, "m").format("HH:mm");
    requestP = await axios({
        method: "POST",
        url: "https://api.mercadopago.com/v1/payments",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        data: {
            transaction_amount: config.valorLogin,
            date_of_expiration: m10,
            description: "Login SSH",
            payment_method_id: "pix",
            payer: {
                email: "desgosto01@gmail.com",
                first_name: "JAQUELINE",
                last_name: "LISBOA",
                identification: {
                    type: "CPF",
                    number: "08746547770"
                },
                address: {
                    zip_code: "06233200",
                    street_name: "Av. das Na\u00e7\u00f5es Unidas",
                    street_number: "3003",
                    neighborhood: "Bonfim",
                    city: "Osasco",
                    federal_unit: "SP"
                }
            }
        }
    });
    resul = requestP.data;
    obj = {
        id: resul.id,
        user: currentAppUser,
        msgkey: nextAppUser,
        status: resul.status,
        valor: resul.transaction_amount,
        qrcode: resul.point_of_interaction.transaction_data.qr_code,
        link: resul.point_of_interaction.transaction_data.ticket_url,
        hora: m102,
        expira: Date.now() + expira
    };
    pedidos = await JSON.parse(fs.readFileSync(path.p));
    pedidos.push(obj);
    await fs.writeFileSync(path.p, JSON.stringify(pedidos));
    return obj;
}
/**
 * @param {?} leveeId
 * @return {?}
 */
async function verificar(leveeId) {
    var headers = {
        Authorization: "Bearer " + token
    };
    dados = await axios({
        method: "GET",
        url: "https://api.mercadopago.com/v1/payments/" + leveeId,
        headers: headers
    });
    resul = dados.data;
    var body = {
        id: resul.id,
        status: resul.status
    };
    return obj = body, obj;
}
/**
 * @param {?} leveeId
 * @return {?}
 */
async function cancelar(leveeId) {
    var headers = {
        Authorization: "Bearer " + token
    };
    dados = await axios({
        method: "PUT",
        url: "https://api.mercadopago.com/v1/payments/" + leveeId,
        data: {
            status: "cancelled"
        },
        headers: headers
    });
    resul = dados.data;
    var body = {
        id: resul.id,
        status: resul.status
    };
    return obj = body, obj;
}
var _0x1f7e39 = {};
/** @type {function(number): ?} */
_0x1f7e39.delay = delay;
/** @type {function(string, ?): ?} */
_0x1f7e39.gerar = gerar;
/** @type {function(?): ?} */
_0x1f7e39.verificar = verificar;
/** @type {function(?): ?} */
_0x1f7e39.cancelar = cancelar;
module.exports = _0x1f7e39;
/**
 * @param {string} event
 * @return {?}
 */
function _0x5790fb(event) {
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
    } catch (_0x3f7292) {
    }
}
;