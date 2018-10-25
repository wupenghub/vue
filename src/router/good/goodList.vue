<template>
    <div class="good-list">
        <div class="good-item" v-for="item in goosList" :key="item.id" @click="goGoodDetail(item.id)">
            <img :src="item.imageUrl" alt="">
            <h1>{{item.productName}}</h1>
            <div class="goods-info">
                <span class="now">￥{{item.currentPrice}}</span>
                <span class="before">￥{{item.historyPrice}}</span>
                <div class="foot">
                    <span>{{item.descr}}</span>
                    <span>剩{{item.remaining}}件</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import json from './goodList.json'

    export default {
        data() {
            return {goosList: []}
        },
        created() {
            this.goosList = json
        },
        methods:{
            goGoodDetail(id){
                this.$router.push({ name: 'goodInfo', params: { id }})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .good-list {
        padding: 8px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .good-item {
            margin: 3px;
            padding: 2px;
            box-shadow: 0 0 4px #6d6d72;
            width: 48%;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            min-height: 299px;
            img {
                width: 100%;
            }
            .goods-info {
                background-color: #eeeeee;
                .now {
                    color: red;
                    font-size: 13px;
                    font-weight: bold;
                }
                .before {
                    text-decoration: line-through;
                    font-size: 12px;
                }
                .foot {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
            h1 {
                font-size: 14px;
            }
        }

    }
</style>