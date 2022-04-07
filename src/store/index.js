import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userid: ''
    },
    mutations: {
        udpateuserid(state, userid) {
            state.userid = userid;
        }
    },
    actions: {},
    modules: {}
})
