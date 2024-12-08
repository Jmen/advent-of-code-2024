export function numberOfSafeReports(list: number[][]): number {
    return list.filter((report) => isSafe(report)).length
}

export function numberOfSafeReportsWithRemoval(list: number[][]): number {
    return list.filter((report) => isSafeAfterRemoval(report)).length
}

function isSafeAfterRemoval(report: number[]) {
    for (let i = 0; i < report.length; i++) {
        const removalPermutation = report.filter((_, index) => index !== i);

        if (isSafe(removalPermutation)) {
            return true;
        }
    }

    return false;
}

function isSafe(report: number[]) {
    return isIncreasing(report) || isDecreasing(report);
}

function isIncreasing(list: number[]): boolean {
    for (let i = 0; i < list.length - 1; i++) {
        const difference = list[i + 1] - list[i];

        if (difference < 1 || difference > 3) {
            return false;
        }
    }

    return true;
}

function isDecreasing(list: number[]): boolean {
    for (let i = 0; i < list.length - 1; i++) {
        const difference = list[i] - list[i + 1];

        if (difference < 1 || difference > 3) {
            return false;
        }
    }
    return true;
}