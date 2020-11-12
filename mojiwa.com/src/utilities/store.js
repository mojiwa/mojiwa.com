import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            theme: "dark",
        };
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
        }
    }
});

export default store;