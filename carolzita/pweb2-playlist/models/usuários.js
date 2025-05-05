const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme sua configuração

const Playlist = sequelize.define('Playlist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_playlist: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  data_criacao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  data_modificacao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  capa_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'playlist',
  timestamps: false,
});

module.exports = Playlist;
