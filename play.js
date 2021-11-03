const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding('utf8');
  conn.on('connect', data => {
    console.log('connect data:',data);
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

console.log('Connecting ...');
connect();