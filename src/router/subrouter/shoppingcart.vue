<template>
    <div class="goodsCart">
        <div class="mui-control-content mui-active">
            <div class="mui-card" v-for="item in goodList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="item.selected"
                                   @change="changeCartInfoSelected(item.id,item.selected)"></mt-switch>
                        <img :src="item.imageUrl">
                        <div class="info">
                            <span class="productName">{{item.productName}}</span>
                            <div class="productInfo">
                                <span class="now">￥{{item.currentPrice}}</span>
                                <div :id="'numbox'+item.id" class="mui-numbox" data-numbox-min='1' data-numbox-max='100'
                                     style="width: 110px;height: 25px;">
                                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                    <input class="mui-input-numbox" type="number"
                                           @change="changeNum(item.id)" v-model="item.productNum"/>
                                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                </div>
                                <a  @click.prevent="deleteProduct(item.id)">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 :class="{'hidden': $store.getters.hasItem}">总价格为：<span class="totalPrice">{{$store.getters.getTotalPrice}}</span></h1>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                goodList: []
            }
        },
        created() {
            this.goodList = this.$store.state.cartInfomations;
        },
        mounted() {
            mui(".mui-numbox").numbox();
        },
        methods: {
            changeCartInfoSelected(id, selected) {
                var obj = {
                    selected: selected,
                    id: id
                };
                this.$store.commit("changeCartInfo", obj);
            },
            changeNum(id) {
                var obj = {
                    productNum: mui("#numbox" + id).numbox().getValue(),
                    id: id
                };
                this.$store.commit("changeCartInfo", obj);
            },
            deleteProduct(id) {
                this.$store.commit("deleteProduct", id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goodsCart {
        overflow: hidden;
        background-color: #eeeeee;
        .mui-card {
            .mui-card-content {
                .mui-card-content-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img {
                        height: 80px;
                        width: 50px;
                        margin: 8px;
                    }
                    .info {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        .productName {
                            font-size: 12px;
                            font-weight: bold;
                        }
                        .productInfo {
                            .now {
                                font-weight: bold;
                                color: red;
                            }
                        }
                    }
                }
            }
        }
        h1 {
            font-size: 14px;
            padding: 8px;
            span {
                color: red;
            }
        }
    }

    .hidden {
        display: none;
    }
</style>