import exp = require('constants');
import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
	it('should return true for a valid email', () => {
		expect(validateEmail('test@test.com')).toEqual(true);
	});

	it('should return true for emails with plus signs', () => {
		expect(validateEmail('test+test@test.com')).toEqual(true);
	});

	it('should return true for emails with periods', () => {
		expect(validateEmail('test.test@test.com')).toEqual(true);
	});

	it(`should return false if there is no '@' `, () => {
		expect(validateEmail('some random string')).toEqual(false);
	});
})
