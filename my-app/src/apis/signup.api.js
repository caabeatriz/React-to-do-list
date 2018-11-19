import api from '../infra/apiconfig'

export function signUpUser (user) {
    const url = '/users'

    const data = {
        name : user.name,        
        login: user.email,
        phone: user.phone,
        password: user.password,

    }    
    return api ().post(url,data)
}
