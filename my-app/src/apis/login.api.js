import api from '../infra/apiconfig'

export function loginUser (user) {
    const url = '/users/login'

    const data = {
        login: user.email,
        password: user.password
    }    
    return api ().post(url,data)
}


