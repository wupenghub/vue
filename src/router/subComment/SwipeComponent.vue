<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
            <img :src="item.imgurl" alt="" :class="{'full': isfull}">
        </mt-swipe-item>
    </mt-swipe>

</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
        },
        props: [
            'imgList',
            'isfull'
        ]
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            text-align: center;
            img {
                height: 100%;
            }
        }
    }
    .full {
        width: 100%;
    }
</style>