<template>
    <div class="comment-component">
        <h1>发表评论</h1>
        <hr>
        <textarea maxlength="120" placeholder="请输入评论内容，最大支持120个字" v-model="commentContent"></textarea>
        <mt-button type="primary" size="large" @click="publish()">发表评论</mt-button>
        <!--评论显示的列表-->
        <div class="comment-list" v-for="item in commentList">
            <div class="comment-info">
                <span>第1楼 用户：{{item.name}} 发表时间：{{item.dateTime | timeFormate}}</span>
            </div>
            <div class="comment">
                <span>
                    {{item.content}}
                </span>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadMore()">加载更多</mt-button>
        <mt-button type="danger" size="large" plain @click="clear()" style="margin-top: 8px">清空数据</mt-button>

    </div>
</template>

<script>
    import json from './comment.json'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                commentList: [],
                commentContent: "",
                pageSize: 1
            }
        },
        created() {
            console.log(this.getData());
            this.commentList = this.commentList.concat(this.getData());
        },
        methods: {
            publish() {
                if (this.commentContent.trim() == "") {
                    Toast('请输入评论内容');
                    return;
                }
                var commentItem = {};
                commentItem.name = "匿名用户";
                commentItem.content = this.commentContent;
                commentItem.dateTime = new Date();
                commentItem.pageSize = 1;
                this.commentList.unshift(commentItem);
                localStorage.setItem("commentList", JSON.stringify(this.commentList));
                this.commentContent = "";
            },
            loadMore() {
                this.pageSize++;
                if(this.getData().length == 0){
                    Toast("没有更多数据了");
                    return;
                }
                this.commentList = this.commentList.concat(this.getData());
            },
            clear() {
                localStorage.clear();
                this.commentList = localStorage.getItem("commentList");
            },
            getData() {
                var commListString = localStorage.getItem("commentList");
                var dataList = JSON.parse(commListString ? commListString : '[]');
                if (json) {
                    dataList = dataList.concat(json);
                }
                return dataList.filter(item => {
                    return item.pageSize == this.pageSize;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment-component {
        background-color: #fff;
        padding: 4px;
        h1 {
            font-size: 18px;
            font-family: "微软雅黑";
        }
    ;
        textarea {
            height: 120px;
            font-size: 16px;
            margin: 0px;
        }
        .comment-list {
            margin-top: 6px;

            .comment-info {
                background-color: #CDCDCD;
                padding: 2px 0;
                span {
                    font-size: 14px;
                    line-height: 30px;
                }
            }
            .comment {
                background-color: #fff;
                padding: 2px 0;
                span {
                    font-size: 12px;
                    line-height: 30px;
                }
            }
        }
    }
</style>