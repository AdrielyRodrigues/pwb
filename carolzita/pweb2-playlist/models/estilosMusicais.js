import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const EstiloMusical = sequelize.define('EstiloMusical', {
  IDEstilo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NomeEstilo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'EstilosMusicais',
  timestamps: false,
});

export default EstiloMusical;
