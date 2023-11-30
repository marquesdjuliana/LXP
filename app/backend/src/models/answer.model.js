module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'questions',
        key: 'id',
      }
    },
    answer_text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, 
  {
    timestamps: false,
    tableName: 'answers',
  });
  

  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
      foreignKey: 'question_id',
      as: 'question',
    });
  }; 

  return Answer;
};