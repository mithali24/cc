/**
 * Add 2 numbers
 * @param a 
 * @param b 
 * @returns 
 */
function add(a: number, b: number): number {
    return a + b;
}


/**
 * 
 * @param a subtracts a number by another
 * @param b 
 * @returns 
 */
function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;

}

function divide(a: number, b: number): number {
    return a / b;

}

function square(a: number, b: number): number {
    return a * a;
}
function cube(a: number, b: number): number {
    return a * a * a;

}
function cuberoot(a: number, b: number): number {
    return Math.cbrt(a);
}
function sqroot(a: number, b: number): number {
    return Math.sqrt(a);

}

function floor(b: number): number {
    return Math.floor(b);
}
function divide1(a: number, b: number): number {
    if (b == 0) {
        throw new Error("divide by zero");
    }
    return a / b;

}

function add2(a: number, b: number): number {
    return a + b;
}

function aa(a: number, b: number): number {
    return a;
}
function bb(a: number, b: number): number {
    return a ** b;
}