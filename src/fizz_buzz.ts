export const FizzBuzz = (input: number) => {
    const isLower0 = input < 0;
    const isHigher100 = input > 100;
    const isInteger = !Number.isInteger(input);
    if (isLower0 || isHigher100 || isInteger) {
        return '0以上100以下の整数を入力してください';
    }

    if (input % 15 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    }

    return input;
}