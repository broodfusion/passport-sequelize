var Bookings = require('../models/').Bookings;


module.exports= {
  //Get a list of all authors using model.findAll()
  index(req, res) {
    return Bookings.findAll({
      limit: 10,
      order: [['BookingID DESC']],
      raw: true
    })
      .then(function (bookings) {
        res.status(200).json(bookings);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }
};