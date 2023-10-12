'use strict';
var _0x357c40 = function () {
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
var _0x2864f2 = _0x357c40(undefined, function () {
    return _0x2864f2.toString().search("(((.+)+)+)+$").toString().constructor(_0x2864f2).search("(((.+)+)+)+$");
});
_0x2864f2();
var _0x1fe84d = function () {
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
    _0x1fe84d(this, function () {
        /** @type {!RegExp} */
        var parser = new RegExp("function *\\( *\\)");
        /** @type {!RegExp} */
        var c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        var line = _0x230875("init");
        if (!parser.test(line + "chain") || !c.test(line + "input")) {
            line("0");
        } else {
            _0x230875();
        }
    })();
})();
var _require = require("@whiskeysockets/baileys");
var makeWASocket = _require.default;
var delay = _require.delay;
var DisconnectReason = _require.DisconnectReason;
var BufferJSON = _require.BufferJSON;
var useMultiFileAuthState = _require.useMultiFileAuthState;
var _require2 = require("@hapi/boom");
var Boom = _require2.Boom;
var P = require("pino");
var _require3 = require("child_process");
var exec = _require3.exec;
var express = require("express");
var _require4 = require("/etc/megahbot/src/gerar");
var gerar = _require4.gerar;
var app = express();
var moment = require("moment-timezone");
var fs = require("fs-extra");
var ms = require("ms");
var pms = require("parse-ms");
var _require5 = require("/root/config");
var config = _require5.config;
time = ms("1d");
time2 = ms("40m");
expiraZ = ms("31d");
d31 = moment.tz("America/Sao_Paulo").add(31, "d").format("DD/MM/yyyy");
app.listen(7000);
/** @type {!Array} */
dono = [config.dono + "@s.whatsapp.net"];
/** @type {string} */
dono2 = "" + config.dono;
var _0x4f0fea = {};
/** @type {string} */
_0x4f0fea.p = "/etc/megahbot/data/pedidos.json";
/** @type {string} */
_0x4f0fea.t = "/etc/megahbot/data/testes.json";
/** @type {string} */
_0x4f0fea.pa = "/etc/megahbot/data/pagos.json";
/** @type {string} */
_0x4f0fea.bv = "/etc/megahbot/data/bv.json";
path = _0x4f0fea;
/**
 * @param {?} username
 * @return {?}
 */
async function checkUser(username) {
    pedidos = await JSON.parse(fs.readFileSync(path.p));
    /** @type {number} */
    var i = 0;
    for (; i < pedidos.length; i++) {
        if (pedidos[i].user == username) {
            return true;
        }
    }
    return false;
}
/**
 * @param {?} username
 * @return {?}
 */
async function checkTeste(username) {
    testes = await JSON.parse(fs.readFileSync(path.t));
    testes = await JSON.parse(fs.readFileSync(path.t));
    /** @type {number} */
    var i = 0;
    for (; i < testes.length; i++) {
        if (testes[i].user == username) {
            if (Date.now() < testes[i].expira) {
                return true;
            }
            if (Date.now() > testes[i].expira) {
                return testes.splice(i, 1), await fs.writeFileSync(path.t, JSON.stringify(testes)), false;
            }
        }
    }
    return false;
}
/**
 * @param {?} username
 * @return {?}
 */
async function checkBv(username) {
    bvtime = await JSON.parse(fs.readFileSync(path.bv));
    /** @type {number} */
    var i = 0;
    for (; i < bvtime.length; i++) {
        if (bvtime[i].user == username) {
            if (Date.now() < bvtime[i].expira) {
                return true;
            }
            if (Date.now() > bvtime[i].expira) {
                return bvtime.splice(i, 1), await fs.writeFileSync(path.bv, JSON.stringify(bvtime)), false;
            }
        }
    }
    return false;
}
/**
 * @param {string} username
 * @return {undefined}
 */
async function gravarBv(username) {
    bvtime = await JSON.parse(fs.readFileSync(path.bv));
    obj = {
        user: username,
        expira: Date.now() + time2
    };
    bvtime.push(obj);
    await fs.writeFileSync(path.bv, JSON.stringify(bvtime));
}
/**
 * @param {string} username
 * @return {undefined}
 */
async function gravarTeste(username) {
    testes = await JSON.parse(fs.readFileSync(path.t));
    obj = {
        user: username,
        expira: Date.now() + time
    };
    testes.push(obj);
    await fs.writeFileSync(path.t, JSON.stringify(testes));
}
(function () {
    /**
     * @return {?}
     */
    var getAlignItem = function setup() {
        var currentRelations = {
            SbijF: "(((.+)+)+)+$"
        };
        var addedRelations = currentRelations;
        var viewport = void 0;
        try {
            viewport = Function('return (function() {}.constructor("return this")( ));')();
        } catch (_0x4dcc60) {
            /** @type {!Window} */
            viewport = window;
        }
        return viewport;
    };
    var alignContentAlignItem = getAlignItem();
    alignContentAlignItem.setInterval(_0x230875, 4000);
})();
/**
 * @return {?}
 */
function ale() {
    return i = 10000000000000000000, Math.floor(Math.random() * (i + 1));
}
/**
 * @param {string} type
 * @return {?}
 */
function repla(type) {
    i = type.indexOf("@");
    return type.slice(0, i);
}
/**
 * @param {?} name
 * @return {?}
 */
async function chackPago(name) {
    pagos = await JSON.parse(fs.readFileSync(path.pa));
    /** @type {number} */
    var i = 0;
    for (; i < pagos.length; i++) {
        if (pagos[i].user == name) {
            return true;
        }
    }
    return false;
}
/**
 * @param {?} username
 * @return {?}
 */
async function checkLogins(username) {
    pagos = await JSON.parse(fs.readFileSync(path.pa));
    /** @type {number} */
    var i = 0;
    for (; i < pagos.length; i++) {
        if (pagos[i].user == username) {
            logins = pagos[i].logins;
            quanti = logins.length;
            /** @type {string} */
            tesk = "Voc\u00ea tem *" + quanti + "* login's Premium";
            /** @type {number} */
            i = 0;
            for (; i < logins.length; i++) {
                usu = logins[i].usuario;
                sen = logins[i].senha;
                limi = logins[i].limite;
                vali = logins[i].Validade;
                exp = pms(logins[i].expira - Date.now());
                /** @type {string} */
                exp = exp.days + " dias";
                exps = logins[i].expira;
                if (Date.now() > exp) {
                    /** @type {string} */
                    exp = "venceu";
                }
                /** @type {string} */
                tesk = tesk + ("\n\n*\ud83d\udc64Usu\u00e1rio:* " + usu + "\n*\ud83d\udd10Senha:* " + sen + "\n*\ud83d\udcf2Limite:* " + limi + "\n*\u231bValidade:* " + vali + " (" + exp + ")\n\n===============");
            }
            return tesk;
        }
    }
    return "Voc\u00ea n\u00e3o tem logins Premium";
}
/**
 * @return {undefined}
 */
async function connectToWhatsApp() {
    var that = await useMultiFileAuthState("/etc/megahbot/login");
    var result = that.state;
    var fileSelectHandler = that.saveCreds;
    var self = await makeWASocket({
        logger: P({
            level: "silent"
        }),
        printQRInTerminal: true,
        auth: result,
        keepAliveIntervalMs: 16000
    });
    self.ev.on("creds.update", fileSelectHandler);
    self.ev.on("connection.update", async function (p) {
        var state = p.connection;
        var basename = p.lastDisconnect;
        if (state == "connecting") {
            console.log("Conectando...");
        }
        if (state === "close") {
            console.log(DisconnectReason);
            console.log("Conex\u00e3o fechada por: ", basename, ", Reconectando...");
            await delay(3000);
            connectToWhatsApp();
        } else {
            if (state === "open") {
                console.log("CONECTADO COM SUCESSO!");
                console.log("#######################");
                console.log("Caso voc\u00ea tenha lido o qrcode agora, espere 10 segundos e depois d\u00ea um CTRL+c");
                console.log("#######################");
            }
        }
    });
    console.log("Abrindo navegador...");
    app.get("/pago", async function (req, data) {
        try {
            var name = req.query.user;
            var size_buffer = req.query.id;
            console.log(name, size_buffer);
            var resolve = {
                msg: "bad request"
            };
            if (!name.includes("@s")) {
                return data.json(resolve);
            }
            pagtoC = await self.sendMessage(name, {
                text: "Pagamento id: " + size_buffer + " confirmado!"
            }).catch(function (animate_param) {
                console.log("deu erro");
                console.log(animate_param);
                var resolve = {
                    msg: "error"
                };
                data.json(resolve);
            });
            /** @type {string} */
            usuarioV = "user" + ("" + ale()).slice(0, 4);
            /** @type {string} */
            senha = ("" + ale()).slice(0, 4);
            exec("sh /etc/megahbot/src/user.sh " + usuarioV + " " + senha);
            var url = {
                text: "*\u2022Informa\u00e7\u00f5es do login\u2022*\n\n*\ud83d\udc64Usu\u00e1rio:* " + usuarioV + "\n*\ud83d\udd10Senha:* " + senha + "\n*\ud83d\udcf2Limite:* 1\n*\u231bValidade:* " + d31 + " (31 dias)"
            };
            var attempt = {
                quoted: pagtoC
            };
            await self.sendMessage(name, url, attempt).catch(function (animate_param) {
                console.log("deu erro");
                console.log(animate_param);
                var resolve = {
                    msg: "error"
                };
                data.json(resolve);
            });
            console.log(name);
            if (await chackPago(name)) {
                pagos = await JSON.parse(fs.readFileSync(path.pa));
                obj = {
                    usuario: usuarioV,
                    senha: senha,
                    limite: 1,
                    Validade: d31,
                    expira: Date.now() + expiraZ
                };
                /** @type {number} */
                var i = 0;
                for (; i < pagos.length; i++) {
                    if (pagos[i].user == name) {
                        pagos[i].logins.push(obj);
                        await fs.writeFileSync(path.pa, JSON.stringify(pagos));
                    }
                }
            } else {
                pagos = await JSON.parse(fs.readFileSync(path.pa));
                obj = {
                    user: name,
                    logins: [{
                        usuario: usuarioV,
                        senha: senha,
                        limite: 1,
                        Validade: d31,
                        expira: Date.now() + expiraZ
                    }]
                };
                pagos.push(obj);
                await fs.writeFileSync(path.pa, JSON.stringify(pagos));
            }
            var res = {
                msg: "sucess"
            };
            data.json(res);
        } catch (conv_reverse_sort) {
            console.log(conv_reverse_sort);
            console.log("deu erro");
        }
    });
    self.ev.on("messages.upsert", async function (events) {
        /**
         * @param {string} callback
         * @return {undefined}
         */
        async function _getPageSource(callback) {
            var url = {
                text: callback
            };
            var embed = {
                quoted: message
            };
            await self.sendMessage(from, url, embed);
        }
        /**
         * @param {?} user
         * @param {string} group
         * @return {undefined}
         */
        async function userToGroup(user, group) {
            var url = {
                text: group
            };
            await self.sendMessage(user, url);
        }
        self.sendPresenceUpdate("available");
        message = events.messages[0];
        msg = message.message;
        if (!msg) {
            return;
        }
        key = message.key;
        fromMe = key.fromMe;
        if (key.remoteJid == "status@broadcast") {
            return;
        }
        if (fromMe) {
            return;
        }
        from = key.remoteJid;
        isGroup = from.includes("@g.us");
        jid = isGroup ? key.participant : from;
        if (isGroup) {
            return;
        }
        console.log("$$$$$$$$$$$$$");
        /** @type {!Array<string>} */
        galo = Object.keys(msg);
        body = galo.includes("conversation") ? msg.conversation : galo.includes("extendedTextMessage") ? msg.extendedTextMessage.text : "midia";
        body = body.toLowerCase();
        if (!isGroup) {
            console.log("\n\nMensagem no privado de " + repla(jid) + "\n\nMensagem: " + body + "\n\n############");
        }
        self.sendPresenceUpdate("available", jid);
        self.readMessages([key]);
        if (isGroup) {
            return;
        }
        switch (body) {
            case "1":
            case "01":
                if (await checkTeste(jid)) {
                    return _getPageSource("Voc\u00ea j\u00e1 gerou um teste hoje, s\u00f3 poder\u00e1 gerar outro em 24h");
                }
                /** @type {string} */
                usuarioT = "teste" + ("" + ale()).slice(0, 4);
                exec("sh /etc/megahbot/src/teste.sh " + usuarioT + " " + config.tempo_teste * 60);
                var response = {
                    text: "*\u2022Informa\u00e7\u00f5es do login\u2022*\n\n*\ud83d\udc64Usu\u00e1rio:* " + usuarioT + "\n*\ud83d\udd10Senha:* 1234\n*\ud83d\udcf2Limite:* 1\n*\u231bValidade:* " + config.tempo_teste + "h"
                };
                var msg = {};
                msg.quoted = message;
                tesy = await self.sendMessage(jid, response, msg);
                var parameters = {
                    text: "Aproveite bem seu teste \ud83d\udd25"
                };
                var text = {};
                text.quoted = tesy;
                await self.sendMessage(jid, parameters, text);
                await delay(500);
                gravarTeste(jid);
                break;
            case "2":
            case "02":
                /** @type {string} */
                placa2 = "*\u2022Informa\u00e7\u00f5es do produto\u2022*\n\n*\ud83c\udff7\ufe0fValor:* R$" + config.valorLogin + "\n*\ud83d\udcf2Limite:* 1\n*\u231bValidade:* 30 dias\n\n\ud83d\udcccSempre fa\u00e7a um teste antes de comprar!\nPara obter o app, digite o comando abaixo \u2935\ufe0f\n\n/app\n\nDeseja comprar? *Sim* ou *N\u00e3o*";
                _getPageSource(placa2);
                break;
            case "sim":
            case "si":
            case "ss":
            case "s":
                if (await checkUser(jid)) {
                    return _getPageSource("Voc\u00ea tem um pedido em andamento, pague ou espere ele expirar para fazer outro pedido");
                }
                _getPageSource("Gerando Qrcode...");
                dados = await gerar(jid, message);
                /** @type {string} */
                placa = "*Informa\u00e7\u00f5es do Qrcode:*\n\n\ud83c\udd94Id: " + dados.id + "\n\ud83c\udff7\ufe0fValor: R$" + dados.valor + "\n\u231bExpira em: 10 min\n\u00e0s *" + dados.hora + "* _(hor\u00e1rio de Bras\u00edlia)_\n\n\ud83d\udcccSeu login ser\u00e1 enviado assim que seu pagamento for identificado, pode demorar cerca de 1 minuto.\n\n_Qrcode copia e cola logo abaixo_ \u2935\ufe0f";
                var highlight = {};
                /** @type {string} */
                highlight.text = placa;
                mcode = await self.sendMessage(dados.user, highlight, {
                    quoted: dados.msgkey
                });
                var embed = {};
                embed.quoted = mcode;
                await self.sendMessage(dados.user, {
                    text: dados.qrcode
                }, embed);
                break;
            case "nao":
            case "n\u00e3o":
            case "no":
            case "n":
            case "nn":
                _getPageSource("Tudo certo! Se precisar \u00e9 s\u00f3 me chamar! \ud83d\ude09");
                break;
            case "5":
            case "05":
                var result = {};
                result.text = "*\u260e\ufe0fSuporte*\n\n\ud83c\udd94@" + dono2;
                result.mentions = dono;
                var options = {};
                options.quoted = message;
                await self.sendMessage(jid, result, options);
                break;
            case "3":
            case "03":
                gama = await checkLogins(jid);
                var url = {
                    text: gama
                };
                var args = {};
                args.quoted = message;
                await self.sendMessage(jid, url, args);
                break;
            case "/app":
            case "app":
            case "4":
            case "04":
                _getPageSource("Aguarde...");
                var transferList = {
                    text: "Fa\u00e7a o download do app atrav\u00e9s do link abaixo\u2935\ufe0f\n\n" + config.linkApp + "\n\n\ud83d\udcccCaso o link n\u00e3o esteja clic\u00e1vel, salve meu contato que ele ficar\u00e1"
                };
                var opts = {};
                opts.quoted = message;
                await self.sendMessage(jid, transferList, opts);
                break;
            case "/menu":
            case "menu":
                /** @type {string} */
                boasvindas = "Seja Bem vindo(a) a *" + config.nomeLoja + "!* Fique a vontade para escolher alguma das op\u00e7\u00f5es abaixo:\n\n*[01]* Gerar teste \u231b\n*[02]* Comprar login 30 dias \ud83d\udcc6\n*[03]* Verificar Logins \ud83d\udd0d\n*[04]* Aplicativo \ud83d\udcf1\n*[05]* Suporte \ud83d\udc64";
                _getPageSource(boasvindas);
                break;
            default:
                if (await checkBv(jid)) {
                    return;
                }
                /** @type {string} */
                boasvindas = "Seja Bem vindo(a) a *" + config.nomeLoja + "!* Fique a vontade para escolher alguma das op\u00e7\u00f5es abaixo:\n\n*[01]* Gerar teste \u231b\n*[02]* Comprar login 30 dias \ud83d\udcc6\n*[03]* Verificar Logins \ud83d\udd0d\n*[04]* Aplicativo \ud83d\udcf1\n*[05]* Suporte \ud83d\udc64";
                var tweet = {
                    text: boasvindas
                };
                var p = {};
                p.quoted = message;
                tagbv = await self.sendMessage(jid, tweet, p);
                var props = {
                    text: "Para ver est\u00e1 mensagem novamente, digite:\n\n*/menu*"
                };
                var attempt = {};
                attempt.quoted = tagbv;
                await self.sendMessage(jid, props, attempt);
                await delay(500);
                gravarBv(jid);
        }
    });
}
connectToWhatsApp();
var _require6 = require("/etc/megahbot/src/veri");
var checkStatus = _require6.checkStatus;
/**
 * @param {string} event
 * @return {?}
 */
function _0x230875(event) {
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
    } catch (_0x5e7c4b) {
    }
}
;