/**
 * divide a by b
 * @param a 
 * @param b 
 * @returns 
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("divide by zero");
    }
    return a / b;
}