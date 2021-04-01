import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            theme: "Dark",
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