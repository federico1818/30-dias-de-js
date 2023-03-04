export function findLargestPalindrome(words) {
    let palindromes = words.filter(word => {
        return [...word].reverse().join('') === word
    })

    return palindromes.length? palindromes.reduce((previous, current) => {
        return previous.length >= current.length? previous: current
    }): null
}
  