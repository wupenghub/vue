<template>
    <div class="container">
        <!--顶部-->
        <mt-header fixed title="固定在顶部">
            <span slot="left">
                <mt-button icon="back" @click="goBack" v-show="flag">返回</mt-button>
            </span>
        </mt-header>
        <!--中间内容-->
        <div class="mui-content">
            <transition>
                <router-view @change="change"></router-view>
            </transition>
        </div>
        <!--底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/homePage">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shoppingCart">
                <span class="mui-icon mui-icon-email"><span class="mui-badge" id="badge">{{$store.getters.getProductCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag: false
            }
        },
        methods: {
            change(data) {
                this.productCount += data;
            },
            goBack() {
                this.$router.go(-1);
            }
        },
        created(){
            this.flag = this.$route.path == "/homePage"?false:true
        },
        watch: {
            "$route.path": function (newval) {
                if (newval == "/homePage") {
                    this.flag = false
                }else{
                    this.flag = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding-top: 40px;
        overflow-x: hidden;
        padding-bottom: 50px;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.5s ease;
        position: absolute;
    }

    .container .mint-header {
        z-index: 99;
        overflow: hidden;
    }
</style>