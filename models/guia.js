const { Schema, model } = require('mongoose')

const GuiaSchema = Schema({

    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio'],
        unique: true
    },
    
    laboratorio: {
        type: Schema.Types.ObjectId,    //Lo usamos para relacionar el laboratorio a la sala
        ref: 'Laboratorios',                    //Sala donde se dicta el laboratorio
        require: true
    },

    ref:{ 
        type: String,
        require:true
    }
});

GuiaSchema.methods.toJSON = function () {
    const { __v, estado, ...data } = this.toObject();
    return data;
}

module.exports = model('Guia',GuiaSchema);
