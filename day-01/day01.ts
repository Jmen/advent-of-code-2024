export function distance(list1: number[], list2: number[]): number {
    let distance = 0;

    list1 = list1.sort();
    list2 = list2.sort();

    for (let i = 0; i < list1.length; i++) {
        distance += Math.abs(list1[i] - list2[i]);
    }

    return distance;
}

export function similarity(list1: number[], list2: number[]): number {
    let similarityTotal = 0;

    for (let i = 0; i < list1.length; i++) {
        const value = list1[i];

        similarityTotal += value * occurrences(list2, value)
    }

    return similarityTotal;
}

function occurrences(list: number[], value: number) {
    return list.filter((item) => item === value).length;
}