import { normalizeEmail } from './normalizeEmail';
import { parseStringArray } from './parseStringArray';

export class EmailChecker {

	/**
	 * Counts the number of unique emails in an array of email address. Unique is defined as emails that will be
	 * delivered to different email accounts according to GMail's routint rules.
	 *
	 * @param request A request containing an array of strings.
	 * @param requestParser Optional function that can turn the request into an array of strings.
	 */
	public checkEmails(request: any, requestParser: (request: any) => string[] = parseStringArray): number {
		const emails = requestParser(request);

		const emailSet = new Set<string>();

		emails.map(email => normalizeEmail(email)).forEach(email => emailSet.add(email));

		return emailSet.size;
	}
}
