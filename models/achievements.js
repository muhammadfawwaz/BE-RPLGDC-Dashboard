const Sequelize = require('sequelize'); 
const db = require('../config/config');

const achievements = db.define('achievements', {
    'id_achievement': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'judul': Sequelize.STRING,
    'nama_pemenang': Sequelize.STRING,
    'jurusan': Sequelize.STRING,
    'tahun': Sequelize.INTEGER,
    'peringkat': Sequelize.INTEGER,
    'foto_achievement': Sequelize.STRING,
}, {
    //prevent sequelize transform table name into plural
    freezeTableName: true,
    timestamps: false
});

module.exports = achievements;
