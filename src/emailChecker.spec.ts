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

	it('should count equivalent emails as duplicates.', () => {
		const testEmails = JSON.stringify([
			'one@gmail.com',
			'One@gmail.com',
			'O.n.e@gmail.com',
			'ONE+moretext@gmail.com',
		]);

		expect(emailChecker.checkEmails(testEmails)).toEqual(1);
	});

	it('should not count empty strings as emails', () => {
		const testEmails = JSON.stringify([
			'one@gmail.com',
			'two@gmail.com',
			'',
			'four@gmail.com',
		]);

		expect(emailChecker.checkEmails(testEmails)).toEqual(3);
	});

	it('should ignore leading/trailing whitespace count empty strings as emails', () => {
		const testEmails = JSON.stringify([
			'one@gmail.com',
			'   one@gmail.com',
			'   ',
			'one@gmail.com   ',
		]);

		expect(emailChecker.checkEmails(testEmails)).toEqual(1);
	});

	it('should throw an error if there is an invalid email', () => {
		const testEmails = JSON.stringify([
			'onetwothreefour',
		]);

		expect(() => {emailChecker.checkEmails(testEmails)}).toThrow('Invalid email');
	});

	it('should throw an error if the parser does', () => {
		const dummyParser = () => {
			throw new Error('Boom!');
		}

		expect(() => {emailChecker.checkEmails('asdf', dummyParser)}).toThrow('Boom!');
	});
});
