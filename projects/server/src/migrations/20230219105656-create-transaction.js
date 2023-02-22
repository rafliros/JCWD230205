'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      total_room: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      cardname: {
        type: Sequelize.STRING
      },
      cardnumber: {
        type: Sequelize.INTEGER
      },
      expirydate: {
        type: Sequelize.DATE
      },
      cvv: {
        type: Sequelize.STRING
      },
      invoice: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};