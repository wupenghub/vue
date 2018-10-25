<template>
    <div class="goodInfo">
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipeComponet :imgList="imageUrls" :isfull="false"></swipeComponet>
                </div>
            </div>
        </div>
        <div class="mui-card" v-for="item in productList" :key="item.id">
            <div class="mui-card-header">{{item.productName}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">市场价：
                        <del>￥{{item.historyPrice}}</del>&nbsp;&nbsp;&nbsp;&nbsp;销售价：<span>￥{{item.currentPrice}}</span>
                    </div>
                    <div class="count">
                        购买数量：
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'
                             style="width: 100px;height: 25px;">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <div class="btn">
                        <mt-button size="small" type="primary">立即购买</mt-button>
                        <mt-button size="small" @click="addIncart" type="danger">加入购物车</mt-button>
                    </div>

                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header mui-card-media"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>Posted on January 18, 2016</p>
                    <p style="color: #333;">{{getData}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>
    </div>
</template>

<script>
    import swipeComponet from '../subComment/SwipeComponent.vue'
    import json from './goodInfo.json'
    import productJson from './goodList.json'
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                imageUrls: [],
                productList: [],
                currentValue: 1,
                ballFlag: false,
            }
        },
        created() {
            this.imageUrls = json;
            this.productList = productJson.filter(item => {
                return item.id == this.id
            });
        },
        mounted() {
            mui(".mui-numbox").numbox()
        },
        methods: {
            add() {
                // this.$emit("change", mui(".mui-numbox").numbox().getValue() == 1 ? 2 : 1);

            },
            remove() {
                this.$emit("change", -1);
            },
            addIncart() {
                this.ballFlag = !this.ballFlag;
                var cartItem = {
                    id: this.id,
                    imageUrl: this.productList[0].imageUrl,
                    productName: this.productList[0].productName,
                    currentPrice: this.productList[0].currentPrice,
                    productNum: mui(".mui-numbox").numbox().getValue(),
                    selected: true
                };
                this.$store.commit("addProductInCart", cartItem);
            },
            beforeEnter(el) {
                el.style.transform = "translate(0, 0)";
            },
            enter(el, done) {
                el.offsetWidth;
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document
                    .getElementById("badge")
                    .getBoundingClientRect();

                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                el.style.transform = `translate(${xDist}px, ${yDist}px)`;
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el) {
                this.ballFlag = !this.ballFlag;
            },
        },
        components: {
            'swipeComponet': swipeComponet
        },
        computed:{
            getData(){
                return this.$store.state.cartInfomations.length;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goodInfo {
        .mui-card {
            .mui-card-content {
                span {
                    font-size: 14px;
                    color: red;
                    font-weight: bold;
                }
                .count {
                    margin: 5px 0;
                    text-align: left;
                }
                .btn {
                    margin: 10px 0;
                }
            }
        }
    }

    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 398px;
        left: 142px;
    }


</style>