/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define(
    'Booking',
    {
      BookingID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      CNeeID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      CNeeName: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      OrgPort: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      DstPort: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      VesselName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      VoyNo: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      FeedVessel: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      MainVessel: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      ISFDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      DocCutOff: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CargoCutOff: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ETD: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ETAFirst: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ETAFinal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      LCLConPort: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      FinalApproval: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      PrepareBy: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      PrepareOn: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      PrepareNo: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
      },
      Status: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      FrEmail: {
        type: DataTypes.STRING(254),
        allowNull: true,
      },
      ToEmail: {
        type: DataTypes.STRING(254),
        allowNull: true,
      },
      ccEmail: {
        type: DataTypes.STRING(254),
        allowNull: true,
      },
      createDate: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      Agent: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CarrierName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      FnlPort: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      Door: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      bkStatus: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      bkDone: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      csnApv: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      doorLoc: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      buyTerm: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      transMode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      docSend: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      cargoAvDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      csnNotApv: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      csnHold: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      ApvDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      NotApvDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      HoldDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      csnAkn: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      docRecord: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        defaultValue: '0',
      },
      saleID: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      AMSDataTfr: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      McGrawStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      AprvCutOff: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      BookType: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      spStatus: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      ISFBLMatch: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      Urgent: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      UpdateBy: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      UpdateOn: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CWFileNo: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      tableName: 'tbl_Booking',
    }
  );
  return Booking;
};
