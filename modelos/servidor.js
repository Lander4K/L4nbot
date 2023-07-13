const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    guildID: String,
    prefijo: String,
    premium: {type: String, default: ""},
    idioma: {type: String, default: "es"},
})

const model = mongoose.model("ConfigServer", serverSchema);

module.exports = model;


/*
╔═════════════════════════════════════════════════════╗
║       || - || Desarrollado por L4nder     || - ||   ║
║    ----------| discord.gg/ecruXB7MGw |----------    ║
╚═════════════════════════════════════════════════════╝
*/
