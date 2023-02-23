const Router = require('express');
const { check } = require('express-validator');
const { crearLider,
        obtenerLider,
        actualizarLider,
        borrarLider} = require('../controllers/lider');
const { existeLiderPorId} = require('../helpers/db-validators');
const { validarJWT, validarCampos} = require('../middlewares');

const router = Router();

//Obtener todas las Lider publico
router.get('/', [validarJWT, validarCampos], obtenerLider);

//Obtener una Lider por id-publico
router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeLiderPorId),
    validarCampos
], obtenerLider);

//Crear una Lider privado - cualqiuer persona con un token valido
router.post('/', [
    //esAdminRole,
    validarJWT,
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    validarCampos
], crearLider);

//Actualizar privado token valido
router.put('/:id', [ 
    validarJWT,
    //esAdminRole,
    check('id','El id debe ser de mongo').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeLiderPorId),
    validarCampos
], actualizarLider);

//Borrar Lider solo Admin
router.delete('/:id', [
    validarJWT,
    //esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos
], borrarLider);

module.exports = router;