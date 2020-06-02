/**
 * Normalizes emails to the simplest form that would be delivered to the address according to Google's delivery rules.
 *
 * @param email An email to normalize.
 * @return Normalized email
 */
export function normalizeEmail(email: string): string {
	let [username, domain] = email.split('@');

	username = username.replace(/\./g, '');

	// Remove values after the plus sign
	const plusIndex = username.indexOf('+');
	if (plusIndex >= 0) {
		username = username.substr(0, plusIndex);
	}

	return `${username}@${domain}`.toLowerCase();
}
