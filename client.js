const net = require('net');
const { IP, PORT, } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding('utf8');

  conn.on('connect',() => {
    console.log('Successfully Connected to Game Server!');
    conn.write("Name: CPR");
  });

  conn.on('data', data => {
    console.log(data);
    conn.end();
  });

  conn.on('end', data => {
    console.log('bye');
  });

  return conn;
};

module.exports = {
  connect,
};