import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Musica from './musica.js';
import Playlist from './playlist.js';

const MusicaPlaylist = sequelize.define('MusicaPlaylist', {
  IDMusica: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Musica,
      key: 'IDMusica',
    },
  },
  IDPlaylist: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Playlist,
      key: 'IDPlaylist',
    },
  },
}, {
  tableName: 'MusicasPlaylist',
  timestamps: false,
});

export default MusicaPlaylist;
