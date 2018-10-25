<template>
    <div class="news-info">
        <!--新闻详情标题-->
        <h1>新闻标题</h1>
        <!--新闻详情页发表时间和点击次数-->
        <p class="news-date-info">
            <span>发布时间：2017-12-16 12:12;12</span>
            <span>点赞个数：0个</span>
        </p>
        <!--新闻正文部分-->
        <div class="news-content">

        </div>
        <!--评论组件显示-->
        <my-comment></my-comment>
    </div>
</template>

<script>
    import myComment from '../subComment/comment.vue';

    export default {
        data() {
            return {}
        },
        components: {
            "my-comment": myComment
        }
    }
</script>

<style lang="scss" scoped>
    .news-info{
        padding: 4px;
        background-color: #fff;
        h1{
            font-size: 16px;
            text-align: center;
        }
        .news-date-info{
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }
    }
</style>