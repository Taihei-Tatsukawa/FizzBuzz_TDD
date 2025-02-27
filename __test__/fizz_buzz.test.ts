import { FizzBuzz } from '../src/fizz_buzz';

test('入力値が0より小さい場合、エラー', () => {
    // Given
    const invalidInput = -1;
    const errorMessage = '0以上100以下の整数を入力してください';

    // When
    const output:any = FizzBuzz(invalidInput);
    
    // Then
    expect(output).toBe(errorMessage);
});

test('入力値が100より大きい場合、エラー', () => {
    // Given
    const invalidInput = 101;
    const errorMessage = '0以上100以下の整数を入力してください';

    // When
    const output:any = FizzBuzz(invalidInput);
    
    // Then
    expect(output).toBe(errorMessage);
});

test('入力値が整数出ない場合、エラー', () => {
    // Given
    const invalidInput = 1.1;
    const errorMessage = '0以上100以下の整数を入力してください';

    // When
    const output:any = FizzBuzz(invalidInput);
    
    // Then
    expect(output).toBe(errorMessage);
});

test('入力した値を返す', () => {
    // Given
    const input = 1;

    // When
    const output:any = FizzBuzz(input);
    
    // Then
    expect(output).toBe(input);
});

test('入力した値が3の倍数を返す', () => {
    // Given
    const input = 3;

    // When
    const output:any = FizzBuzz(input);
    
    // Then
    expect(output).toBe("Fizz");
});

test('入力した値が5の倍数を返す', () => {
    // Given
    const input = 10;

    // When
    const output:any = FizzBuzz(input);
    
    // Then
    expect(output).toBe("Buzz");
});

test('入力した値が15の倍数を返す', () => {
    // Given
    const input = 15;

    // When
    const output:any = FizzBuzz(input);
    
    // Then
    expect(output).toBe("FizzBuzz");
});