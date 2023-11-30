module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Daniel Vieira',
        role: 'professor',
        email: 'dv@gmail.com',
        password: '123456',
      },
      {
        id: 2,
        name: 'Juliana Marques',
        role: 'student',
        email: 'jm@gmail.com',
        password: '123456',
      },
      {
        id: 3,
        name: 'Lucas Marques',
        role: 'professor',
        email: 'lm@gmail.com',
        password: '123456',
      },
      {
        id: 4,
        name: 'Nicolas Soares',
        role: 'student',
        email: 'ns@gmail.com',
        password: '123456',
      },
      {
        id: 5,
        name: 'Edward Leaman',
        role: 'professor',
        email: 'el@gmail.com',
        password: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
