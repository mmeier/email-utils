import { EmailChecker } from '../emailChecker';
import { parseStringArray } from '../parseStringArray';
import { Response } from './response.model';

const emailChecker = new EmailChecker();

export const checkEmails = async (event: any): Promise<Response> => {
	try {
		const count = emailChecker.checkEmails(event.body, parseStringArray);

		return {
			statusCode: 200,
			body: `${count}`,
		}
	} catch (err) {
		return {
			statusCode: 400,
			body: JSON.stringify({error: err.message})
		}
	}
}
