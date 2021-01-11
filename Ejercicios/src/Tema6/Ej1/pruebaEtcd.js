const { Etcd3 } = require("etcd3");
const client = new Etcd3();

(async () => {
  await client.put("puertoPrueba2").value("3002");
  console.log("puertoPrueba2:", await client.get("puertoPrueba2").string());
  console.log("puertoPrueba:", await client.get("puertoPrueba").string());  
})();
