class Config {
  constructor() {
    var self = this;
    const consul = require("consul")();
    self.listening_ip_address =
      process.env.LISTENING_IP_ADDRESS ||      
      "0.0.0.0";
    self.port = process.env.PORT || 3000;
    consul.agent.service.list(function (err, result) {
      if (err) {
        console.log("Consul no está conectado");
      } else {
        consul.kv.get("hostPrueba", function (err, result) {
          if (result != undefined) {
            self.host = result.Value;
            console.log("Host: " + self.host);
          }
        });

        consul.kv.get("puertoPrueba", function (err, result) {
          if (result != undefined) {
            self.port = result.Value;
            console.log("Puerto: " + self.port);
          }
        });
      }
    });
  }
}

const conf = new Config();

module.exports = { Config };
