const emailRegEx = /^[\w\.\+]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/;

export function validateEmail(email: string): boolean {
	return !!emailRegEx.exec(email);
}
