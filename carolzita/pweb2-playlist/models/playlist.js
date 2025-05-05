import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './Usuario.js';

const Playlist = sequelize.define('Playlist', {
  IDPlaylist: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NomePlaylist: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  IDUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'IDUsuario',
    },
  },
  DataCriacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Playlists',
  timestamps: false,
});

export default Playlist;
