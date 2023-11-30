module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('courses',
      [
        {
          id: 1,
          title: 'Gestão do Tempo e Produtividade',
          duration: 150000,
          professor_id: 1,
        },
        {
          id: 2,
          title: 'Gestão de Processos',
          duration: 240000,
          professor_id: 3,
        },
        {
          id: 3,
          title: 'Criação e Gestão de Marcas',
          duration: 200000,
          professor_id: 5,
        }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});
  },
};
