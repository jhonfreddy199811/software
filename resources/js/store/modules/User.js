import axios from 'axios'

const state = {
    message: ''
}
const actions = {
    getLogin({commit}, user){
        axios.post('http://localhost/software/public/api/user/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log(response)
            if(response.data.user){
                localStorage.setItem("blog_token", response.data.access_token)
                window.location.replace('home')
            }
        })
    },

    getLogout(){
        localStorage.removeItem('blog_token');
        window.location.replace('login')
    }
}
const mutations = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
