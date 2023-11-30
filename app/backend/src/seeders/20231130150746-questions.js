module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('questions',
      [
        {
          id: 1,
          course_id: 1,
          user_id: 2,
          question_text: 'Como a gestão eficaz do tempo pode influenciar positivamente nossas vidas, tanto pessoal quanto profissionalmente?'
        },
        {
          id: 2,
          course_id: 2,
          user_id: 4,
          question_text: 'Qual é o papel da gestão de processos na otimização da eficiência e na melhoria contínua dentro de uma organização?'
        },
        {
          id: 3,
          course_id: 3,
          user_id: 2,
          question_text: 'Como a criação e gestão de marcas podem impactar a percepção do consumidor e influenciar as decisões de compra em um mercado cada vez mais competitivo?'
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  },
};
