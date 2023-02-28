const { JWT } = require('google-auth-library');
const jwt = require('jsonwebtoken');
//Se debe generar una promesa de manera manual

const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn:'30d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })
        
    

    })

}

 const renewJWT = (token = '') => {
    
    const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY);
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn:'1d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })
        
    })
    
}

module.exports = {
    generarJWT,
    renewJWT
}