function arrayOrObject(collection) {
    return (collection instanceof Array ? collection : Object.values(collection))

}

function myEach(collection, alerted) {
    let newCollection = arrayOrObject(collection)
    for(var i = 0; i < newCollection.length; i++){
    alerted(newCollection[i])
    }
    return collection
}

function myMap(collection, callback){
    var returned = []
    let newCollection = arrayOrObject(collection)
    for(var i = 0; i < newCollection.length; i++){
        var newArray = callback(newCollection[i])
        returned.push(newArray)
    }
    return returned;
}

function myReduce(collection, callback, acc){
    let newCollection = arrayOrObject(collection)
        if(!acc){
            console.log(collection)
            let acc
            acc = newCollection[0]
            for (let i = 0; i < newCollection.length; i++) {
                // console.log(acc, i, newCollection)
                var initialValue = callback(acc, i, newCollection)
            }
            }else{
                for (let i = 0; i < newCollection.length; i++) {
                    console.log(acc, i, newCollection)
                    var initialValue = callback(acc, i, newCollection)
            }
            return initialValue
        }  
}

function myFind(collection, callback){
    let result
    for(let item of collection){
        if(callback(item) === true){
            result = item
            break
        }
    }
    return result
}

function myFilter(collection, callback){
    for (const item of collection) {
        if (callback(item)) {
            console.log(item)
        }
    }
}
// function myFilter(collection, callback){
//     var filtered = [];
//     for(let i = 0; i < collection.length; i++) {
//         if (callback(collection[i], i, collection));
//         filtered.push(collection[i])
//     }
//      console.log(filtered);
// }


// function myFilter(collection, callback){
//     console.log(collection)
//     let filtered = []
//     for(var i = 0; i < collection.length; i++) {
//         let result = collection[i]
//         if(callback(result[i], i, result)) {
//             var newArray = callback(result[i])
//             return filtered.push(result)
//         }
//         return filtered
//     }
// }