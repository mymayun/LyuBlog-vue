<template>
    <div class="banbox ">
      <el-carousel :interval="4000" type="card" height="260px" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in articles" :key="index">
          <router-link :to='"/detail/"+item.id' target="_blank"><img :src="item.titleImg" width="100%" alt=""><span>{{item.title}}</span></router-link>
        </el-carousel-item>
      </el-carousel>
<!--        <swiper class="swiper"  style="height: 260px;" >-->
<!--            <swiper-slide v-for="(item,index) in sliders" :key="index">
                <router-link :to="item.url" target="_blank"><img :src="item.img" width="100%" alt=""></router-link>
            </swiper-slide>-->
<!--        </swiper>-->
      <!--走马灯-->

    </div>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    import {getCarousel,getChannelArticlePos,queryByPos} from '@/api/front'
    export default {
      name: "FSwiper",
      data(){
        return{
          articles:[],
          channels : [],
          xxxx: {
            id: '',
            title:''
          },
          yyyy: {
            id: '',
            title:''
          },
          cur:''
        }
      },
      mounted() {
        queryByPos('b').then(data=>{
          this.channels=data.data

        }).catch(error=>{
          this.$message.error(error)
        })
        this.curlist(this.cur)

      },methods:{
        curlist(id){
          this.cur=id
           getCarousel().then(response=>{
            this.articles=response.data
          }).catch(error=>{
            this.$message.error(error)
          })

        }
      }
    }
   /* export default {
        name: "FSwiper",
        components:{
            Swiper,SwiperSlide
        },
        data(){
            return{
                sliders:[
                    {
                        "img": "http://shunxinblog.oss-cn-hangzhou.aliyuncs.com/file/zhaoguoshunnull.jpg",
                        url:"www.baidu.com "
                    },
                    {

                        "img": "http://shunxinblog.oss-cn-hangzhou.aliyuncs.com/2020/12/21/f6ddc4785b514b4eb5711626a65b3102.jpg",
                        url:"www.baidu.com "
                    },
                    {
                        "img": "http://shunxinblog.oss-cn-hangzhou.aliyuncs.com/2020/12/21/8525a2fd67f44882856c0596c76a558d.jpg",
                        url:"www.baidu.com "
                    }

                ],

            }
        }
    }*/
</script>

<style scoped>

</style>