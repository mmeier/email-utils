import { parseStringArray } from './parseStringArray';

describe('parseStringArray', () => {
	it('should parse stringified string arrays back to string arrays', () => {
		const testArray = JSON.stringify(['one', 'two', 'three']);

		expect(parseStringArray(testArray)).toEqual(['one', 'two', 'three'])
	});

	it('should throw an error if the JSON cannot be parsed', () => {
		expect(() => {parseStringArray('not valid JSON')}).toThrow('Invalid JSON');
	});

	it('should throw an error if the JSON is not an array', () => {
		const testInput = JSON.stringify({hello: 'World'})
		expect(() => {parseStringArray(testInput)}).toThrow('Invalid Request. Request must be an array.');
	});

	it('should throw an error if there are non-string values', () => {
		const testArray = JSON.stringify(['one', 2, 'three']);

		expect(() => {parseStringArray(testArray)}).toThrow('Invalid Array Argument. Expected String.');
	})

	it('should throw an error if there is no request', () => {

		expect(() => {parseStringArray(undefined)}).toThrow('Invalid Request. Request must be an array.');
	})
});
