console.log('hello geekbang')

exports.hello = 'world'

module.exports = {
    a:1,
    b:2,
    c:3
}

setTimeout(() => {
    console.log(module.exports)
}, 2000);