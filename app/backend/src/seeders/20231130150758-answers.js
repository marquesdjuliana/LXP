module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('answers',
      [
        {
          id: 1,
          question_id: 1,
          answer_text: 'A gestão eficaz do tempo pode melhorar a produtividade, reduzir o estresse, aumentar a eficiência, permitir maior foco nas prioridades e proporcionar um equilíbrio saudável entre vida pessoal e profissional.',
        },
        {
          id: 2,
          question_id: 2,
          answer_text: 'A gestão de processos é fundamental para identificar, analisar e aprimorar fluxos de trabalho, resultando em maior eficiência, redução de desperdícios e uma busca constante por melhorias.',
        },
        {
          id: 3,
          question_id: 3,
          answer_text: 'A criação e gestão de marcas impactam diretamente a percepção do consumidor, influenciando suas decisões de compra. Em um mercado competitivo, uma marca bem gerida cria conexões emocionais, diferencia-se da concorrência e constrói confiança, o que pode ser decisivo na escolha do consumidor.',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('answers', null, {});
  },
};
