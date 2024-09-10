function palindrome(value){
    console.log(value)
    const checkPalindrome = value.split('').reverse().join('')
    console.log(checkPalindrome,"+++")
return checkPalindrome===value
}
const palString = "yxxy"
const notPalString = "pxxy"

const isPalindrome = palindrome(palString)

console.log("palindrome", isPalindrome)
