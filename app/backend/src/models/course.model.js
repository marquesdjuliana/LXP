module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    duration: {
      allowNull: false,
      type: DataTypes.TIME,
    },
    professor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
  }, 
  {
    timestamps: false,
    tableName: 'courses',
  });

  Course.associate = (models) => {
    Course.belongsTo(models.User, {
      foreignKey: 'professor_id',
      as: 'professor',
    });
  };
  return Course;
};