/**
 * Parses an arbitrary input into a string array. Throws errors if the input
 * cannot be formatted as an array of strings.
 *
 * @param input Input that is expected to be a stringified array of strings.
 * @return Parsed array of strings.
 */
export function parseStringArray(input: any): string[] {

	if (!input) {
		throw new Error('Invalid Request. Request must be an array.')
	}

	let parsedInput: any;
	try {
		parsedInput = JSON.parse(input);
	} catch (err) {
		throw new Error(`Invalid JSON: ${err.message}`)
	}

	if (!Array.isArray(parsedInput)) {
		throw new Error('Invalid Request. Request must be an array.')
	}

	const values: string[] = [];

	parsedInput.forEach(value => {
		if (typeof value === 'string') {
			values.push(value);
		} else {
			throw new Error('Invalid Array Argument. Expected String.');
		}
	});

	return values;
}
