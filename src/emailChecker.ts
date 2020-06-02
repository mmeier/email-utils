import { parseStringArray } from './parseStringArray';

export class EmailChecker {

	public checkEmails(request: any, requestParser: (request: any) => string[] = parseStringArray): number {
		const emails = requestParser(request);
		return emails.length;
	}
}
