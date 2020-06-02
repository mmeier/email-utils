import { Response } from './response.model';

export const checkEmails = async (event: any): Promise<Response> => {
	return {
		statusCode: 200,
		body: 'Hello World'
	}
}
