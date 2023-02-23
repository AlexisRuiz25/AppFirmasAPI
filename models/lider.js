const { Schema, model } = require('mongoose')

const LiderSchema = Schema({

    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio'],
    },
    
    celular: {
        type: String,
    },

    cedula:{
        type:String,
    },

    municipio:{
        type:String,
    },


});

LiderSchema.methods.toJSON = function () {
    const { _id,...data } = this.toObject();
    data.id=_id;
    return data;
}

module.exports = model('Lider',LiderSchema);
