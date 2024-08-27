import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/pg.sequelize";

export class Note extends Model {
  id!: number;
  name!: string;
  done!: Boolean;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "Notes",
    timestamps: false,
  }
);
