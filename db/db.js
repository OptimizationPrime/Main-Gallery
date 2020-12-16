const arango = require('arangojs');

const db = new arango.Database({
  // url: 'http://127.0.0.1:8529',
  url: 'http://54.151.77.240:8529',
  agentOptions: {
    maxSockets: 200, keepAlive: true, keepAliveMsecs: 1000, maxFreeSockets: 100,
  },
  loadBalancingStrategy: 'ROUND_ROBIN',
  // QueryOptions: { allowDirtyRead: true },
});

db.useDatabase('sdc');
db.useBasicAuth('root', '');

module.exports = db;
