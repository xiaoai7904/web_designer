<template>
  <div class="home">
    <desigenerPage v-if="!isMobile750"/>
    <el-alert
      v-if="isMobile750"
      title="不支持该设备"
      type="warning"
      description="目前不支持在移动设备上打开,建议切换到Google Chrome上进行操作"
      show-icon
    ></el-alert>
  </div>
</template>

<script>
// @ is an alias to /src
import desigenerPage from './desigenerPage/desigenerPage.view.vue'
import { isMobile750 } from '@/modules/utils/utils'
export default {
  name: 'home',
  components: {
    desigenerPage
  },
  data() {
    return {
      isMobile750: isMobile750
    }
  }
}
</script>


