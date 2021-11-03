const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('connect',() => {
    console.log('Successfully Connected to Game Server!');
    conn.write('Name: CPR');
    // conn.write('Move: up');
    setInterval(() => {
      conn.write('Move: up');
    }, 100);
  });

  conn.on('data', data => {
    console.log(data);
    conn.end();
  });

  conn.on('end', data => {
    console.log('end data:',data);
  });

  return conn;
};

module.exports = {
  connect,
};