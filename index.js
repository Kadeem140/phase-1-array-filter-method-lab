// Code your solution here

const Name = "Bobby"

function findMatching(drivers, Name){
    const filteredNames = drivers.filter((driver) =>{
        return driver == Name
    })
    return filteredNames
}

function fuzzyMatch(drivers, name){
    console.log(name.split(''), "split")
    const splitString = name.split('')
    const filteredDrivers = drivers.filter((driver) =>{
        return driver == splitString
    })
    return filteredDrivers
}

function matchName(driverArrOfObj, arg){
    
    const driverNames = driverArrOfObj.forEach(element => {
        return [element.name]
    });
    // driverNames.filter((driver) => {
    //     return driver == arg
    // })
    if(driverNames == arg){
        return driverNames
    }
    // return driverNames


}

