"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Asia/Manila"] = {
	"1936" : helpers.makeTestYear("Asia/Manila", [
		["1936-10-31T15:59:59+00:00", "23:59:59", "PHT", -480],
		["1936-10-31T16:00:00+00:00", "01:00:00", "PHST", -540]
	]),

	"1937" : helpers.makeTestYear("Asia/Manila", [
		["1937-01-31T14:59:59+00:00", "23:59:59", "PHST", -540],
		["1937-01-31T15:00:00+00:00", "23:00:00", "PHT", -480]
	]),

	"1942" : helpers.makeTestYear("Asia/Manila", [
		["1942-04-30T15:59:59+00:00", "23:59:59", "PHT", -480],
		["1942-04-30T16:00:00+00:00", "01:00:00", "JST", -540]
	]),

	"1944" : helpers.makeTestYear("Asia/Manila", [
		["1944-10-31T14:59:59+00:00", "23:59:59", "JST", -540],
		["1944-10-31T15:00:00+00:00", "23:00:00", "PHT", -480]
	]),

	"1954" : helpers.makeTestYear("Asia/Manila", [
		["1954-04-11T15:59:59+00:00", "23:59:59", "PHT", -480],
		["1954-04-11T16:00:00+00:00", "01:00:00", "PHST", -540],
		["1954-06-30T14:59:59+00:00", "23:59:59", "PHST", -540],
		["1954-06-30T15:00:00+00:00", "23:00:00", "PHT", -480]
	]),

	"1978" : helpers.makeTestYear("Asia/Manila", [
		["1978-03-21T15:59:59+00:00", "23:59:59", "PHT", -480],
		["1978-03-21T16:00:00+00:00", "01:00:00", "PHST", -540],
		["1978-09-20T14:59:59+00:00", "23:59:59", "PHST", -540],
		["1978-09-20T15:00:00+00:00", "23:00:00", "PHT", -480]
	])
};