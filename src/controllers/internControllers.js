const Intern = require("../models/zuriInternSchema")

exports.createNewIntern = (req, res) => {
    Intern.create({
        name : req.body.name,
        email : req.body.email,
        country : req.body.country
    }, (err, newIntern) => {
        if(err) {
            return res.status(500).json({message : err})
        }else {
            return res.status(200).json({message : " This Intern is now in my Domain", newIntern})
        }
    })
};

exports.fetchAllIntern =  (req, res) => {
    Intern.find({}, (err, interns) => {
        if (err) {
            return res.status(500).json({message : err})
        }else {
            return res.status(200).json({interns})
        }
    })
}

exports.updateSingleIntern = (req, res) => {
    Intern.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        email : req.body.email,
        country : req.body.country
    }, (err, interns) => {
        if (err) {
            return res.status(500).json({message : err})
        }else if (!interns){
            return res.status(404).json({message : "Intern dosen't exist"})
        }else {
            interns.save((err, newintern) => {
                if(err){
                    return res.status(400).json({message : err})
                }else {
                    return res.status(200).json({message : "Intern details formatted successfully"})
                }
            }) 
        }
    })
}

exports.deleteSingleIntern = (req, res) => {
    Intern.findByIdAndDelete(req.params.id, (err, interns) => {
        if(err) {
            return res.status(500).json({message : err})
        } 
        else if (!interns){
            return res.status(404).json({message : "Intern cannot be found" })
        }
        else {
            return res.status(200).json({message : "Intern has been deleted successfully"})
        }
    })
}