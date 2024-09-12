const ERRORES = {
    'INVALID_ARGUMENT': {
        'code': 1,
        'message': 'Argumento invalido',
        'name': 'INVALID_ARGUMENT',
        'action': (from, detail) =>{
            console.log('El error viene de ' + from + ' \nDetalle:' + detail)
            console.log('Mandar mail de notificacion de error')
        }
    }
}


export default ERRORES