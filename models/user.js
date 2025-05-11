const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// importation de bcrypt
const bcrypt = require('bcrypt');

const User = new Schema ({
    name: {
        type  : String,
        trim  : true,
        required :[true, 'le nom est requis']
       },
       firstname: {
        type  : String,
        trim  : true
       },
       email: {
        type  : String,
        trim  : true,
        required :[true,'le mail est requis'],
        unique :  true, //index unique
        lowercase : true
       },
       password: {
        type  : String,
        trim  : true,
        required :[true,'le password est requis'],
        },
        catwayNumber: {
        type  : String,
        trim  : true,
        required :[true,'le catwayNumber est requis'],
       },
       catwayType: {
        type  : String,
        trim  : true,
        required :[true,'le catwayType est requis'],
       },
       catwayState: {
        type  : String,
        trim  : true,
        required :[true,'le catwayState est requis'],
       },

       catwayNumber: {
        type  : String,
        trim  : true,
        required :[true,'le catwayNumber est requis'],
       },
       clientName: {
        type  : String,
        trim  : true,
        required :[true,'le clientName est requis'],
       },
       boatName: {
        type  : String,
        trim  : true,
        required :[true,'le boatName est requis'],
       },
       startDate: {
        type  : String,
        trim  : true,
        required :[true,'le startDate est requis'],
       },
       endDate: {
        type  : String,
        trim  : true,
        required :[true,'le endDate est requis'],
       }
    },{
        //ajoutons 2 champs au document createAt et updatedAt
        timestamps: true
    })
    // Hash le mot de pASSE QUANT IL EST MODIFIE
    User.pre('save',(next)=>{
        if(!this.isModified('password')){
            returnnext();
           }
           this.password = bcrypt.hashSync(this.password,10);
           next();
    });
    module.exports = mongoose.model('User',User);


