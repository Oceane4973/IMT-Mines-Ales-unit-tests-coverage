const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true
  },
  lastName: {
    type: String,
    required: true,
    index: true
  },
  mobilePhone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: true,
    index: true
  },
  arrivedAt: {
    type: Date,
    required: true,
    index: true
  },
  departureAt: {
    type: Date,
    required: true,
    validate: {
      validator: function(departureDate) {
        return departureDate >= this.arrivedAt;
      },
      message: 'Departure date must be after or equal to arrival date'
    }
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
}, {
  collection: 'contacts',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

Schema.index({ createdAt: -1, firstName: 1 });
Schema.index({ createdAt: -1, lastName: 1 });

module.exports = Schema