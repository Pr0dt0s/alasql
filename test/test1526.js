
if (typeof exports === 'object') {
	var assert = require('assert');
	var alasql = require('..');
}

const test = '1526'; // insert test file number

describe('Test ' + test + ' - Alasql Exceptions', function () {

	it('A) Should error when trying to read a non-existent file (Callback).', function () {

		alasql("SELECT RECORDSET a from CSV('./test/test1526.csv')", (_data,err) => {
			if (err) {
				assert.ok(err);
			} else {
				assert.fail(`Should return an error, returned data instead`);
			}
		});
	});

	it('B) Should error when using a non-existent function (Callback).', function () {
		alasql("SELECT meani(1.3)", (_data,err) => {
			if (err) {
				assert.ok(err);
			} else {
				assert.fail(`Should return an error, returned data instead`);
			}
		});
	});

	it('C) Should error when using bad sintax (Callback).', function () {
		alasql("SELECT1 AS ONE", (_data,err) => {
			if (err) {
				assert.ok(err);
			} else {
				assert.fail(`Should return an error, returned data instead`);
			}
		});
	});

	it('D) Should throw error when trying to read a non-existent file (promise).', async function () {
		try {
			let _data = alasql.promise("SELECT RECORDSET a from CSV('./test/test1526.csv')");
			assert.fail(`Should throw an error, returned data instead`);
		} catch (error) {
			assert.ok(error);
		}
	});

	it('E) Should throw error when using a non-existent function (promise).', async function () {
		try {
			let _data = alasql.promise("SELECT meani(1.3)");
			assert.fail(`Should throw an error, returned data instead`);
		} catch (error) {
			assert.ok(error);
		}
	});

	it('F) Should throw error when using bad sintax (promise).', async function () {
		try {
			let _data = alasql.promise("SELECT1 AS ONE");
			assert.fail(`Should throw an error, returned data instead`);
		} catch (error) {
			assert.ok(error);
		}
	});
});
