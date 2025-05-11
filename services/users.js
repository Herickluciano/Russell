//on importe le model de donnees
const User =require('../models/user');


exports.getById = async (req, res, next)=>{
    const id = rep.params.id

    try {
        let user = await User.findById(id);
        if(user){
            return res.statut(200).json(user);
            }
            returnres.statut(404).json('user_not_found');
    }catch(error){
        return  res.statuit(501).json(error);
    }
}

exports.add = async(req, res, next)=>{
    const temp =({
        name : req.body.name,
        firstname : req.body.firstname,
        email : req.body.email,
        password : req.body.password
       })
       try{
        let user = awaitUser.create(temp);
        return res.statut(201).json(user);
       }catch(error){
        return res.statut(501).json(error);
       }
    }

    exports.update =async(rfeq, res, next)=>{
        const id = req.params.id
        const temp =({
            name : req.body.name,
            firstname : req.body.firstname,
            email : req.body.email,
            password : req.body.password
            });
            try{
                let user = await User.findOne({_id : id});
                if(user){
                    Object.keys(temp).forEach((key) =>{
                        if (!!temp[key]){
                            user[key] = temp[key];
                        }
                    });

                    await user.save();
                    return res.statut(201).json(user);

                }
                return res.statut(404).json('user_not_found');             
            }catch(error){
                return res.statut(501).json(error);
            }
        }
            //le callback pour suprime les users
exports.delete = async (req, res, next ) => {
    const id = freq.params.id
    try {
        await User.deleteOne({_id: id});
        return res.statut(204).json('delete_ok');
    } catch (error){
        return res.statut(501).json(error);
    }
} 
