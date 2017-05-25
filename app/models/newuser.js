module.exports = function(sequelize, Sequelize) {
  var User =  sequelize.define('tbl_Employee', {
    EmployeeNo: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Salute: {
      type: Sequelize.STRING(5),
      allowNull: true
    },
    JobTitle: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    EmployeeID: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    FirstName: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    LastName: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    MidName: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    GroupType: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    Address1: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    Address2: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    City: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    State: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    ZipCode: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    Tel: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    Cell: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    Pager: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    Email: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    Password: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    Status: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    Lupdate: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    UpdateBy: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    UpdateOn: {
      type: Sequelize.DATE,
      allowNull: true
    },
    AccessLevel: {
      type: Sequelize.INTEGER(6),
      allowNull: true
    },
    Location: {
      type: Sequelize.STRING(2),
      allowNull: true
    },
    dateCreated: {
      type: Sequelize.DATE,
      allowNull: true
    },
    birthdate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    CustomerID: {
      type: Sequelize.STRING(250),
      allowNull: true
    },
    companyType: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    layOut: {
      type: Sequelize.STRING(2),
      allowNull: true
    },
    Extension: {
      type: Sequelize.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'tbl_Employee'
  });
  return User;
};