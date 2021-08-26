export const letters = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

export const convert = (input:string) => {
    console.log("Convert called")
    const digits:number[] = String(input).split('').map(Number)
    let lists:string[][] = [[]]
    for (let digit of digits) {
        lists.push(letters[digit])
    }

    if (lists.length === 1)
        return lists.flat()

    let result:string[][] = [lists[0]]
    for (let i=1; i<lists.length; i++) {
        result = cartesianProduct(result, lists[i])
    }
    return result
}

const cartesianProduct = (a:string[][], b:string[]) => {
    let result:string[][] = []

    for (let i in a) {
        for (let j in b) {
            let word:string[] = [...a[i]]
            word.push(b[j])
            result.push(word)
        }
    }
    return result
}
