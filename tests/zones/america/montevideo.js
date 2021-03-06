"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["America/Montevideo"] = {
	"1920" : helpers.makeTestYear("America/Montevideo", [
		["1920-05-01T03:44:43+00:00", "23:59:59", "MMT", 13484 / 60],
		["1920-05-01T03:44:44+00:00", "00:14:44", "UYT", 210]
	]),

	"1923" : helpers.makeTestYear("America/Montevideo", [
		["1923-10-02T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1923-10-02T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1924" : helpers.makeTestYear("America/Montevideo", [
		["1924-04-01T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1924-04-01T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1924-10-01T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1924-10-01T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1925" : helpers.makeTestYear("America/Montevideo", [
		["1925-04-01T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1925-04-01T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1925-10-01T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1925-10-01T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1926" : helpers.makeTestYear("America/Montevideo", [
		["1926-04-01T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1926-04-01T03:00:00+00:00", "23:30:00", "UYT", 210]
	]),

	"1933" : helpers.makeTestYear("America/Montevideo", [
		["1933-10-29T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1933-10-29T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1934" : helpers.makeTestYear("America/Montevideo", [
		["1934-04-01T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1934-04-01T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1934-10-28T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1934-10-28T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1935" : helpers.makeTestYear("America/Montevideo", [
		["1935-03-31T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1935-03-31T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1935-10-27T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1935-10-27T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1936" : helpers.makeTestYear("America/Montevideo", [
		["1936-03-29T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1936-03-29T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1936-11-01T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1936-11-01T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1937" : helpers.makeTestYear("America/Montevideo", [
		["1937-03-28T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1937-03-28T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1937-10-31T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1937-10-31T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1938" : helpers.makeTestYear("America/Montevideo", [
		["1938-03-27T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1938-03-27T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1938-10-30T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1938-10-30T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1939" : helpers.makeTestYear("America/Montevideo", [
		["1939-03-26T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1939-03-26T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1939-10-29T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1939-10-29T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1940" : helpers.makeTestYear("America/Montevideo", [
		["1940-03-31T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1940-03-31T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1940-10-27T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1940-10-27T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1941" : helpers.makeTestYear("America/Montevideo", [
		["1941-03-30T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1941-03-30T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1941-08-01T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1941-08-01T03:30:00+00:00", "00:30:00", "UYHST", 180]
	]),

	"1942" : helpers.makeTestYear("America/Montevideo", [
		["1942-01-01T02:59:59+00:00", "23:59:59", "UYHST", 180],
		["1942-01-01T03:00:00+00:00", "23:30:00", "UYT", 210],
		["1942-12-14T03:29:59+00:00", "23:59:59", "UYT", 210],
		["1942-12-14T03:30:00+00:00", "01:30:00", "UYST", 120]
	]),

	"1943" : helpers.makeTestYear("America/Montevideo", [
		["1943-03-14T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1943-03-14T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1959" : helpers.makeTestYear("America/Montevideo", [
		["1959-05-24T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1959-05-24T03:00:00+00:00", "01:00:00", "UYST", 120],
		["1959-11-15T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1959-11-15T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1960" : helpers.makeTestYear("America/Montevideo", [
		["1960-01-17T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1960-01-17T03:00:00+00:00", "01:00:00", "UYST", 120],
		["1960-03-06T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1960-03-06T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1965" : helpers.makeTestYear("America/Montevideo", [
		["1965-04-04T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1965-04-04T03:00:00+00:00", "01:00:00", "UYST", 120],
		["1965-09-26T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1965-09-26T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1966" : helpers.makeTestYear("America/Montevideo", [
		["1966-04-03T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1966-04-03T03:00:00+00:00", "01:00:00", "UYST", 120],
		["1966-10-31T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1966-10-31T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1967" : helpers.makeTestYear("America/Montevideo", [
		["1967-04-02T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1967-04-02T03:00:00+00:00", "01:00:00", "UYST", 120],
		["1967-10-31T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1967-10-31T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1968" : helpers.makeTestYear("America/Montevideo", [
		["1968-05-27T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1968-05-27T03:00:00+00:00", "00:30:00", "UYHST", 150],
		["1968-12-02T02:29:59+00:00", "23:59:59", "UYHST", 150],
		["1968-12-02T02:30:00+00:00", "23:30:00", "UYT", 180]
	]),

	"1969" : helpers.makeTestYear("America/Montevideo", [
		["1969-05-27T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1969-05-27T03:00:00+00:00", "00:30:00", "UYHST", 150],
		["1969-12-02T02:29:59+00:00", "23:59:59", "UYHST", 150],
		["1969-12-02T02:30:00+00:00", "23:30:00", "UYT", 180]
	]),

	"1970" : helpers.makeTestYear("America/Montevideo", [
		["1970-05-27T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1970-05-27T03:00:00+00:00", "00:30:00", "UYHST", 150],
		["1970-12-02T02:29:59+00:00", "23:59:59", "UYHST", 150],
		["1970-12-02T02:30:00+00:00", "23:30:00", "UYT", 180]
	]),

	"1972" : helpers.makeTestYear("America/Montevideo", [
		["1972-04-24T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1972-04-24T03:00:00+00:00", "01:00:00", "UYST", 120],
		["1972-08-15T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1972-08-15T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1974" : helpers.makeTestYear("America/Montevideo", [
		["1974-03-10T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1974-03-10T03:00:00+00:00", "00:30:00", "UYHST", 150],
		["1974-12-22T02:29:59+00:00", "23:59:59", "UYHST", 150],
		["1974-12-22T02:30:00+00:00", "00:30:00", "UYST", 120]
	]),

	"1976" : helpers.makeTestYear("America/Montevideo", [
		["1976-10-01T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1976-10-01T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1977" : helpers.makeTestYear("America/Montevideo", [
		["1977-12-04T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1977-12-04T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1978" : helpers.makeTestYear("America/Montevideo", [
		["1978-04-01T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1978-04-01T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1979" : helpers.makeTestYear("America/Montevideo", [
		["1979-10-01T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1979-10-01T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1980" : helpers.makeTestYear("America/Montevideo", [
		["1980-05-01T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1980-05-01T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"1987" : helpers.makeTestYear("America/Montevideo", [
		["1987-12-14T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1987-12-14T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1988" : helpers.makeTestYear("America/Montevideo", [
		["1988-03-14T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1988-03-14T02:00:00+00:00", "23:00:00", "UYT", 180],
		["1988-12-11T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1988-12-11T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1989" : helpers.makeTestYear("America/Montevideo", [
		["1989-03-12T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1989-03-12T02:00:00+00:00", "23:00:00", "UYT", 180],
		["1989-10-29T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1989-10-29T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1990" : helpers.makeTestYear("America/Montevideo", [
		["1990-03-04T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1990-03-04T02:00:00+00:00", "23:00:00", "UYT", 180],
		["1990-10-21T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1990-10-21T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1991" : helpers.makeTestYear("America/Montevideo", [
		["1991-03-03T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1991-03-03T02:00:00+00:00", "23:00:00", "UYT", 180],
		["1991-10-27T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1991-10-27T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1992" : helpers.makeTestYear("America/Montevideo", [
		["1992-03-01T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1992-03-01T02:00:00+00:00", "23:00:00", "UYT", 180],
		["1992-10-18T02:59:59+00:00", "23:59:59", "UYT", 180],
		["1992-10-18T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"1993" : helpers.makeTestYear("America/Montevideo", [
		["1993-02-28T01:59:59+00:00", "23:59:59", "UYST", 120],
		["1993-02-28T02:00:00+00:00", "23:00:00", "UYT", 180]
	]),

	"2004" : helpers.makeTestYear("America/Montevideo", [
		["2004-09-19T02:59:59+00:00", "23:59:59", "UYT", 180],
		["2004-09-19T03:00:00+00:00", "01:00:00", "UYST", 120]
	]),

	"2005" : helpers.makeTestYear("America/Montevideo", [
		["2005-03-27T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2005-03-27T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2005-10-09T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2005-10-09T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2006" : helpers.makeTestYear("America/Montevideo", [
		["2006-03-12T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2006-03-12T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2006-10-01T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2006-10-01T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2007" : helpers.makeTestYear("America/Montevideo", [
		["2007-03-11T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2007-03-11T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2007-10-07T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2007-10-07T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2008" : helpers.makeTestYear("America/Montevideo", [
		["2008-03-09T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2008-03-09T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2008-10-05T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2008-10-05T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2009" : helpers.makeTestYear("America/Montevideo", [
		["2009-03-08T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2009-03-08T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2009-10-04T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2009-10-04T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2010" : helpers.makeTestYear("America/Montevideo", [
		["2010-03-14T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2010-03-14T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2010-10-03T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2010-10-03T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2011" : helpers.makeTestYear("America/Montevideo", [
		["2011-03-13T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2011-03-13T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2011-10-02T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2011-10-02T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2012" : helpers.makeTestYear("America/Montevideo", [
		["2012-03-11T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2012-03-11T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2012-10-07T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2012-10-07T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2013" : helpers.makeTestYear("America/Montevideo", [
		["2013-03-10T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2013-03-10T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2013-10-06T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2013-10-06T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2014" : helpers.makeTestYear("America/Montevideo", [
		["2014-03-09T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2014-03-09T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2014-10-05T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2014-10-05T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2015" : helpers.makeTestYear("America/Montevideo", [
		["2015-03-08T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2015-03-08T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2015-10-04T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2015-10-04T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2016" : helpers.makeTestYear("America/Montevideo", [
		["2016-03-13T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2016-03-13T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2016-10-02T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2016-10-02T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2017" : helpers.makeTestYear("America/Montevideo", [
		["2017-03-12T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2017-03-12T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2017-10-01T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2017-10-01T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2018" : helpers.makeTestYear("America/Montevideo", [
		["2018-03-11T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2018-03-11T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2018-10-07T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2018-10-07T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2019" : helpers.makeTestYear("America/Montevideo", [
		["2019-03-10T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2019-03-10T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2019-10-06T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2019-10-06T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2020" : helpers.makeTestYear("America/Montevideo", [
		["2020-03-08T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2020-03-08T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2020-10-04T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2020-10-04T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2021" : helpers.makeTestYear("America/Montevideo", [
		["2021-03-14T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2021-03-14T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2021-10-03T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2021-10-03T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2022" : helpers.makeTestYear("America/Montevideo", [
		["2022-03-13T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2022-03-13T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2022-10-02T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2022-10-02T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2023" : helpers.makeTestYear("America/Montevideo", [
		["2023-03-12T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2023-03-12T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2023-10-01T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2023-10-01T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2024" : helpers.makeTestYear("America/Montevideo", [
		["2024-03-10T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2024-03-10T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2024-10-06T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2024-10-06T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2025" : helpers.makeTestYear("America/Montevideo", [
		["2025-03-09T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2025-03-09T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2025-10-05T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2025-10-05T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2026" : helpers.makeTestYear("America/Montevideo", [
		["2026-03-08T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2026-03-08T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2026-10-04T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2026-10-04T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2027" : helpers.makeTestYear("America/Montevideo", [
		["2027-03-14T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2027-03-14T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2027-10-03T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2027-10-03T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2028" : helpers.makeTestYear("America/Montevideo", [
		["2028-03-12T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2028-03-12T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2028-10-01T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2028-10-01T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2029" : helpers.makeTestYear("America/Montevideo", [
		["2029-03-11T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2029-03-11T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2029-10-07T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2029-10-07T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2030" : helpers.makeTestYear("America/Montevideo", [
		["2030-03-10T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2030-03-10T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2030-10-06T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2030-10-06T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2031" : helpers.makeTestYear("America/Montevideo", [
		["2031-03-09T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2031-03-09T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2031-10-05T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2031-10-05T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2032" : helpers.makeTestYear("America/Montevideo", [
		["2032-03-14T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2032-03-14T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2032-10-03T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2032-10-03T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2033" : helpers.makeTestYear("America/Montevideo", [
		["2033-03-13T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2033-03-13T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2033-10-02T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2033-10-02T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2034" : helpers.makeTestYear("America/Montevideo", [
		["2034-03-12T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2034-03-12T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2034-10-01T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2034-10-01T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2035" : helpers.makeTestYear("America/Montevideo", [
		["2035-03-11T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2035-03-11T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2035-10-07T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2035-10-07T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2036" : helpers.makeTestYear("America/Montevideo", [
		["2036-03-09T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2036-03-09T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2036-10-05T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2036-10-05T05:00:00+00:00", "03:00:00", "UYST", 120]
	]),

	"2037" : helpers.makeTestYear("America/Montevideo", [
		["2037-03-08T03:59:59+00:00", "01:59:59", "UYST", 120],
		["2037-03-08T04:00:00+00:00", "01:00:00", "UYT", 180],
		["2037-10-04T04:59:59+00:00", "01:59:59", "UYT", 180],
		["2037-10-04T05:00:00+00:00", "03:00:00", "UYST", 120]
	])
};