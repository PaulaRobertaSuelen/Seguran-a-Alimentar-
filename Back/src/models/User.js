const { DataTypes } = require('sequelize');
const db = require('../config/connection')

const User = db.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_usuario: {
        type: DataTypes.ENUM('comum', 'profissional'),
        allowNull: false,
    },
    profissao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: true, // Somente obrigatório para profissionais
    },
    crn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    codigo_recuperacao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false, // Adiciona os campos createdAt e updatedAt automaticamente
});

module.exports = User;