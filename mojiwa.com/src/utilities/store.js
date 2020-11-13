import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            theme: "dark",
            currentPage: "",
        };
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
    }
});

export default store;