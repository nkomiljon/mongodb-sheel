const CONNECTION = require('./connection/connection.js');

db = connect(CONNECTION);

const dashboards = db.dashboards;

function getAllUsers() {
  return dashboards.find();
}

function filterByUsers(id) {
  return dashboards.find({ users: { $in: [id] } });
}

const user_id = 'cf46052cfb8b2e75dae84b92';

function aggregateUsers(id) {
  return dashboards.aggregate([
    {
      $match: { users: { $in: [id] }}
    },
  ]);
}

print('-----------------------------------\n');
print('get all users: \n');
print(getAllUsers());
print('-----------------------------------\n');

print('-----------------------------------\n');
print('filtered users: \n');
print(aggregateUsers(user_id));
print('-----------------------------------\n');
