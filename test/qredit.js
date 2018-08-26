var should = require("should");
var qredit = require("../index.js");

describe("Qredit JS", function () {

	it("should be ok", function () {
		(qredit).should.be.ok;
	});

	it("should be object", function () {
		(qredit).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(qredit).should.have.property(property);
		});
	});

});
