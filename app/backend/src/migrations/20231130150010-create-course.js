'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      duration: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      professor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('courses');
  }
};