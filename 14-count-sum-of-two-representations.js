/*
 * Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
 * [[1, 2], [2,2], [1, 1], [1, 2], [2,2]]
 */
const countSumOfTwoRepresentations = (n, l, r) => {
    let result = 0; // 1
    for (let i = 1; i <= r; i++) { // 3
        let a = n - i; // 4
        if (a >= 1 && a <= r && a >= i) { // 8
            result++; // 1
        }
    }
    return result; // 1
};

/**
 * 5 => 1
 * 6 => 3
 * 7 => 4
 * 8 => 8
 * 9 => 2
 * 12 => 1
 * 
 * T14(r) = 1 + 3r(4 + 8 + 2) + 1
 * T14(r) = 1r(1) + 2
 * T14(r) = r + 1 
 * O(r) = r
 */
