import Vue from 'vue'
import './CustomLayout.css'

const CustomLayout: Vue.ComponentOptions<Vue> = {
  data() {
    return {
      activeLink: '', // 初始为空字符串
    }
  },
  mounted() {
    // 在客户端的 mounted 钩子中设置 activeLink
    (this as any).activeLink = (this as Vue).$route.path
  },
  watch: {
    '$route.path': function (newPath) {
      // 当路由路径变化时，更新激活的链接
      (this as any).activeLink = newPath
    },
  },
  render() {
    return (
      <div class="custom-layout">
        <nav class="sidebar">
          <nuxt-link to="/js" class={{ active: (this as any).activeLink === '/js' }}>
            JS
          </nuxt-link>
          <nuxt-link
            to="/css"
            class={{ active: (this as any).activeLink === '/css' }}
          >
            CSS
          </nuxt-link>
          <nuxt-link
            to="/scss"
            class={{ active: (this as any).activeLink === '/scss' }}
          >
            SCSS
          </nuxt-link>
          <nuxt-link
            to="/less"
            class={{ active: (this as any).activeLink === '/less' }}
          >
            LESS
          </nuxt-link>
        </nav>
        <div class="content p-4">
          <nuxt />
        </div>
      </div>
    )
  },
}

export default CustomLayout
