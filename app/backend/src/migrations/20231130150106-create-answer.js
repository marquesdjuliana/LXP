'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('answers', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'questions',
          key: 'id',
        }
      },
      answer_text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('answers');
  }
};