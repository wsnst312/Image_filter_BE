const {FILTER_TYPES} = require("../constants/constant");
module.exports = (sequelize, DataTypes) => {
    const UI_File = sequelize.define("UI_File", {
        url: {type: DataTypes.STRING},
        filename: {type: DataTypes.STRING, allowNull: false},
        filter: {type: DataTypes.ENUM, values: [FILTER_TYPES.NONE, FILTER_TYPES.SEPIA, FILTER_TYPES.GRAYSCALE], allowNull: false},
    });

    return UI_File;
};
