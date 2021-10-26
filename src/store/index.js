import {
    createStore
} from "vuex";
const state = {
    key: 123
}

const actions = {}

const mutations = {
    add(state) {
        state.num = state.num + 1
    },
    reduce(state) {
        state.num = state.num - 1
    }
}


export default createStore({
    state,
    mutations,
    actions
});