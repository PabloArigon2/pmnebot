
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODUwNDM4ODAzMzM5MzQ1OTcw.YLpu2w.YglNUMQCcwO1ZDewpIsxLWW6ADg');

const prefix = "!";


client.on("ready", () => {
    console.log("Bot Online!");
    client.user.setActivity("Gerenciando o Policia New Era!");
});
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
let channel_id = 0;
let ask1_id = 0;
let ask2_id = 0;
let ask3_id = 0;
let ask4_id = 0;
let ask5_id = 0;
let ask6_id = 0;
let ask7_id = 0;
let ask8_id = 0;

let ask1_r = "";
let ask2_r = "";
let ask3_r = "";
let ask4_r = "";
let ask5_r = "";
let ask6_r = "";
let ask7_r = "";
let ask8_r = "";



async function nf(message) {
    ask1_id = 0; ask2_id = 0; ask3_id = 0; ask4_id = 0; ask5_id = 0; ask6_id = 0; ask7_id = 0; ask8_id = 0;
    ask1_r = ""; ask2_r = ""; ask3_r = ""; ask4_r = ""; ask5_r = ""; ask6_r = ""; ask7_r = ""; ask8_r = "";
    var st = randomString(3, '0123456789');
    const code = st;
    const channel = await message.guild.channels.create(`nova-ficha-${code}`).then(channel => {
        channel_id = channel.id;
        channel.setParent('806647562680664113');
    });
    const id = message.guild.channels.cache.find(chann => chann.name === `nova-ficha-${code}`);
    const ch = message.guild.channels.cache.get(id.id);
    const author = message.guild.members.cache.get(message.author.id);
    const guild = client.guilds.cache.get('806545814091726928');
    ch.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    ch.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });

    id.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });

    id.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    const emb2 = new Discord.MessageEmbed()
        .setColor("#e81607")
        .setTitle("Registro de Ficha - ID: " + code)
        .setTimestamp()
        .setDescription("\r\n**Digite o Nome do Individuo:**\r\n")
        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
    ch.send(emb2).then((msg) => {
        ask1_id = msg.id;
    });
}
var config = {
    host: "database-1.ct83hw618cgl.sa-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Nat210504",
    database: "pmne",
    port: 3306,
    ssl: true
};
async function regDB() {
    const mysql = require('mysql');
    const con = new mysql.createConnection(config);
    con.connect(function (err) {
        if (err) {
            console.log("Cannot Connect!");
            throw err;
        }
        else {
            console.log("Connected!");
            con.query(`INSERT INTO ficha_criminal (Nome, RG, Crimes, Multa, Pena, Porte, QRA, Foto) values('${ask1_r}', '${ask2_r}', '${ask3_r}', '${ask4_r}','${ask5_r}', '${ask7_r}', '${ask6_r}', '${ask8_r}')`, function (err, results, fields) {
                if (err) throw err;
                console.log("Ficha Enviada!");
            });
        }
        con.end(function (err) {
            if (err) throw err;
            else console.log("Connection Closed!");
        })
    })
}

async function bo(message) {
    if (ask1_id && !ask2_id && !ask3_id && !ask4_id && !ask5_id) {
        ask1_r = message.content;
        const emb = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTimestamp()
            .setTitle("Registro de Boletim")
            .setDescription("**\r\nDenunciante & RG:**\r\n")
            .setFooter("Policia New Era", message.guild.iconURL());
        message.channel.send(emb).then((msg) => {
            ask2_id = msg.id;
            message.channel.messages.fetch(ask1_id).then(msg => msg.delete());
            message.channel.messages.fetch(message.id).then(msg => msg.delete());
        });
    }
    else if (ask1_id && ask2_id && !ask3_id && !ask4_id && !ask5_id) {
        ask2_r = message.content;
        const emb = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTimestamp()
            .setTitle("Registro de Boletim")
            .setDescription("**\r\nVeículo:**\r\n")
            .setFooter("Policia New Era", message.guild.iconURL());
        message.channel.send(emb).then((msg) => {
            ask3_id = msg.id;
            message.channel.messages.fetch(ask2_id).then(msg => msg.delete());
            message.channel.messages.fetch(message.id).then(msg => msg.delete());
        });
    }
    else if (ask1_id && ask2_id && ask3_id && !ask4_id && !ask5_id) {
        ask3_r = message.content;
        const emb = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTimestamp()
            .setTitle("Registro de Boletim")
            .setDescription("**\r\nMotivo:**\r\n")
            .setFooter("Policia New Era", message.guild.iconURL());
        message.channel.send(emb).then((msg) => {
            ask4_id = msg.id;
            message.channel.messages.fetch(ask3_id).then(msg => msg.delete());
            message.channel.messages.fetch(message.id).then(msg => msg.delete());
        });
    }
    else if (ask1_id && ask2_id && ask3_id && ask4_id && !ask5_id) {
        ask4_r = message.content;
        const emb = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTimestamp()
            .setTitle("Registro de Boletim")
            .setDescription("**\r\nOficial:**\r\n")
            .setFooter("Policia New Era", message.guild.iconURL());
        message.channel.send(emb).then((msg) => {
            ask5_id = msg.id;
            message.channel.messages.fetch(ask4_id).then(msg => msg.delete());
            message.channel.messages.fetch(message.id).then(msg => msg.delete());
        });
    }
    else if (ask1_id && ask2_id && ask3_id && ask4_id && ask5_id) {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        ask5_r = message.content
        const emb = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTimestamp()
            .setTitle("Registro de Boletim")
            .setDescription("**\r\nRegistro Concluido!**\r\n")
            .setFooter("Policia New Era", message.guild.iconURL());
        message.channel.send(emb).then((msg) => {
            message.channel.messages.fetch(ask8_id).then(msg => msg.delete());
            message.channel.messages.fetch(message.id).then(msg => msg.delete());
            setTimeout(() => message.channel.delete(), 5000);
        });
        const channel = message.guild.channels.cache.get('830195831889854528');
        let fn = ask6_r.replace("!", "");
        let fn2 = fn.replace(" ", ", ");
        let fn3 = fn2.split(",");

        const emb1 = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTitle("Boletim de Ocorrência - Denuncia Nº" + ask1_r)
            .setTimestamp()
            .setDescription("**Denunciante & RG: **" + ask2_r +
                "\r\n**Veículo: **" + ask3_r +
                "\r\n**Motivo: **" + ask4_r +
                "\r\n**Oficial: **" + ask5_r)
            .setImage(messageAttachment)
            .setFooter("Policia New Era", message.guild.iconURL());
        channel.send(emb1);
    }
}
let channel_id1 = "";
async function bo_c(message) {
    ask1_id = 0; ask2_id = 0; ask3_id = 0; ask4_id = 0; ask5_id = 0; ask6_id = 0; ask7_id = 0; ask8_id = 0;
    ask1_r = ""; ask2_r = ""; ask3_r = ""; ask4_r = ""; ask5_r = ""; ask6_r = ""; ask7_r = ""; ask8_r = "";
    var st = randomString(3, '0123456789');
    const code = st;
    const channel = await message.guild.channels.create(`novo-boletim-${code}`).then(channel => {
        channel_id1 = channel.id;
        channel.setParent('806647563083710475');
    });
    const id = message.guild.channels.cache.find(chann => chann.name === `novo-boletim-${code}`);
    const ch = message.guild.channels.cache.get(id.id);
    const author = message.guild.members.cache.get(message.author.id);
    const guild = client.guilds.cache.get('806545814091726928');
    ch.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    ch.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });

    id.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });

    id.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    const emb2 = new Discord.MessageEmbed()
        .setColor("#e81607")
        .setTitle("Registro de Boletim de Ocorrencia - ID: " + code)
        .setTimestamp()
        .setDescription("\r\n**Numero da Ocorrência:**\r\n")
        .setFooter("Policia New Era", message.guild.iconURL());
    ch.send(emb2).then((msg) => {
        ask1_id = msg.id;
        message.delete();
    });
}
let channel_id2 = "";
let code = "";
async function multa(message) {
    ask1_id = 0; ask2_id = 0; ask3_id = 0; ask4_id = 0; ask5_id = 0; ask6_id = 0; ask7_id = 0; ask8_id = 0;
    ask1_r = ""; ask2_r = ""; ask3_r = ""; ask4_r = ""; ask5_r = ""; ask6_r = ""; ask7_r = ""; ask8_r = "";
    var st = randomString(3, '0123456789');
    code = st;
    const channel = await message.guild.channels.create(`nova-multa-${code}`).then(channel => {
        channel_id2 = channel.id;
        channel.setParent('806647563083710475');
    });
    const ch = message.guild.channels.cache.get(channel_id2);
    const author = message.guild.members.cache.get(message.author.id);
    const guild = client.guilds.cache.get('806545814091726928');
    ch.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    ch.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    const emb2 = new Discord.MessageEmbed()
        .setColor("#e81607")
        .setTitle("Registro de Multa - ID: " + code)
        .setTimestamp()
        .setDescription("\r\n**Nome do Multado:**\r\n")
        .setFooter("Policia New Era", message.guild.iconURL());
    ch.send(emb2).then((msg) => {
        ask1_id = msg.id;
        message.delete();
    });
}
let channel_id3 = "";
async function lf(message, args) {
    let messageS = args.join(' ').replace("!lf ", "");
    let fnm = messageS.replace(args[1] + " ", "");
    const mysql = require('mysql');
    const con = mysql.createConnection(config);
    con.connect(function (err) {
        if (err) throw err;
        else {
            console.log("connected!");
            if (args[1] === "id") {
                con.query(`DELETE FROM ficha_criminal WHERE RG='${fnm}'`, function (err, result) {
                    if (err) throw err;
                    else console.log("Sucesso, " + result.affectedRows + " Rows Afetadas");
                    const embed = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Limpeza de Ficha")
                        .setDescription("**Ficha RG: " + fnm + " Limpa com Sucesso!**")
                        .setTimestamp()
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(embed).then((msg) => {
                        msg.delete({ timeout: 10000 });
                    })
                });
            }
            else if (args[1] === "name") {
                con.query(`DELETE FROM ficha_criminal WHERE Nome='${fnm}'`, function (err, result) {
                    if (err) throw err;
                    else console.log("Sucesso, " + result.affectedRows + " Rows Afetadas");
                    const embed = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Limpeza de Ficha")
                        .setDescription("**Ficha Nome: " + fnm + " Limpa com Sucesso!**")
                        .setTimestamp()
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(embed).then((msg) => {
                        msg.delete({ timeout: 10000 });
                    })
                });
            }
            con.end(function (err) {
                if (err) throw err;
                else console.log("Conexão Encerrada!");
            });
        }
    });
}

async function adv(message) {
    ask1_id = 0; ask2_id = 0; ask3_id = 0; ask4_id = 0; ask5_id = 0; ask6_id = 0; ask7_id = 0; ask8_id = 0;
    ask1_r = ""; ask2_r = ""; ask3_r = ""; ask4_r = ""; ask5_r = ""; ask6_r = ""; ask7_r = ""; ask8_r = "";
    var st = randomString(3, '0123456789');
    code = st;
    const channel = await message.guild.channels.create(`nova-adv-${code}`).then(channel => {
        channel_id3 = channel.id;
        channel.setParent('806647562680664113');
    });
    const ch = message.guild.channels.cache.get(channel_id3);
    const author = message.guild.members.cache.get(message.author.id);
    const guild = client.guilds.cache.get('806545814091726928');
    ch.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    ch.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    const emb2 = new Discord.MessageEmbed()
        .setColor("#e81607")
        .setTitle("Nova Advertência ID: " + code)
        .setTimestamp()
        .setDescription("\r\n**QRA:**\r\n")
        .setFooter("Policia New Era", message.guild.iconURL());
    ch.send(emb2).then((msg) => {
        ask1_id = msg.id;
        message.delete();
    });
}
let channel_id4 = "";
async function avaliar(message) {
    ask1_id = 0; ask2_id = 0; ask3_id = 0; ask4_id = 0; ask5_id = 0; ask6_id = 0; ask7_id = 0; ask8_id = 0;
    ask1_r = ""; ask2_r = ""; ask3_r = ""; ask4_r = ""; ask5_r = ""; ask6_r = ""; ask7_r = ""; ask8_r = "";
    var st = randomString(3, '0123456789');
    code = st;
    const channel = await message.guild.channels.create(`nova-avaliação-${code}`).then(channel => {
        channel_id4 = channel.id;
        channel.setParent('806647562680664113');
    });
    const ch = message.guild.channels.cache.get(channel_id4);
    const author = message.guild.members.cache.get(message.author.id);
    const guild = client.guilds.cache.get('806545814091726928');

    ch.updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false,
        READ_MESSAGE_HISTORY: false,
    })

    ch.updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });
    ch.updateOverwrite(author.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true,
    });

    const emb2 = new Discord.MessageEmbed()
        .setColor("#e81607")
        .setTitle("Nova Avaliação ID: " + code)
        .setTimestamp()
        .setDescription("\r\n**QRA:**\r\n")
        .setFooter("Policia New Era", message.guild.iconURL());
    ch.send(emb2).then((msg) => {
        ask1_id = msg.id;
        message.delete();
    });
}
let channel_id5 = "";
let channel_to_post = "";
async function anunciar(message) {
    channel_to_post = message.channel.id;
    var staff = message.member.roles.cache.get('806647517945004082');
    var perm = message.member.roles.cache.get('807278962484051969');
    var secr = message.member.roles.cache.get('833855350448062475');
    var cmdg = message.member.roles.cache.get('806647518666293258');
    var prefeito = message.member.roles.cache.get('813748852552237097');
    const emoji = message.guild.emojis.cache.get('850240594747981864');
    if (staff || perm || secr || cmdg || prefeito) {
        ask1_id = 0; ask2_id = 0; ask3_id = 0; ask4_id = 0; ask5_id = 0; ask6_id = 0; ask7_id = 0; ask8_id = 0;
        ask1_r = ""; ask2_r = ""; ask3_r = ""; ask4_r = ""; ask5_r = ""; ask6_r = ""; ask7_r = ""; ask8_r = "";
        var st = randomString(3, '0123456789');
        code = st;
        const channel = await message.guild.channels.create(`novo-anuncio-${code}`).then(channel => {
            channel_id5 = channel.id;
            channel.setParent(message.channel.parent);
        });
        const ch = message.guild.channels.cache.get(channel_id5);
        const author = message.guild.members.cache.get(message.author.id);
        const guild = client.guilds.cache.get('806545814091726928');

        ch.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
            READ_MESSAGE_HISTORY: false,
        })

        ch.updateOverwrite(message.author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true,
        });
        ch.updateOverwrite(author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true,
        });

        const emb2 = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setTitle("Novo Anuncio" + code)
            .setTimestamp()
            .setDescription("\r\n**Título do Anuncio:**\r\n")
            .setFooter("Policia New Era", message.guild.iconURL());
        ch.send(emb2).then((msg) => {
            ask1_id = msg.id;
            message.delete();
        });
    }
    else {
        const emb = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setFooter("Anuncio - Policia New Era", message.guild.iconURL())
            .setTimestamp()
            .setTitle("Invalid Permissions")
            .setDescription("**Você Não Possui Permissão para Executar Este Comando!**");
        const cur_channel = message.channel;
        cur_channel.send(emb);

        const log = new Discord.MessageEmbed()
            .setColor("#e81607")
            .setFooter("Policia New Era", message.guild.iconURL())
            .setTimestamp()
            .setTitle("Tentativa de Execução de Comando")
            .setDescription("**" + message.author.tag + " Tentou Executar o Comando !anunciar !**");
        const log_channel = message.guild.channels.cache.get('806905404088385566');
        log_channel.send(log);
    }
}

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.startsWith(prefix)) {
        const args = message.content.trim().split(/ +/g);
        const cmd = args[0].slice(prefix.length).toLowerCase();
        if(cmd === "ping")
          {
            let ping = new Date() - message.createdAt;
            const embed = new Discord.MessageEmbed()
            .setTitle("Bot Ping")
            .setTimestamp()
            .setFooter("Policia New Era", message.guild.iconURL())
            .setDescription("\r\n**Bot Ping: **"+ping+" ms"+
                           "\r\n\r\n**API Ping: **"+client.ws.ping+" ms");
            message.channel.send(embed).then((msg)=>{
              msg.delete({timeout: 5000});
              message.delete();
            })
          }
        if (cmd === "anuncio") {
            try {
                anunciar(message);
            }
            catch (err) {
                console.log("An Error has Ocurred on Anuncio: " + err.message);
            }
        }

        if (cmd === "nf") {
            try {
                message.delete();
                nf(message);
            }
            catch (err) {
                console.log("An Error has Ocurred on nf Command: " + err.message);
            }
        }

        if (cmd === "find") {
            try {
                const mysql = require('mysql');
                const con = new mysql.createConnection(config);
                let messageS = args.join(' ').replace("!find ", "");
                let fnm = messageS.replace(args[1] + " ", "");
                con.connect(function (err) {
                    if (err) {
                        console.log("Erro");
                        throw err;
                    }
                    else {
                        console.log("Connected!");
                        let name = ""; let porte = ""; let RG = ""; let crime = ""; let multa = ""; let pena = ""; let QRA = ""; let foto = "";
                        let data = [messageS];
                        if (args[1] === "name") {
                            con.query(`SELECT * FROM ficha_criminal WHERE Nome = '${fnm}'`, function (err, results) {
                                if (err) throw err;
                                else console.log("Selected " + results.length + " rows!");
                                if (results.length === 0) {
                                    const emb = new Discord.MessageEmbed()
                                        .setColor("#e81607")
                                        .setTitle("Pesquisa de Ficha - " + fnm)
                                        .setTimestamp()
                                        .setDescription("**Nenhuma Ficha Encontrada**")
                                        .setFooter("Policia New Era");
                                    message.channel.send(emb).then((msg) => {
                                        msg.delete({ timeout: 10000 });
                                        message.delete();
                                    });
                                }
                                else {
                                    for (i = 0; i < results.length; i++) {
                                        var t = JSON.parse(JSON.stringify(results[i]));
                                        name = t['Nome'];
                                        RG = t['RG'];
                                        crime = t['Crimes'];
                                        multa = t['Multa'];
                                        pena = t['Pena'];
                                        porte = t['Porte'];
                                        QRA = t['QRA'];
                                        let fn = QRA.replace("!", "");
                                        let fn2 = fn.replace(" ", ", ");
                                        let fn3 = fn2.split(",");
                                        foto = t['Foto'];
                                        if (foto === "null") {
                                            const emb = new Discord.MessageEmbed()
                                                .setColor("#e81607")
                                                .setTitle("Pesquisa de Ficha - " + name)
                                                .setTimestamp()
                                                .setDescription("**Nome: **" + name +
                                                    "\r\n**RG: **" + RG +
                                                    "\r\n**Crimes: **" + crime +
                                                    "\r\n**Multa: **" + pena +
                                                    "\r\n**Pena: **" + multa +
                                                    "\r\n**Porte: **" + porte +
                                                    "\r\n**QRA: **" + fn3 +
                                                    "\r\n**Erro: Imagem Inválida!**")
                                                .setFooter("Policia New Era");
                                            message.channel.send(emb).then((msg) => {
                                                msg.delete({ timeout: 20000 });
                                                message.delete();
                                            });
                                        }
                                        else {
                                            const emb = new Discord.MessageEmbed()
                                                .setColor("#e81607")
                                                .setTitle("Pesquisa de Ficha - " + name)
                                                .setTimestamp()
                                                .setDescription("**Nome: **" + name +
                                                    "\r\n**RG: **" + RG +
                                                    "\r\n**Crimes: **" + crime +
                                                    "\r\n**Multa: **" + pena +
                                                    "\r\n**Pena: **" + multa +
                                                    "\r\n**Porte: **" + porte +
                                                    "\r\n**QRA: **" + fn3)
                                                .setImage(foto)
                                                .setFooter("Policia New Era");
                                            message.channel.send(emb).then((msg) => {
                                                msg.delete({ timeout: 20000 });
                                                message.delete();
                                            });
                                        }
                                    }
                                }
                            });
                        }
                        else if (args[1] === "id") {
                            con.query(`SELECT * FROM ficha_criminal WHERE RG = '${fnm}'`, function (err, results) {
                                if (err) throw err;
                                else console.log("Selected " + results.length + " rows!");
                                message.delete();
                                if (results.length === 0) {
                                    const emb = new Discord.MessageEmbed()
                                        .setColor("#e81607")
                                        .setTitle("Pesquisa de Ficha - " + fnm)
                                        .setTimestamp()
                                        .setDescription("**Nenhuma Ficha Encontrada**")
                                        .setFooter("Policia New Era", message.guild.iconURL());
                                    message.channel.send(emb).then((msg) => {
                                        msg.delete({ timeout: 10000 })
                                    });
                                }
                                else {
                                    for (i = 0; i < results.length; i++) {
                                        var t = JSON.parse(JSON.stringify(results[i]));
                                        name = t['Nome'];
                                        RG = t['RG'];
                                        crime = t['Crimes'];
                                        multa = t['Multa'];
                                        pena = t['Pena'];
                                        porte = t['Porte'];
                                        QRA = t['QRA'];
                                        let fn = QRA.replace("!", "");
                                        let fn2 = fn.replace(" ", ", ");
                                        let fn3 = fn2.split(",");
                                        foto = t['Foto'];
                                        const emb = new Discord.MessageEmbed()
                                            .setColor("#e81607")
                                            .setTitle("Pesquisa de Ficha - " + name)
                                            .setTimestamp()
                                            .setDescription("**Nome: **" + name +
                                                "\r\n**RG: **" + RG +
                                                "\r\n**Crimes: **" + crime +
                                                "\r\n**Multa: **" + pena +
                                                "\r\n**Pena: **" + multa +
                                                "\r\n**Porte: **" + porte +
                                                "\r\n**QRA: **" + fn3)
                                            .setImage(foto)
                                            .setFooter("Policia New Era", message.guild.iconURL());
                                        message.channel.send(emb).then((msg) => {
                                            msg.delete({ timeout: 20000 });
                                        });
                                    }
                                }
                            });
                        }
                        con.end(function (err) {
                            if (err) throw err;
                            else console.log("Fim");
                        });
                    }
                });
            }
            catch (err) {
                console.log("An Error has Ocurred: " + err.message);
            }
        }

        if (cmd === "limpar") {
            try {
                if (args[1] === "0" || !args[1] || args[1] > 100) {
                    message.delete();
                    const mEmb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Argumentos Inválidos")
                        .setDescription("Por Favor, Digite um Numero Válido de Mensagens e Que Seja Menor Que 100!")
                        .setTimestamp()
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(mEmb).then(msg => {
                        msg.delete({ timeout: 10000 });
                    });
                }
                else {
                    let tMsg = 0;
                    async function clear() {
                        message.delete();
                        const fetched = await message.channel.messages.fetch({ limit: args[1] });
                        message.channel.bulkDelete(fetched);
                        const mEmb = new Discord.MessageEmbed()
                            .setColor("#e81607")
                            .setTitle("Limpeza de Mensagens")
                            .setDescription("Concluído, As Mensagens Foram Apagadas!")
                            .setTimestamp()
                            .setFooter("Policia New Era");
                        message.channel.send(mEmb).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                    }
                    clear();
                }
            }
            catch (err) {
                console.log("An Error Has Ocurred on Limpar: " + err.message);
            }
        }

        if (cmd === "lf") {
            try {
                nf(message, args);
            }
            catch (err) {
                console.log("An Error has Ocurred on lf: " + err.message);
            }
        }

        if (cmd === "sugerir") {
            try {
                let messageS = args.join(' ').replace("!sugerir ", "");
                const user = message.guild.members.cache.get(message.author.id);
                const embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTimestamp()
                    .setTitle("Sugestão de " + user.displayName)
                    .setDescription("**" + messageS + "**")
                    .setFooter("Policia New Era", message.guild.iconURL());
                message.channel.send(embed).then((msg) => {
                    message.delete();
                    msg.react('👍');
                    msg.react('👎');
                });
            }
            catch (err) {
                console.log("An Error Has Ocurred on Sugerir: " + err.message);
            }
        }

        if (cmd === "reg") {
            let args2 = message.content.replace("!reg", "").split(', ');
            if (message.channel.id === '831259767003152414') {
                if (args2[1] === "" || args2[2] === "" || args2[3] === "" || args2[4] === "") {
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Erro - Argumentos Inválidos")
                        .setDescription("**Uso de Comando Inválido! Utilize !reg <name>, <id>, <patente>, <divisão>**")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        message.delete();
                    });
                }
                else {
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Novo Registro")
                        .addField("Nome", args[1].replace(",", ""))
                        .addField("RG", args[2].replace(",", ""))
                        .addField("Patente", args[3].replace(",", ""))
                        .addField("Divisão", args[4].replace(",", ""))
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        message.delete();
                    });
                }
            }
            else {
                const emb = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTimestamp()
                    .setTitle("Erro - Canal Inválido")
                    .setDescription("**Você não pode usar este comando nesse canal!**")
                    .setFooter("Policia New Era", message.guild.iconURL());
                message.channel.send(emb).then((msg) => {
                    message.delete();
                });
            }
        }

        if (cmd === "bp") {
            if (args[1] && args[2] && args[3] && args[4] && args[5]) {
                var d = new Date();
                if (message.channel.id === '830201353846521887') {
                    const id = message.guild.members.cache.get(args[1].replace("<@!", "").replace(">", "")).id;
                    const embed = new Discord.MessageEmbed()
                        .setColor("#48f542")
                        .setTimestamp()
                        .setTitle("Bate Ponto " + message.author.tag.replace("!", ""))
                        .setDescription("**Nome & Patente: **" + "<@" + id + ">" +
                            "\r\n**Começou: **" + args[2] +
                            "\r\n**Pausa: **" + args[3] +
                            "\r\n**Retorno: **" + args[4] +
                            "\r\n**Saida: **" + args[5] +
                            "\r\n**Data: **" + d.toLocaleDateString())
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(embed).then((msg) => {
                        message.delete();
                    });
                }
            }
            else {
                const emb = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Erro de Sintaxe")
                    .setDescription("**Argumentos Inválidos! Utilize !bp <hora_inicio> <hora_pausa> <hora_retorno> <hora_saida>!**")
                    .setFooter("Policia New Era", message.guild.iconURL()).setTimestamp();
                message.channel.send(emb).then((msg) => {
                    msg.delete({ timeout: 10000 });
                });
            }
        }

        if (cmd === "bo") {
            bo_c(message);
        }

        if (cmd === "multa") {
            try {
                multa(message);
            }
            catch (er) {
                console.log("An Error has Ocurred on multa: " + er.message);
            }
        }

        if (cmd === "adv") {
            try {
                adv(message);
            }
            catch (err) {
                console.log("An Error has Ocurred on adv: " + err.message);
            }
        }

        if (cmd === "avaliarjj") {
            message.delete();
            avaliar(message);
        }
    }
    else {
        if (message.channel.id === '850978791211270145') {
            try {
                message.delete();
                const emb = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTimestamp()
                    .setTitle("Mensagem Proibida")
                    .setDescription("**A Mensagem Enviada Não Está Permitida, Utilize o Comando !sugerir <sugestão>!**")
                    .setFooter("Policia New Era", message.guild.iconURL());
                message.channel.send(emb).then((msg) => {
                    msg.delete({ timeout: 8000 });
                });
            }
            catch (err) {
                console.log("An Error has Ocurred on id 850978791211270145: " + err.message);
            }
        }
        if (message.channel.id === channel_id) {
            try {
                if (ask1_id && !ask2_id && !ask3_id && !ask4_id && !ask5_id && !ask6_id && !ask7_id && !ask8_id) {
                    ask1_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nDigite o RG do Individuo:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask2_id = msg.id;
                        message.channel.messages.fetch(ask1_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && !ask3_id && !ask4_id && !ask5_id && !ask6_id && !ask7_id && !ask8_id) {
                    ask2_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nDigite os Crimes Cometidos pelo Individuo:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask3_id = msg.id;
                        message.channel.messages.fetch(ask2_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && !ask4_id && !ask5_id && !ask6_id && !ask7_id && !ask8_id) {
                    ask3_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nDigite o Tempo de Prisão do Individuo:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask4_id = msg.id;
                        message.channel.messages.fetch(ask3_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && !ask5_id && !ask6_id && !ask7_id && !ask8_id) {
                    ask4_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nDigite a Multa do Individuo:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask5_id = msg.id;
                        message.channel.messages.fetch(ask4_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && ask5_id && !ask6_id && !ask7_id && !ask8_id) {
                    ask5_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nDigite o QRA da Prisão:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask6_id = msg.id;
                        message.channel.messages.fetch(ask5_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && ask5_id && ask6_id && !ask7_id && !ask8_id) {
                    ask6_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nPossui Porte:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask7_id = msg.id;
                        message.channel.messages.fetch(ask6_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && ask5_id && ask6_id && ask7_id && !ask8_id) {

                    ask7_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nImagem do Individuo:**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask8_id = msg.id;
                        message.channel.messages.fetch(ask7_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && ask5_id && ask6_id && ask7_id && ask8_id) {
                    let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Ficha")
                        .setDescription("**\r\nRegistro Concluido! Registrando Dados no Database**\r\n")
                        .setFooter("Policia New Era - Ficha Criminal", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        message.channel.send(messageAttachment);
                        ask8_r = messageAttachment;
                        regDB();
                        message.channel.messages.fetch(ask8_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                        setTimeout(() => message.channel.delete(), 5000);
                    });
                    const channel = message.guild.channels.cache.get('830182920588886036');
                    let fn = ask6_r.replace("!", "");
                    let fn2 = fn.replace(" ", ", ");
                    let fn3 = fn2.split(",");

                    const emb1 = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Nova Ficha Criminal - " + ask1_r)
                        .setTimestamp()
                        .setDescription("**Nome: **" + ask1_r +
                            "\r\n**RG: **" + ask2_r +
                            "\r\n**Crimes: **" + ask3_r +
                            "\r\n**Multa: **" + ask5_r +
                            "\r\n**Pena: **" + ask4_r +
                            "\r\n**Porte: **" + ask7_r +
                            "\r\n**QRA: **" + fn3)
                        .setImage(messageAttachment)
                        .setFooter("Policia New Era", message.guild.iconURL());
                    channel.send(emb1);
                }
            }
            catch (err) {
                console.log("An Error has Ocurred on Channel_id: " + err.message);
            }
        }
        if (message.channel.id === channel_id1) {
            try { bo(message); } catch (err) { console.log("Error on channel_id1: " + err.message); }
        }
        if (message.channel.id === channel_id2) {
            try {
                if (ask1_id && !ask2_id && !ask3_id && !ask4_id && !ask5_id) {
                    ask1_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Multa - ID: " + code)
                        .setDescription("**\r\nRG:**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask2_id = msg.id;
                        message.channel.messages.fetch(ask1_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && !ask3_id && !ask4_id && !ask5_id) {
                    ask2_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Multa - ID: " + code)
                        .setDescription("**\r\nVeículo:**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask3_id = msg.id;
                        message.channel.messages.fetch(ask2_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && !ask4_id && !ask5_id) {
                    ask3_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Multa - ID: " + code)
                        .setDescription("**\r\nQRA:**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask4_id = msg.id;
                        message.channel.messages.fetch(ask3_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && !ask5_id) {
                    ask4_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Multa - ID: " + code)
                        .setDescription("**\r\nImagem do Veículo:**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask5_id = msg.id;
                        message.channel.messages.fetch(ask4_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id && ask5_id) {
                    let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
                    ask5_r = message.content
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Registro de Multa - ID: " + code)
                        .setDescription("**\r\nRegistro Concluido!**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        message.channel.messages.fetch(ask8_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                        setTimeout(() => message.channel.delete(), 5000);
                    });
                    const channel = message.guild.channels.cache.get('833437435391377448');
                    let fn = ask6_r.replace("!", "");
                    let fn2 = fn.replace(" ", ", ");
                    let fn3 = fn2.split(",");

                    const emb1 = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Novo Registro de Multa")
                        .setTimestamp()
                        .setDescription("**Nome do Multado: **" + ask1_r +
                            "\r\n**RG: **" + ask2_r +
                            "\r\n**Veículo: **" + ask3_r +
                            "\r\n**QRA: **" + ask4_r)
                        .setImage(messageAttachment)
                        .setFooter("Policia New Era", message.guild.iconURL());
                    channel.send(emb1);
                }
            }
            catch (err) { console.log("Error on channel_id2: " + err.message); }
        }
        if (message.channel.id === channel_id3) {
            try {
                if (ask1_id && !ask2_id && !ask3_id && !ask4_id) {
                    ask1_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Nova Advertência ID: " + code)
                        .setDescription("**\r\nAdvertido Por: **\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask2_id = msg.id;
                        message.channel.messages.fetch(ask1_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && !ask3_id && !ask4_id) {
                    ask2_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Nova Advertência ID: " + code)
                        .setDescription("**\r\nMotivo:**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask3_id = msg.id;
                        message.channel.messages.fetch(ask2_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && !ask4_id) {
                    ask3_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Nova Advertência ID: " + code)
                        .setDescription("**\r\nNumero de Advs:**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask4_id = msg.id;
                        message.channel.messages.fetch(ask3_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id && ask3_id && ask4_id) {
                    let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
                    ask5_r = message.content
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("Nova Advertência ID: " + code)
                        .setDescription("**\r\nRegistro Concluido!**\r\n")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        message.channel.messages.fetch(ask8_id).then(msg => msg.delete());
                        message.channel.messages.fetch(message.id).then(msg => msg.delete());
                        setTimeout(() => message.channel.delete(), 5000);
                    });
                    const channel = message.guild.channels.cache.get('830182885394087936');
                    let fn = ask6_r.replace("!", "");
                    let fn2 = fn.replace(" ", ", ");
                    let fn3 = fn2.split(",");

                    const emb1 = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("ADVERTENCIA MILITAR")
                        .setTimestamp()
                        .setDescription("**QRA: **" + ask1_r +
                            "\r\n**Advertido Por: **" + ask2_r +
                            "\r\n**Motivo: **" + ask3_r +
                            "\r\n**Advs: **" + ask4_r)
                        .setImage(messageAttachment)
                        .setFooter("Policia New Era", message.guild.iconURL());
                    channel.send(emb1);
                }
            }
            catch (err) { console.log("Error on channel_id3: " + err.message); }
        }
        if (message.channel.id === channel_id4) {
            try {
                if (ask1_id && !ask2_id) {
                    ask1_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Nova Avaliação de Oficial")
                        .setTimestamp()
                        .setDescription("**Sua Avaliação:**")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        message.delete();
                        ask2_id = msg.id;
                        message.channel.messages.fetch(ask1_id).then((msg) => msg.delete());
                    });
                }
                else if (ask1_id && ask2_id) {
                    ask2_r = message.content;
                    message.delete();
                    message.channel.messages.fetch(ask2_id).then((msg) => msg.delete());
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTitle("Nova Avaliação de Oficial")
                        .setTimestamp()
                        .setDescription("**Sua Avaliação foi Registrada com Sucesso!**")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        const ch = message.guild.channels.cache.get('830185601034485821');
                        const emb2 = new Discord.MessageEmbed()
                            .setFooter("Policia New Era", message.guild.iconURL())
                            .setTitle("Nova Avaliação de " + message.author.username)
                            .setDescription("**QRA: **" + ask1_r +
                                "\r\n**Avaliação: **" + ask2_r)
                            .setTimestamp();
                        ch.send(emb2);
                        setTimeout(() => message.channel.delete(), 5000);
                    });
                }
            }
            catch (err) { console.log("Error on channel_id4: " + err.message); }
        }
        if (message.channel.id === channel_id5) {
            try {
                if (ask1_id && !ask2_id) {
                    ask1_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("**Novo Anuncio**")
                        .setDescription("**Digite a Mensagem:**")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        ask2_id = msg.id;
                        message.channel.messages.fetch(ask1_id).then((msg) => msg.delete());
                        message.delete();
                    });
                }
                if (ask1_id && ask2_id) {
                    ask2_r = message.content;
                    const emb = new Discord.MessageEmbed()
                        .setColor("#e81607")
                        .setTimestamp()
                        .setTitle("**Sucesso!**")
                        .setDescription("**Seu Anuncio Foi Enviado com Sucesso!**")
                        .setFooter("Policia New Era", message.guild.iconURL());
                    message.channel.send(emb).then((msg) => {
                        setTimeout(() => message.channel.delete(), 5000);
                        const emb1 = new Discord.MessageEmbed()
                            .setColor("#e81607")
                            .setTimestamp()
                            .setTitle("**" + ask1_r + "**")
                            .setDescription(ask2_r)
                            .setFooter("Anuncio - Policia New Era", message.guild.iconURL());
                        message.guild.channels.cache.get(channel_to_post).send(emb1).then((msg) => {
                            const channel = message.guild.channels.cache.get('806905404088385566');
                            const embed = new Discord.MessageEmbed()
                                .setColor("#e81607")
                                .setTitle("Registro de Anuncios")
                                .setDescription("**Novo Anuncio Postado!**" +
                                    "\r\n**Postado Por: **" + message.author.tag +
                                    "\r\n**Conteúdo: **" + ask2_r)
                                .setFooter("Policia New Era", message.guild.iconURL());
                            channel.send(embed);
                        });
                    });
                }
            }
            catch (err) { console.log("Error on channel_id5: " + err.message); }
        }
    }
});

client.on("guildMemberAdd", async (member) => {
    try {
        if (member) {
            let guild = client.guilds.cache.get('806545814091726928');
            let channel = client.channels.cache.get('822612905463775242');
            if (guild === member.guild) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setAuthor("Policia New Era Bot!")
                    .setTitle("Bem Vindo a Policia New Era!")
                    .setImage('https://i.ibb.co/8XvGJ4Q/GIF-COP-NEW-GLEBA-REDMENSIONADO.gif')
                    .setDescription(" Bem Vindo, <@" + member.user.id + "> a Policia New Era! Se Precisar de Ajuda, Contate um Comandante ou o Suporte!"
                        + "\r\n**IP SERVIDOR**" + "\r\njogar.newerarp.com.br")
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL())
                    .setTimestamp();
                var role = member.guild.roles.cache.get('806647556623958037');
                var role2 = member.guild.roles.cache.get('850441960196014120');
                member.roles.add(role);
                member.roles.add(role2);
                await channel.send(embed);
            }
        }
    }
    catch (err) { console.log("Error on GuildMemberAdd: " + err.message); }

});

client.on("guildMemberRemove", async (member) => {
    try {
        if (member) {
            const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('851497027921772564');
            const fetchedLogs = await member.guild.fetchAuditLogs({
                limit: 1,
                type: 'MEMBER_KICK',
            });
            const fetchedLogs2 = await member.guild.fetchAuditLogs({
                limit: 1,
                type: 'MEMBER_BAN_ADD',
            });

            const delLog = fetchedLogs.entries.first();
            const { executor, target } = "";
            if (fetchedLogs) {
                executor = fetchedLogs.entries.first().executor;
                target = fetchedLogs.entries.first().target;
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Usuario " + executor.tag + " Kickou " + target.tag + "!**")
                    .setTimestamp().setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                await ch.send(embed);
            }
            else if (fetchedLogs2) {
                executor = fetchedLogs2.entries.first().executor;
                target = fetchedLogs2.entries.first().target;
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Usuario " + executor.tag + " Baniu " + target.tag + "!**")
                    .setTimestamp().setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                await ch.send(embed);
            }
            else {
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Usuario " + member.tag + " saiu do Servidor!**")
                    .setTimestamp().setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                await ch.send(embed);
            }
        }
    }
    catch (err) { console.log("Error on GuildMemberRemove: " + err.message); }
})

client.on("messageDelete", async message => {
    try {
        if (message) {
            if (message.channel.type === "dm") return;
            if (message.channel.id != '806905404088385566') {
                const guild = message.guild.channels.cache.get('806905404088385566');
                const fetchedLogs = await message.guild.fetchAuditLogs({
                    limit: 1,
                    type: 'MESSAGE_DELETE',
                });
                const delLog = fetchedLogs.entries.first();
                const executor = delLog.executor;
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Mensagem de texto apagada por " + executor.tag + "!**" + "\r\n\r\n**Mensagem:**" + "\r\n" + message.content)
                    .setTimestamp().setFooter("Policia New Era", message.guild.iconURL());
                guild.send(embed);
            }
        }
    }
    catch (err) { console.log("Error on MessageDelete: " + err.message); }
});

client.on("messageUpdate", (oldM, newM) => {
    try {
        if (oldM && newM) {
            const guild = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
            if (oldM.content != newM.content) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Mensagem de texto Atualizada por " + oldM.author.tag + "!**" + "\r\n\r\n**Mensagem Antiga:**" + "\r\n" + oldM.content + "\r\n\r\n**Nova Mensagem:**\r\n" + newM.content)
                    .setTimestamp().setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                guild.send(embed);
            }
        }
    }
    catch (err) { console.log("Error on MessageUpdate: " + err.message); }
});

client.on("channelDelete", async channel => {
    try {
        if (channel) {
            const guild = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
            const log = await channel.guild.fetchAuditLogs({ limit: 1, type: 'CHANNEL_DELETE', });
            if (log.entries.first()) {
                const data = log.entries.first();
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Canal " + channel.name + " Apagado por " + data.executor.tag + "!**")
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                guild.send(embed);
            }
        }
    }
    catch (err) { console.log("Error on ChannelDelete: " + err.message); }
});
client.on("channelCreate", async channel => {
    try {
        if (channel) {
            const guild = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
            const log = await channel.guild.fetchAuditLogs({ limit: 1, type: 'CHANNEL_CREATE', });
            const data = log.entries.first();
            if (data) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Canal " + channel.name + " Criado por " + data.executor.tag + "!**")
                    .setTimestamp()
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                guild.send(embed);
            }
        }
    }
    catch (err) {
        console.log("Error on ChannelCreate: " + err.message);
    }
});

client.on("channelUpdate", async (oldC, newC) => {
    try {
        if (oldC && newC) {
            if (oldC.name != newC.name) {
                const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
                const audit = await client.guilds.cache.get('806545814091726928').fetchAuditLogs({ limit: 1, type: "CHANNEL_UPDATE" });
                const guild = client.guilds.cache.get('806545814091726928');
                let cat1 = oldC.parent;
                let cat2 = newC.parent;
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription(`**❗ Canal Atualizado por ${audit.entries.first().executor.tag}!**` +
                        `\r\n\r\n**Nome: ${oldC.name} ➡️ ${newC.name}**` +
                        `\r\n\r\n**Categoria: ${cat1} ➡️ ${cat2}**`)
                    .setTimestamp()
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                ch.send(embed);
            }
        }
    }
    catch (err) {
        console.log("Error on ChannelUpdate: " + err.message);
    }
});

client.on("guildMemberUpdate", async (oldMember, newMember) => {
    try {
        if (oldMember && newMember) {
            let roles = oldMember.roles.cache.map(r => `${r}`).join(", ").replace("@everyone", "");
            let roles2 = newMember.roles.cache.map(r => `${r}`).join(", ").replace("@everyone", "");
            if (roles.length > roles2.length) {
                const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
                const audit = await client.guilds.cache.get('806545814091726928').fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" });
                const guild = client.guilds.cache.get('806545814091726928');
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Cargos de <@" + oldMember.id + "> Alterados por <@" + audit.entries.first().executor.id + ">!**" +
                        "\r\n\r\n**Cargos Antigos: " + roles + "**" +
                        "\r\n\r\n**Cargos Novos: " + roles2 + "**")
                    .setTimestamp()
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                ch.send(embed);
            }
            else if (roles.length < roles2.length) {
                const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
                const audit = await client.guilds.cache.get('806545814091726928').fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" });
                const guild = client.guilds.cache.get('806545814091726928');
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**❗ Cargos de <@" + oldMember.id + "> Alterados por <@" + audit.entries.first().executor.id + ">!**" +
                        "\r\n\r\n**Cargos Antigos: " + roles + "**" +
                        "\r\n\r\n**Cargos Novos: " + roles2 + "**")
                    .setTimestamp()
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                ch.send(embed);
            }
        }
    }
    catch (err) {
        console.log("Error on GuildMemberUpdate: " + err.message);
    }
});

client.on("roleCreate", async (role) => {
    try {
        if (role) {
            const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
            const audit = await client.guilds.cache.get('806545814091726928').fetchAuditLogs({ limit: 1, type: "ROLE_CREATE" });
            const guild = client.guilds.cache.get('806545814091726928');
            let embed = new Discord.MessageEmbed()
                .setColor("#e81607")
                .setTitle("Auditoria Policia New Era")
                .setDescription("**Cargo " + role.name + " Criado por " + audit.entries.first().executor.tag + "!**")
                .setTimestamp()
                .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
            ch.send(embed);
        }
    }
    catch (err) {
        console.log("Error on roleCreate: " + err.message);
    }
});
client.on("roleDelete", async (role) => {
    try {
        if (role) {
            const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
            const audit = await client.guilds.cache.get('806545814091726928').fetchAuditLogs({ limit: 1, type: "ROLE_DELETE" });
            const guild = client.guilds.cache.get('806545814091726928');
            let embed = new Discord.MessageEmbed()
                .setColor("#e81607")
                .setTitle("Auditoria Policia New Era")
                .setDescription("**Cargo " + role.name + " Deletado por " + audit.entries.first().executor.tag + "!**")
                .setTimestamp()
                .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
            ch.send(embed);
        }
    }
    catch (err) {
        console.log("Error on roleDelete: " + err.message);
    }
})

client.on("roleUpdate", async (oldR, newR) => {
    try {
        if (oldR, newR) {
            const ch = client.guilds.cache.get('806545814091726928').channels.cache.get('806905404088385566');
            const audit = await client.guilds.cache.get('806545814091726928').fetchAuditLogs({ limit: 1, type: "ROLE_UPDATE" });
            const guild = client.guilds.cache.get('806545814091726928');
            const op = oldR.permissions.serialize();
            const np = newR.permissions.serialize();

            const oldP = [];
            const newP = [];
            for (const [key, element] of Object.entries(oldR.permissions.serialize())) {
                if (np[key] !== element) { newP.push(key); }
            }
            if (oldR.permissions > newR.permissions) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**Cargo '" + oldR.name + "' Alterado por " + audit.entries.first().executor.tag + "!**" +
                        "\r\n\r\n**Nome Antigo: " + oldR.name + " ➡️ " + newR.name + "**" +
                        "\r\n\r\n**Permissões Removidas: " + newP.join(", ") + "**")
                    .setTimestamp()
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                ch.send(embed);
            }
            else if (oldR.permissions < newR.permissions) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#e81607")
                    .setTitle("Auditoria Policia New Era")
                    .setDescription("**Cargo '" + oldR.name + "' Alterado por " + audit.entries.first().executor.tag + "!**" +
                        "\r\n\r\n**Nome Antigo: " + oldR.name + " ➡️ " + newR.name + "**" +
                        "\r\n\r\n**Permissões Adicionadas: " + newP.join(", ") + "**")
                    .setTimestamp()
                    .setFooter("Policia New Era", client.guilds.cache.get('806545814091726928').iconURL());
                ch.send(embed);
            }
        }
    }
    catch (err) {
        console.log("Error on roleUpdate: " + err.message);
    }
});

client.on("error", (e) => { console.error(e) });
client.on("warn", (e) => { console.warn(e) });
client.on("debug", (e) => { console.info(e) });