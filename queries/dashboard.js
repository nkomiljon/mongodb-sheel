const CONNECTION = require('./connection/connection.js');

db = connect(CONNECTION);

const dashboards = db.dashboards.find();
print(dashboards);
