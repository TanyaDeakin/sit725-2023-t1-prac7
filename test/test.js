var expect = require("chai").expect;
var request = require("request");

describe("Test GET method", async function() {
    var url = "http://localhost:3000/api/pictures";
    it("Asserts response status code as 200 for success scenario", async function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
    it("Asserts status code returned in response body as 200 for success scenario", async function() {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
        });
    });
    it("Asserting the response statusCode key to give 400 code in case of error", async function() {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
        });
    });

    it("Asserting null response in the response body in case of error", async function() {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
        });
    });
});


describe("Test POST method", function() {
    var url = "http://localhost:3000/api/pictures";

    it("Asserting the response status code as 200", async function() {

        // Making a request to the specified URL
        request(url, function(error, response, body) {
            // Handling errors if any
            if (error) {
                // Calling done with the error to fail the test
                done(error);
                return;
            }

            // Assertions
            expect(response.statusCode).to.equal(200);

            // Calling done to indicate that the test is complete
            //done();
        });
    });

    it("Asserting the response body structure for a successful POST request", async function() {
        const requestBody = {
            "title": "picture1",
            "path": "images/picture1.jpg"
        };
        request.post({
                url: url,
                json: true,
                body: requestBody,
            },
            function(error, response, body) {
                // Checking for no errors
                expect(error).to.be.null;

                // Asserting the response body structure
                expect(response.body).to.be.an('object');
                expect(response.body.statusCode).to.equal(200);
                expect(response.body).to.have.property('data');
                expect(response.body.message).to.equal('success');
            }
        );
    });

    it("Asserting the response statusCode key to give 400 code in case of error", async function() {

        const requestBody = {
            "invalidkey": "picture1"
        };
        request.post({
                url: url,
                json: true,
                body: requestBody,
            },
            function(error, response, body) {

                body = JSON.parse(body)
                expect(body.statusCode).to.equal(400);
            }
        );
    });

    it("Asserting null response in the response body in case of error", async function() {

        const requestBody = {
        };
        request.post({
                url: url,
                json: true,
                body: requestBody,
            },
            function(error, response, body) {

                body = JSON.parse(body)
                expect(body.result).to.be.a('null');
            }
        );
    });
});



