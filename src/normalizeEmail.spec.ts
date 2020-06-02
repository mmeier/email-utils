import { normalizeEmail } from './normalizeEmail';

describe('normalizeEmail', () => {
	it('should convert email to lower case', () => {
		const email = normalizeEmail('TEST@GMAIL.COM');
		expect(email).toEqual('test@gmail.com');
	})

	it('should remove periods from the username', () => {
		const email = normalizeEmail('te.st.us.er@gmail.com');
		expect(email).toEqual('testuser@gmail.com');
	})

	it(`should exclude '+' and any values after it from the user name`, () => {
		const email = normalizeEmail('testemail+spam@gmail.com');
		expect(email).toEqual('testemail@gmail.com');
	})
});
