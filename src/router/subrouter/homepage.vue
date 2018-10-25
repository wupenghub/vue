<template>
    <div id="tabbar" class="mui-control-content mui-active">
        <swipe-componet :imgList="imageList" :isfull="true"></swipe-componet>
        <!--九宫格图片-->
        <ul class="mui-table-view mui-grid-view mui-grid-9 white">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/homePage/newsList">
                    <img src="../../images/menu1.png"/>
                    <div class="mui-media-body">
                        新闻资讯
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/homePage/photosList?artId=0">
                    <img src="../../images/menu2.png"/>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/homePage/goodList">
                    <img src="../../images/menu3.png"/>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png"/>
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png"/>
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png"/>
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>
<script>
    import swipeComponet from '../subComment/SwipeComponent.vue'
    import json from './homePage.json'
    export default {
        data() {
            return {
                imageList:[]
            }
        },
        created(){
            this.imageList = json
        },
        components: {
            'swipe-componet': swipeComponet
        }

    }
</script>
<style lang="scss" scoped>
    .white {
        background: white;
    }

    .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
        border: none;
        img {
            width: 60px;
            font-size: 14px;
        }
    }
</style>