module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('student', 'professor'),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'users', 
    underscored: true,

  });
  
  User.associate = (models) => {
    User.hasMany(models.Question, {
      foreignKey: 'user_id',
      as: 'questions',
    });
  User.hasMany(models.Course, {
      foreignKey: 'professor_id',
      as: 'courses',
    });
  };

  return User;
};
