test('入力が数値でないならエラー', () => {
    // Given
    const invalidInput = '文字列';
    const errorMessage = '0以上100以下の整数を入力してください';

    // When
    const output:any = FizzBuzz(invalidInput);
    
    // Then
    expect(output).toBe(errorMessage);

});