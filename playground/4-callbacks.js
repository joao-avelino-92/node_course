const dbWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1,2,3])
    }, 2000);
}

dbWorkCallback((error, result) => {
    if (error){
        return console.log(error)
    }
    console.log(result)
})