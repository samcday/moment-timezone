"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Pacific/Pitcairn"] = {
	"1998" : helpers.makeTestYear("Pacific/Pitcairn", [
		["1998-04-27T08:29:59+00:00", "23:59:59", "PNT", 510],
		["1998-04-27T08:30:00+00:00", "00:30:00", "PST", 480]
	])
};