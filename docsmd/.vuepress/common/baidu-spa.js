// 百度 SPA 统计

export default function BDPuth(path) {
  // _hmt.push(['_trackPageview', pageURL]) 必须是以"/"（斜杠）开头的相对路径
  window._hmt.push(['_trackPageview', '/#' + path])
}