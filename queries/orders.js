const pizzas = require('./data/pizza-data.js');
const CONNECTION = require('./connection/connection.js');
const db = connect(CONNECTION);

const orders = db.orders;

function insertData() {
  orders.insertMany(pizzas);
}

function aggregateData() {
  return orders.aggregate([
    {
      $match: {
        size: 'medium',
      },
    },
    {
      $group: {
        _id: '$name',
        totalQuantity: { $sum: '$quantity' },
      },
    },
  ]);
}

function filterData(id) {
  orders.find({})
}

print(aggregateData());
