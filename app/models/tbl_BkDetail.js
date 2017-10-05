/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'tbl_BkDetail',
    {
      BkDetailID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      BookingID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      ContainerNo: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: '0',
      },
      HBL: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      CopyQty: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0',
      },
      CartonQty: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0',
      },
      PalletQty: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0',
      },
      CargoReadyDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CargoVol: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.000',
      },
      CargoSize: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CargoType: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ShipperName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      PONo: {
        type: DataTypes.STRING(4000),
        allowNull: true,
      },
      CargoDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ISBN: {
        type: DataTypes.STRING(4000),
        allowNull: true,
      },
      LineNum: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
      },
      nCtrn: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0',
      },
      bkStatus: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      cargoWt: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.000',
      },
      publisher: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      PACInv: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
      },
      ApStatus1: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      ApStatus2: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      ApStatus3: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      saleOrder: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      csnPO: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      unitCost: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.00',
      },
      ttlCost: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.00',
      },
      buyCode: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      POTotal: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.0',
      },
      CargoRapDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      SaleID: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CarBooking: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      SKUNo: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      DelrAddr: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      Category: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      CargoTypeFnl: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dStatus: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      HTSNo: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      McGrawStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      ReleaseBy: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      RDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      MissingDoc: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: true,
        defaultValue: '0',
      },
      MBL: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      UPSCode: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      EstDelivery: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ActDelivery: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      UPCNo: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      CustomerInHandsDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FinalDueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ApprovedDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ApprovedBy: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      ActionPlan: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      LineOfBusiness: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Cycle: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      Season: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      RequestDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      PaymentTerms: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      PublisherContact: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      PublisherPhone: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      VendorNo: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      VendorURLID: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      ProNo: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      CustomsStatus: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      DeliveryStatus: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      Model: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      NetCost: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      Country: {
        type: DataTypes.STRING(24),
        allowNull: true,
      },
      TransactionDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ShipToCity: {
        type: DataTypes.STRING(24),
        allowNull: true,
      },
      ShipToState: {
        type: DataTypes.STRING(24),
        allowNull: true,
      },
    },
    {
      tableName: 'tbl_BkDetail',
    }
  );
};
