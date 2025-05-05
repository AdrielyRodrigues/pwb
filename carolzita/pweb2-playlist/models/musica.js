import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import EstiloMusical from './EstiloMusical.js';

const Musica = sequelize.define('Musica', {
  IDMusica: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Titulo: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  Artista: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  IDEstilo: {
    type: DataTypes.INTEGER,
    references: {
      model: EstiloMusical,
      key: 'IDEstilo',
    },
  },
  DataLancamento: {
    type: DataTypes.DATEONLY,
  },
}, {
  tableName: 'Musicas',
  timestamps: false,
});

export default Musica;
