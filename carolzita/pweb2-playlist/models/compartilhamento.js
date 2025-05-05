import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuários.js';
import Musica from './musica.js';

const Compartilhamento = sequelize.define('Compartilhamento', {
  IDCompartilhamento: {
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
  Plataforma: {
    type: DataTypes.STRING(100),
  },
  DataCompartilhamento: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Compartilhamentos',
  timestamps: false,
});

export default Compartilhamento;
