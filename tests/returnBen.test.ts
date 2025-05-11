import { returnBen } from '../src/utils/returnBen';

const result = returnBen();

test('returnBen() returns "ben"', () => {
    expect(result).not.toBe('ben');
    expect(result).toBe('Ben');
});
