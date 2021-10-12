import axios from 'axios';
class UserService {

    async Cadastrar(data) {
        return axios({
            url: 'http://192.168.0.5:3000/usuario/cadastrar',
            method: 'post',
            timeout: 5000, 
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }) 
    }
}
 const userService = new UserService()
 export default userService