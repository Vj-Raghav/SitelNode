const model = require('./models')

exports.addPost = async (req, res, next) => {
    try {
        const data = await model.create(req.body)
        if(data){
            res.status(200).json({"message":"successful"})
        }
        else{
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
    } catch (err) {
        next(err)
    }
}

exports.fetchPost = async (req, res, next) => {
    try {
        const fetchData = await model.find()
        if(fetchData){
            res.status(200).json(fetchData)
        }
        else{
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
    } catch (err) {
        next(err)
    }
}
exports.getPost = async (req, res, next) => {
    try {
        const postData = await model.findById({_id:req.params.id})
        if(postData){
            res.status(200).json(postData)
        }
        else{
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
        
    } catch (err) {
        next(err)
    }
}
exports.updatePost = async (req, res, next) => {
    try {
        const updatedData = await model.updateOne({_id:req.params.id},{
            title:req.body.title,
            post:req.body.post,
            author:req.body.author,
            time:Date.now()
        })
        if(updatedData){
            res.status(200).json(updatedData)
        }
        else{
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
        
    } catch (err) {
        next(err)
    }
}


exports.deletePost = async (req, res, next) => {
    try {
        const rem = await model.deleteOne({_id:req.params.id})
        if(rem){
            res.status(200).json({"message":"deleted"})
        }
        else{
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
    } catch (err) {
        next(err)
    }
}
