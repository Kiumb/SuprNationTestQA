const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;


describe("GET /users", function () {
  it("returns all users from API", async function () {
    const response = await request.get("/users");
    console.log('response status : ' + response.status);
    console.log('response status : ' + response.body.data);
    expect(response.status).to.eql(200);
    //expect(response.body.data.length).to.eql(30);
    
  });
});




describe("POST /register", function () {
  it("correct call service register", async function () {
    const response = await request
      .post("/register")
      .send({ email: "eve.holt@reqres.in", password: "pistol" });

    console.log("response : " +response.body)
    expect(response.status).to.eql(200);

    //const attributes = response.body.data.attributes;
   // expect(attributes).to.include.keys("kilometers", "miles", "nautical_miles");
   // expect(attributes.kilometers).to.eql(8692.066508240026);
   // expect(attributes.miles).to.eql(5397.239853492001);
   // expect(attributes.nautical_miles).to.eql(4690.070954910584);
  });
});


describe("POST /register", function () {
  it("correct call service register", async function () {
    const response = await request
      .post("/register")
      .send({ email: "eve.holt@reqres.in"});

    console.log("response : " +response.body)
    expect(response.status).to.eql(400);
  });
});