export function multiply(operations: string) {
    const regex = new RegExp(/mul\(\d{1,3},\d{1,3}\)/g);
    
    const matches = operations.match(regex);

    let total = 0;

    if (matches) {

        for (let i = 0; i < matches.length; i++) {
            const match = matches[i].replace('mul(', '').replace(')', '');

            const numbers = match.split(',');
            total += Number(numbers[0]) * Number(numbers[1]);
        }
    }

    return total;
}

export function multiplyWithDont(operations: string) {
    const regex = new RegExp(/do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/g);

    const matches = operations.match(regex);

    let total = 0;

    if (matches) {

        let skip = false;

        for (let i = 0; i < matches.length; i++) {
            if (matches[i] === 'do()') {
                skip = false;
                continue;
            } else if (matches[i] === 'don\'t()') {
                skip = true;
                continue;
            }

            if (skip) {
                continue;
            }

            const match = matches[i].replace('mul(', '').replace(')', '');

            const numbers = match.split(',');
            total += Number(numbers[0]) * Number(numbers[1]);
        }
    }

    return total;
}