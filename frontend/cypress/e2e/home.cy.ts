import { assertFullUrl, visit } from '../utils/visit';

describe('template spec', () => {
	it('passes', () => {
		visit('/');

		assertFullUrl('/');
	});
});
