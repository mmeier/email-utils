import { parseStringArray } from './parseStringArray';

export class EmailChecker {

	public checkEmails(request: any, requestParser: (request: any) => string[] = parseStringArray): number {
		const emails = requestParser(request);

		const emailSet = new Set<string>();

		emails.forEach(email => emailSet.add(email));

		return emailSet.size;
	}
}
