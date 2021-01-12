var request = require("supertest");
app = require("../src/index.js");


describe("Animales", () => {  
  describe("GET", () => {
    it("Deberia devolver una lista con todos los animales", (done) => {
      request(app)
        .get("/animals")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
});

describe("Un solo Animal", () => {
  describe("GET", () => {
    it("Deberia devolver un solo animal", (done) => {
      request(app)
        .get("/animals/0")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
});

describe("Un nuevo Animal", () => {
  describe("POST", () => {
    it("Deberia crear un nuevo animal", (done) => {
      request(app)
        .post("/animals/cabra/mamifero/herbivoro")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
});