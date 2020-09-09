import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:  () => ({
        articles: [
            {
                id: 1, title: 'Статья 1', content: 'Содержание статьи 1', likes: '16', views: '234'
            },
            {
                id: 2, title: 'Статья 2', content: 'Содержание статьи 2', likes: '33', views: '133',
            },
            {
                id: 3, title: 'Статья 3', content: 'Содержание статьи 3', likes: '2345', views: '45633'
            },
            {
                id: 4, title: 'Статья 4', content: 'Содержание статьи 4', likes: '456', views: '23455'
            },
            {
                id: 5, title: 'Статья 5', content: 'Содержание статьи 5', likes: '1099', views: '8888'
            },
            {
                id: 6, title: 'Статья 6', content: 'Содержание статьи 6', likes: '867', views: '8797',
            },
            {
                id: 7, title: 'Статья 7', content: 'Содержание статьи 7', likes: '565', views: '983'
            },
            {
                id: 8, title: 'Статья 8', content: 'Содержание статьи 8', likes: '453', views: '565'
            },
        ]
    }),
    mutations: {

    }
})
export default store