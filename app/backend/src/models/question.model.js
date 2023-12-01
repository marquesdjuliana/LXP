module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    question_text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, 
  {
    timestamps: false,
    tableName: 'questions',
    underscored: true,
  });

  Question.associate = (models) => {
    Question.belongsTo(models.Course, {
      foreignKey: 'course_id',
      as: 'course',
    });
    Question.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    Question.hasOne(models.Answer, {
      foreignKey: 'question_id',
      as: 'answer',
    });
  };

  return Question;
};