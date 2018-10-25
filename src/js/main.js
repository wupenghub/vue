// 引入vue.js
import Vue from 'vue';
import appVue from '../router/app.vue'

// 引入mint-ui
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui';

Vue.use(MintUI);

// 引入mui插件
import '../lib/mui/css/mui.min.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/js/mui.min.js'

//引入vue-router
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Vuex from 'vuex'

Vue.use(Vuex);
var cartList = JSON.parse(localStorage.getItem("shortCart") ? localStorage.getItem("shortCart") : "[]");

var store = new Vuex.Store({
    state: {
        cartInfomations: cartList,
    },
    mutations: {
        addProductInCart(state, cartProductObj) {
            var flag = false;
            state.cartInfomations.some(function (item) {
                if (cartProductObj.id == item.id) {
                    item.productNum += parseInt(cartProductObj.productNum);
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                state.cartInfomations.push(cartProductObj);
            }
            localStorage.setItem("shortCart", JSON.stringify(state.cartInfomations));
        },
        changeCartInfo(state, obj) {
            state.cartInfomations.some(function (item) {
                if (item.id == obj["id"]) {
                    for (var name in obj) {
                        item[name] = obj[name];
                    }
                    return true;
                }
            });
            localStorage.setItem("shortCart", JSON.stringify(state.cartInfomations));
        },
        deleteProduct(state, id) {
            var index = 0;
            state.cartInfomations.some(function (item) {
                if (item.id == id) {
                    return true;
                }
                index++;
            });
            state.cartInfomations.splice(index, 1);
            localStorage.setItem("shortCart", JSON.stringify(state.cartInfomations));
        }
    },
    getters: {
        getProductCount(state) {
            var count = 0;
            state.cartInfomations.forEach(function (item) {
                count += item.productNum;
            });
            return count;
        },
        getTotalPrice(state) {
            var totalPrice = 0;
            state.cartInfomations.forEach(function (item) {
                if (item.selected) {
                    totalPrice += item.currentPrice * item.productNum
                }
            })
            return totalPrice;
        },
        hasItem(state){
            return state.cartInfomations.length == 0
        }
    }
});

import vueRouter from './router.js'

//导入 vue-resource
import VueResource from 'vue-resource';
import moment from 'moment'

Vue.use(VueResource);
Vue.filter("timeFormate", function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    //过滤的规则，即将dataStr数据按pattern规则进行转换，将结果进行返回
    return moment(dateStr).format(pattern);
});
Vue.http.options.root = 'http://v.juhe.cn/toutiao/';
var vue = new Vue({
    el: "#app",
    render: function (createElement) {
        return createElement(appVue);
    },
    router: vueRouter,
    store
});

