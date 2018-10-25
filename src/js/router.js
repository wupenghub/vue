import VueRouter from 'vue-router';
import homePage from '../router/subrouter/homepage.vue';
import member from '../router/subrouter/member.vue';
import search from '../router/subrouter/search.vue';
import shoppingCart from '../router/subrouter/shoppingcart.vue';
import newsList from '../router/news/newsList.vue';
import newsInfo from '../router/news/newsInfo.vue';
import photosList from '../router/photos/photoList.vue'
import goodList from '../router/good/goodList.vue'
import goodInfo from '../router/good/goodInfo.vue'

var vueRouter = new VueRouter({
    routes: [
        {path: "/", redirect: "/homePage"},
        {
            path: '/homePage', component: homePage
        },
        {
            path: '/search', component: search
        },
        {
            path: '/member', component: member
        },
        {
            path: '/shoppingCart', component: shoppingCart
        },
        {
            path: '/homePage/newsList', component: newsList
        },
        {
            path: '/homePage/newsInfo', component: newsInfo
        },
        {
            path: '/homePage/photosList', component: photosList
        },
        {
            path: '/homePage/goodList', component: goodList
        },
        {
            path: '/homePage/goodInfo/:id', component: goodInfo, name: 'goodInfo'
        }
    ],
    linkActiveClass: "mui-active"
});
export default vueRouter