const subjectService = require('../service/subject.service')

const listAll = ((req, res) =>{
    res.send(subjectService.listAll())
})

const listSpec = ((req, res) =>{
    const code = subjectService.listSpec(req.params.id)
    if(code == 404){
        res.statusCode = code
        res.send('id não encontrado')
    } else {
        res.send(code)
    }
})

const create = ((req, res) =>{
    if(req.body.name && req.body.workload && req.body.teacherName) {
    subjectService.create(req.body)
    
    res.send('created')
    } else {
        res.statusCode = 404
        res.send('não foi possível criar, verifique todos os dados necessários')
    }
})

const remove = ((req, res) =>{
    const code = subjectService.remove(req.params.id)
    res.statusCode = code
    if(code == 404){
        res.send('id não encontrado, nada foi deletado')
    } else {
        res.send('deletado')
    }
})

const updt = ((req, res) =>{
    const code = subjectService.updtSub(req.params.id, req.body)
    res.statusCode = code
    if(code == 404){
        res.send('id não encontrado')

    } else {
        res.send('atualizado')
    }
})

module.exports = {
    listAll,
    listSpec,
    create,
    remove,
    updt
}