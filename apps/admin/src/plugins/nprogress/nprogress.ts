import NProgress from 'nprogress'
import './nprogress.css'

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改最小时间
  trickle: true, // 自动递增
})

export default NProgress
