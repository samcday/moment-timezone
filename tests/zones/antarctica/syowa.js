"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Antarctica/Syowa"] = {
	"1957" : helpers.makeTestYear("Antarctica/Syowa", [
		["1957-01-28T23:59:59+00:00", "23:59:59", "zzz", 0],
		["1957-01-29T00:00:00+00:00", "03:00:00", "SYOT", -180]
	])
};