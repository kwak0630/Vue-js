<template>
  <transition>
    <div class="modal-wrap"
         v-if="visible">
      <!-- v-bind:list=:boardListItem"-->
      <div class="modal-inner">
        <div class="modal-content">
          <button type="button" @click="close" class="close">닫기</button>
          <div class="modal-header">
            <h3 class="subject">제목{{ modalData.subject }}</h3>
            <div class="info">
              <span>작성자{{ modalData.name }}</span>
              <span>날짜{{ modalData.date }}</span>
            </div>
          </div>
          <div class="modal-body">
            <div class="thumb">이미지{{ modalData.imgsrc }}</div>
            <p class="description">설명{{ modalData.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'ModalView',
  props: [
    'visible',
    'modalData'
  ],
  methods: {
    close: function () {
      this.$emit('close');
    },
  }
};
</script>

<style lang="scss" scoped>
.modal-wrap{
  &:before{
    content:'';
    position:fixed;top:0;left:0;
    width:100%;height:100%;
    background:rgba(0, 0, 0, 0.65);
  }
  .modal-inner{
    position:fixed;top:50%;left:50%;
    transform:translate(-50%, -50%);
    width:500px;
    background:#f7f7f7;
    border-radius:15px;
    padding:60px 30px 30px;
  }
  .modal-content{
    overflow-y:scroll;
    height:400px;
    text-align:left;
    &::-webkit-scrollbar{
      display:none;
    }
    .modal-header{
      position:relative;
      margin-bottom:35px;
    }
    .subject{
      padding:10px 0 15px;
      font-size:30px;
      font-weight:700;
      border-bottom:1px solid #ddd;
    }
    .info{
      position:absolute;
      bottom:25px;
      right:5px;
      font-size:0;
      span{
        position:relative;
        display:inline-block;
        font-size:13px;
        padding-right:10px;
        color:#999999;
        &:after{
          display:inline-block;
          content:'';
          margin-left:10px;
          width:1px;
          height:10px;
          background:#ddd;
          vertical-align:middle;
        }
        &:last-child{
          padding:0;
          &:after{
            display:none
          }
        }
      }
    }
    .thumb{
    }
    .description{
      margin-top:20px;
      line-height:21px;
    }
  }
  .close{
    display:inline-block;
    position:absolute;top:20px;right:20px;
    width:30px; height:30px;
    background:transparent;
    border:1px solid #222;
    border-radius:100%;
    font-size:0;
    &:before, &:after{
      content:'';
      position:absolute;
      top:50%;
      left:50%;
      width:16px;
      height:1px;
      background-color:#222;
    }
    &:before{
      transform:translate(-50%, -50%) rotate(45deg);
    }
    &:after{
      transform:translate(-50%, -50%) rotate(135deg);
    }
  }
}
.modal-enter-active, .modal-leave-active {
  transition:.5s;
}
.modal-leave-active {
  position:absolute;
}
.modal-enter, .modal-leave-to {
  opacity:0;
}
</style>
