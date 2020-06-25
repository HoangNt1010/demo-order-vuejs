import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: [],
        isLogin: false
    },
    getters: {

    },
    mutations: {
        checkLogin(state) {
            if (Vue.$cookies.get('token')) {
                return state.isLogin = true
            } else {
                return state.isLogin = false
            }
            // console.log(this.state.islogin);
        },
        totalPrice(state, payload) {
            let totalPrice = parseInt(payload.totalPrice)
            totalPrice = parseInt(payload.amount) * 500
            if (parseInt(payload.amount) > 9 && payload.time !== 'evening' && payload.place === 'home') {
                totalPrice = totalPrice - (totalPrice * 0.5)
            }
            else if (parseInt(payload.amount) > 9 && payload.time === 'evening' && payload.place === 'home') {
                totalPrice = totalPrice - (totalPrice * 0.4)
            }
            else if (parseInt(payload.amount) > 9 && payload.time !== 'evening' && payload.place !== 'home') {
                totalPrice = totalPrice - (totalPrice * 0.4)
            }
            else if (parseInt(payload.amount) > 9) {
                totalPrice = totalPrice - (totalPrice * 0.3)
            }
            else if (parseInt(payload.amount) < 9 && payload.time !== 'evening' && payload.place === 'home') {
                totalPrice = totalPrice - (totalPrice * 0.2)
            }
            else if (payload.time !== 'evening') {
                totalPrice = totalPrice - (totalPrice * 0.1)
            }
            else if (payload.place === 'home') {
                totalPrice = totalPrice - (totalPrice * 0.1)
            }
            else {
                totalPrice = totalPrice
            }
            payload.totalPrice = totalPrice
            state.data.push(payload)
        }
    },
    actions: {
        checkLogin({ commit }) {
            commit('checkLogin')
        },
        totalPrice({ commit }, payload) {
            commit('totalPrice', payload)
        }
    }
})

export default store;