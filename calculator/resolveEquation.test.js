const { resolveEquation } = require('./index');

describe('resolveEquation', () => {
  // --- Addition ---
  test('adds two numbers', () => {
    const result = resolveEquation(['3', '+', '5']);
    expect(result).toBe(8);
  });

  // --- Subtraction ---
  test('subtracts two numbers', () => {
    const result = resolveEquation(['10', '-', '3']);
    expect(result).toBe(7);
  });

  // --- Multiplication ---
  test('multiplies two numbers', () => {
    const result = resolveEquation(['4', 'x', '5']);
    expect(result).toBe(20);
  });

  // --- Division ---
  test('divides two numbers', () => {
    const result = resolveEquation(['10', '/', '2']);
    expect(result).toBe(5);
  });

  // --- Operator precedence ---
  test('calculates multiplication before addition (operator precedence)', () => {
    // 2 + 3 * 4 = 2 + 12 = 14
    const result = resolveEquation(['2', '+', '3', 'x', '4']);
    expect(result).toBe(14);
  });

  // --- Division by zero ---
  test('division by zero returns Infinity', () => {
    const result = resolveEquation(['5', '/', '0']);
    expect(result).toBe(Infinity);
  });

  // --- Multiple multiplications with addition ---
  test('calculates two multiplications and one addition (2 * 3 + 4 * 5 = 26)', () => {
    // 2*3=6, 4*5=20, 6+20=26
    const result = resolveEquation(['2', 'x', '3', '+', '4', 'x', '5']);
    expect(result).toBe(26);
  });

  // --- Mixed operators with correct precedence ---
  test('handles subtraction, multiplication and addition in the correct order (10 - 2 * 3 + 4 = 8)', () => {
    // 2*3=6 first, then 10-6+4=8
    const result = resolveEquation(['10', '-', '2', 'x', '3', '+', '4']);
    expect(result).toBe(8);
  });

  test('handle bigger numbers (77-27)', () => {
    const result = resolveEquation(['77','-','27']);
    expect(result).toBe(50);
  })
  
  test('handle multiplication and division (15 x 2 / 2 = 15', () => {
    const result = resolveEquation(['15', 'x', '2', '/', '2']);
    expect(result).toBe(15);
  })
});


