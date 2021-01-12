const BDUtil = _hmt ? _hmt : {
  push: function(arr = []) {
    console.log('事件丢失', arr)
  }
}

export default class BaiduVitals {
  /**
   * 百度 - 事件统计
   * @param {
   * cate: string,
   * action: string,
   * opt_label: string,
   * opt_label: string,
   * opt_value?: string,
   * } event 参数
   */
  static trackEvent(event = {
    cate: '',
    action: '',
    opt_label: '',
    opt_value: '',
  }) {
    const safeEvent = event || {}
    const eventId = '_trackEvent'
    const cate = safeEvent.cate || ''
    const action = safeEvent.action || ''
    const opt_label = safeEvent.opt_label || ''
    const opt_value = safeEvent.opt_value || ''
    const array = [
      eventId,
      cate,
      action,
      opt_label
    ]

    if (opt_value && typeof opt_value === 'string' && opt_label.length) {
      array.push(opt_value)
    }

    if (isDev()) {
      console.log('百度事件统计 =>', array)
    }

    BDUtil.push(array)
  }

  /**
   * 百度 - 页面统计
   * @param {string} pageUrl 当前页面url
   */
  static trackPageview() {
    const url = document.location.href || ''
    if (isDev()) {
      console.log('百度页面page统计 =>', url)
    }
    BDUtil.push(['_trackPageview', url])
  }
}

function isDev() {
  if (process.env.REACT_APP_RX_NAME === 'dev' || process.env.REACT_APP_RX_NAME === 'devprod') {
    return true
  }
  return false
}