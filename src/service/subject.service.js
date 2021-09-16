const subsDb = []
var id = 1

const listAll = () =>{
    return subsDb
}

const listSpec = subId =>{
    const index = subsDb.findIndex(sub => subId == sub.id)
    if(index >= 0){
        return subsDb[index]
    } else {
        return 404
    }
}

const create = sub =>{
    sub.id = id
    subsDb.push(sub)
    id = id + 1
}

const updtSub = (subId, sub) =>{
    const index = subsDb.findIndex(sub => subId == sub.id)
    if(index >= 0){
        sub.id = id
        subsDb[index] = sub
        id = id + 1
    
        return 200
    } else {
        return 404
    }
}

const remove = (subId) =>{
    const index = subsDb.findIndex(sub => subId == sub.id)
    if(index >= 0){
        subsDb.splice(index, 1)
        return 200
    } else {
        return 404
    }
}

module.exports = {
    listAll,
    listSpec,
    create,
    updtSub,
    remove
}