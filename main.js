const generate = (length, lettersList) => {
    const listLength = lettersList.length
    let result = ''
    for (let i = 0; i < length; i++) {
        result += lettersList.charAt(Math.floor(Math.random() * listLength))
    }
    return result
}

// Example

let lettersList = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890'
let length = 20
generated = generate(length, lettersList)
console.log(`Random generated string: ${generated}`)