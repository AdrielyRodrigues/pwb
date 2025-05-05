import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './Usuario.js';
import Musica from './musica.js';

const Curtida = sequelize.define('Curtida', {
  IDCurtida: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  IDUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'IDUsuario',
    },
  },
  IDMusica: {
    type: DataTypes.INTEGER,
    references: {
      model: Musica,
      key: 'IDMusica',
    },
  },
  DataCurtida: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Curtidas',
  timestamps: false,
});

export default Curtida;
