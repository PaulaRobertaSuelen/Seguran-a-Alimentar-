const { DataTypes } = require("sequelize");
const db = require("../config/connection");
const User = require("./User");

const Profile = db.define(
  "profiles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    sobre: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contatos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    anexos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Profile.belongsTo(User, {
  foreignKey: "usuario_id",
  onDelete: "CASCADE",
});

module.exports = Profile;
