<template>
 <div class="index">
   <div class="container">
     <div class="heard">
       <span>投资人：</span>
       <span>¥54321.00</span>
     </div>
     <div class="footer">
       <span>投标方：李艳</span>
       <span>手机号码：13789899723</span>
       <span>邮箱：ttt233@163.com</span>
       <span>工作室：房县薇众伍壹捌勘察设计服务工作室</span>
       <span>投标时间：2020-07-01 09:38:54</span>
       <span>投标说明：我们有大型水利工程设计经验</span>
     </div>
   </div>
 </div>
</template>

<script>
 export default {
  name: '',
  data() {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped lang="scss">

.container {
  width: 760px;
  border: 1px solid #CCCCCC;
  padding: 20px 19px;
  box-sizing: border-box;
  .footer {
    margin-top: 19px;
    span {
      display: inline-block;
      width: 33%;
      margin-bottom: 8px;
      line-height: 17px;
      font-size: 16px;
      &:nth-of-type(4) {
        width: 50%;
      }
      &:nth-of-type(5) {
        width: 50%;
        text-align: right;
        margin-left: -8px;
      }
      &:last-of-type {
        width: 100%;
      }
    }
  }
}
 
</style>
