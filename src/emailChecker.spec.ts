import { EmailChecker } from './emailChecker';

describe('emailChecker', () => {
	let emailChecker: EmailChecker;

	beforeEach(() => {
		emailChecker = new EmailChecker();
	});

	it('should count the emails in a request', () => {
		const testEmails = JSON.stringify(['one@gmail.com', 'two@gmail.com', 'three@gmail.com']);

		expect(emailChecker.checkEmails(testEmails)).toEqual(3);
	});

	it('should not count duplicates', () => {
		const testEmails = JSON.stringify(['one@gmail.com', 'one@gmail.com']);

		expect(emailChecker.checkEmails(testEmails)).toEqual(1);
	});
});
