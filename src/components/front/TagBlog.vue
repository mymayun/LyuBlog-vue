<template>
    <div class="whitebg bloglist">
        <h2 class="htitle">最新博文</h2>
        <ul>

            <li v-for="(item,index) in articleTops" :key="index.id">
                <h3 class="blogtitle"><router-link :to='"/detail/"+item.id'  arget="_blank"><b>【置顶】</b>{{item.title}}</router-link></h3>
                <span class="blogpic imgscale"><i><router-link :to='"/detail/"+item.id'>{{item.channel && item.channel.name}}</router-link></i>
                    <router-link :to='"/detail/"+item.id'>
                        <img v-if="item.titleImg==null ||item.titleImg=='' " width="130px" height="120px" src="@/assets/images/flower.jpg" alt="">
                        <img v-else  :src="item.titleImg" alt="">
                    </router-link>
                </span>
                <p class="blogtext">{{item.summary}} </p>
<!--                <p class="bloginfo">
                    <i class="avatar"><img :src="item.user.avatar"></i>
                    <span>{{item.user.nickName}}</span><span>{{item.createDate}}</span></p>-->
                <router-link :to='"/detail/"+item.id'  class="viewmore"> 阅读更多</router-link >
            </li>

            <!--单图-->
            <li v-for="(item,index) in articles" :key="index.id">
                <h3 class="blogtitle"><router-link :to='"/detail/"+item.id' target="_blank">{{item.title}}</router-link></h3>
                <span class="blogpic imgscale"><i><router-link :to='"/detail/"+item.id'>{{item.channel.name}}</router-link></i>
                    <router-link :to='"/detail/"+item.id'>
                        <img v-if="item.titleImg==null ||item.titleImg=='' " width="130px" height="120px" src="@/assets/images/flower.jpg" alt="">
                        <img v-else  :src="item.titleImg" alt="">
                    </router-link>
                </span>
                <p class="blogtext">{{item.summary}} </p>
<!--                <p class="bloginfo">
                    <i class="avatar"><img :src="item.article.user.avatar"></i>
                    <span>{{item.article.user.nickName}}</span><span>{{item.article.createDate}}</span></p>-->
                <router-link :to='"/detail/"+item.id'  class="viewmore"> 阅读更多</router-link >
            </li>
        </ul>

        <div>
            <el-pagination
                    background
                    layout="total,prev, pager, next,jumper"
                    @current-change="handleCurrentChange"
                    :current-page="articleTag.pageNo"
                    :page-size="10"
                    :total="articleTag.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>

    import {getArticle} from "@/api/articleTag";
    import {getNewBlogTop} from "@/api/front";
    export default {

        name: "NewBlog",
        data(){
            return{
                articles: [],
                articleTag:{
                     data:{
                       articleId: '',
                       tagId: '',
                       title:''
                     },
                  limit: 0,
                  offset: 0,
                  pageNo: 0,
                  pageSize: 0
                },
                articleTops: [],
                page: '',
                pageNo: 1,
                pages: '',
                total: 0,
            }
        },
        mounted(){
            this.articleTag.data.tagId=this.$route.params.id
            let  param =this.articleTag
            this.pageNo=1
            param.pageNo=this.pageNo
            this.list(param)
            getNewBlogTop().then(data=>{
                this.articleTops =data.data
            })
        },
        methods:{
            handleCurrentChange(val){
                let  param =this.articleTag
                this.pageNo=val
                param.page=this.pageNo
                this.list(param)
            },
            list(param){
                getArticle(param).then(data=>{
                  this.articles=data.data.records
                  this.articleTag.total=data.data.total
                  this.articleTag.pageNo = data.data.current
                }).catch(error=>{
                    this.$message.error(error)
                })
            },
        },
    }
</script>

<style scoped>




</style>