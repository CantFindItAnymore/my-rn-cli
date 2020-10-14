import Toast from 'react-native-root-toast'

export default {
  show: (msg, options) => {
    if (toast) {
      Toast.hide(toast)
    }
    let toast = Toast.show(msg, {
      duration: Toast.durations.SHORT, // toast显示时长
      position: 0, // toast位置
      shadow: true, // toast是否出现阴影
      animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
      hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
      delay: 0, // toast显示的延时
      ...options,
      onShow: () => {
        // toast出现回调（动画开始时）
      },
      onShown: () => {
        // toast出现回调（动画结束时）
      },
      onHide: () => {
        // toast隐藏回调（动画开始时）
      },
      onHidden: () => {
        // toast隐藏回调（动画结束时）
      },
    })

    setTimeout(function () {
      Toast.hide(toast)
      typeof options === 'function' ? options && options() : null
    }, 1000)
  },
}
