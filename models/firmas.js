const { Schema, model } = require('mongoose')

const FirmasSchema = Schema({

    nombre: {
       type: String,
       require: [true, 'El nombre es obligatorio'],
    },
    
    cedula:{
        type:String,
    },

    celular:{
        type:String,
    },
    
    municipio:{
        type:String,
    },
    
    direccion:{
        type:String,
    },

    recomendado: {
        type: Schema.Types.ObjectId,    //Lo usamos para relacionar el laboratorio a la sala
        ref: 'Recomendado',             //Recomendado donde se dicta el laboratorio
        require: true
    },
    fecha:{
        type:Date
    },
    lonLat:{
        type:String
    },
    codePostal:{
        type:Number
    }

});

FirmasSchema.methods.toJSON = function () {
    const { __v, estado,_id, ...data } = this.toObject();
    data.id=_id;
    return data;
}

module.exports = model('Firmas',FirmasSchema);
