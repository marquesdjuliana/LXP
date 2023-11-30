'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id',
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      question_text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('questions');
  }
};