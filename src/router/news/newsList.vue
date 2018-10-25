<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
            <router-link to="/homePage/newsInfo?id=15">
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'>
                        <span>发表时间:2018-10-14</span>
                        <span>点击:0次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
            this.$http.get("")
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        margin-top: 0px !important;
        .mui-table-view-cell {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>