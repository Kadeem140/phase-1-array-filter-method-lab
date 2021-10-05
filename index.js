// Code your solution here
function findMatching( drivers, name ){
    // console.log(drivers, 'Drivers')
    const filteredNames = []
    drivers.filter( function (name){
        // console.log(name, "name")
        if(name == "Bobby"){
            filteredNames.push(name)
            console.log(filteredNames, 'Filtered String')
            return filteredNames
        }
    })
}