# mobile更新记录

## v1.0.21
[21-RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567165)
<br>
[20-RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567157)

版本: 二十一

上线日期: 2020-10-21 18:30:53

::: tip 更新内容 
上线2个版本:
1. v1.0.21 优惠券三期_新老用户
2. v1.0.20 快递100
:::

<br>

## v1.0.19
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567074)

版本: 十九

上线日期: 2020-10-21 18:30:53

::: tip 更新内容 
商品排序
1. 搜索
2. 推荐
:::

<br>

## v1.0.18
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567111)
<br>
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567136) 领用链接增加优惠劵状态

版本: 十八

上线日期: 2020-10-13 18:28:47

::: tip 更新内容 
一、优惠券二期
1. 链接领用、商品详情领用：周期、限领、文案显示(周期剩余/周期总量)

二、在理财app内，忘记弹框 跳出登录逻辑 [修复]
1. 优惠券链接领取页面 ： 点击领取，去登录时，没有弹 跳出登录弹框
2. 商品详情页：点击 优惠券出 列表弹框，点击领取，去登录时，没有弹 跳出登录弹框
:::

<br>

## v1.0.17-2
RP - none

版本: 十七-2

上线日期: 2020-09-29 18:11:03

::: tip 更新内容 
确认订单 - 大额交易 的alert提示文案
:::

<br>

## v1.0.17
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567122)

版本: 十七

上线日期: 2020-09-29 14:00:01

::: tip 更新内容 
大额金额支付rp：房产、汽车
1. 商品详情页 : 仅有一个 [立即购买]按钮
2. 确认订单页：提交订单，提示框/协议
3. 订单详情页: 显示协议
:::

<br>

## v1.0.16
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567064)

版本: 十六

上线日期: 2020-09-24 19:12:31

::: tip 更新内容
兑币赠送千币活动(超级兑换日)
<br>
1、页面控制
<br>&nbsp;&nbsp;&nbsp;(1) 标题
<br>&nbsp;&nbsp;&nbsp;(2) 底部左侧按钮 - 控制  是否显示 (2种情况哦， 有无标题的页面)
<br>&nbsp;&nbsp;&nbsp;(3) 底部 右侧按钮 - 文案 + 是否显示 + 跳转连接 (2种情况哦， 有无标题的页面)
<br>&nbsp;&nbsp;&nbsp;(4) 底部 背景色(按钮所在的 区域) - 1 单色、 2 渐变色
<br>&nbsp;&nbsp;&nbsp;(5) 页面 图片
<br>&nbsp;&nbsp;&nbsp;(6) 页面规则
<br>
2、报名
<br>
采用  是否显示、是否必填
<br><br>
注意: 有无标题页面 - 配置项也不同
<br>
一、有标题页面
<br>
xxx/#/cashgive?id=xx
<br>
<br>
二、无标题页面 (仅在理财端使用的页面)
<br>
xx/#/hdcashgive?id=xx
:::

<br>

## v1.0.15
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566872)

版本: 十五

上线日期: 2020-09-15 18:33:10

::: tip 更新内容
优惠券需求：
<br>
一、领：
1. 领取 - 优惠券活动页
2. 商品详情页 - 领取
3. 我的-优惠券 - 券码兑换

二、用:
1. 首页、搜索  商品名 前缀添加  券图标
2. 确认订单 - 使用
3. 我的-优惠券 - 使用后的各种状态
:::

<br>

## v1.0.14
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13567008)

版本: 十四

上线日期: 2020-08-13 18:39:32

::: tip 更新内容 
1、双击 底部 标签控件 (我的、分类、购物车、我的)
    (1) 首页: 置顶
    (2) 分类: 重新请求接口
    (3) 购物车: 置顶
    (4) 我的: 置顶

2、项目多个人口： 用于理财html 和 商城html
    例如: 商城 xxx/#/cashgive
             理财 xxx/app.html#/cashgive

3、订单详情页 - 状态为6的 待评价订单为 订单取消 bug

4、价格、折扣价格 显示问题：
    (1) 首页列表价格 当显示库存，且库存为0时，就不显示；
    (2) 折扣价格，当不展示库存或者库存为0时，倒计时UI 上移了，位置错误。

5、理财app。在内部web页时进入商城，app导航栏 标题栏内容全部都是错误的文案 bug

6、sku私有、东币专区
1)、sku私有属性
	千币 或 东币 有一个为 0, 那么就 不显示  该币+现金

2)、多个入口打开 东币专区页面区别
	(1) xx/#/dcoinarea?id=119 有导航栏，标题是可配的
	(2) xx/app.html#/dcoinarea?id=119 没有导航栏，app导航栏标题 是可配的，且商城没有导航栏
:::

<br>

## v1.0.13-2
RP - none

版本: 十三-2

上线日期: 2020-08-10 15:48:51

::: tip 更新内容 
兑币赠送千币: 文案微调
:::

<br>

## v1.0.13-1
RP - none

版本: 十三-1

上线日期: 2020-08-07 15:38:19

::: tip 更新内容
兑币赠送千币   
1. 换活动图
2. 添加 吸底【按钮-去兑换】，并跳转到 理财兑币页面
:::

<br>

## v1.0.13
RP - none

版本: 十三

上线日期: 2020-07-27 11:54:18

::: tip 更新内容
1. 项目安装依赖项，去掉 自动化安装依赖。如果 chromdrive等自动化测试包
2. 退款、退货 页面加载时 添加过度UI。提升用户体验
3. 我的-公网备案文案[修复]在android浏览器 滑动遮挡问题(下拉一下，再上拉后 底部foot会跟随手势上移遮挡文案)
4. 限时折扣 - [修复]倒计时结束 ，商品没有消失问题
5. 首页-公告弹框 [修复]在 pc浏览器，弹框滑块难看问题。
6. 线上隐藏源码的打包配置
7. 兑币赠千币换图  (二期活动) - 这次主要上线的需求
:::

<br>

## v1.0.12-1
[12-1_RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566908)

[12_RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566887)

[11_RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566939)

版本: 十二

上线日期: 2020-07-21 18:33:01

::: tip 更新内容
v1.0.12-1 商城公网备案文案

v1.0.12 首页公告弹框_新增频次

v1.0.11 折扣专区: 跟新UI+布局。(api 也改了)
:::

<br>

## v1.0.10
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566718)

版本: 十

上线日期: 2020-07-17 18:35:18

::: tip 更新内容
退货退款流程
:::

<br>

## v1.0.9-1
RP 没有提供

版本: 九期

上线日期: 最后一个上线时间 -> 2020-07-14 15:35:44

::: tip 更新内容
新增2个活动页面（兑币赠送千币 3天活动）
1. 商城内部打开的(有标题导航栏，返回按钮点击 返回到首页)
2. 理财app打开的(没有标题导航栏)
:::

## v1.0.9
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566797)

版本: 九期

上线日期: 2020-07-08 18:37:54

::: tip 更新内容
接入 - Udesk客服
:::

<br>

## v1.0.8
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566677)

版本: 八期

上线日期: 2020-07-07 18:36:26

::: tip 更新内容
1. 限时折扣：倒计时、标签
2. 千币+东币+现金 UI改版
<br>
&nbsp;&nbsp;&nbsp;(1)现金 
&nbsp;&nbsp;&nbsp;(2)千币+东币+现金
&nbsp;&nbsp;&nbsp;(3)千币 + 划千币
:::

<br>

## v1.0.7
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566510)

版本: 七期

上线日期:  2020-06-23 18:16:01

::: tip 更新内容
千币/东币 -> 转让申请、转让记录
:::

<br>


## v1.0.6
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566626)

版本: 六期

上线日期:  2020-06-23 18:16:01

::: tip 更新内容
UI 改版
1. 千币+现金 & 东币 + 现金
2. 确认订单 -> 增加: 3种支付方式 + UI大改版
3. 订单列表、订单详情页: UI大改版
:::

<br>

## v1.0.5
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566510)

版本: 五期

上线日期: 2020-6-15 17:00

::: tip 更新内容
运营模板配置
:::

<br>

## v1.0.4
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566268)

版本: 四期

上线日期: 2020-5-29 19:00

::: tip 更新内容
1、yooli app 引导图 更换 (3期的这个图，是我p出来的，设计重新做图了，这期改掉) <br>
2、确认订单: <br>
&nbsp;&nbsp; [1] 新增: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 支付密码 未设置的，跳转到设置支付密码页，  跳转时间 更改为 1s(以前1.5s) 之后才进行跳转，为了让看清toash <br>
&nbsp;&nbsp; [2] 修复: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (1) 用户剩余币 <  单个商品抵扣币 * 数量， <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (2) 剩余币/商品数量 向下取整 的结果 * 数量，就是 改 商品(单品*数量)的抵扣 <br>
3、订单列表/订单详情 拆单需求 (api变动:  物流接口添加 skuId ) <br>
4、我的-帮助中心 -> 我的-会员信息 显示 我的帮助，以及 帮助详情页(帮助详情页的由来是  帮助展示内容不能滚动，因为外层是滚动)
:::

<br>

## v1.0.3
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566268)

版本: 三期

上线日期: 2020-5-21 20:35:46

::: tip 更新内容
1、[确认订单]页 -> 支付密码弹框 <br>
2、yooli-app-登录引导 -> 弹框 <br>
2、修复bug： 所有输入框  隐藏 关闭按钮(vux框架 x-input 隐藏  clear按钮)
:::

<br>

## v1.0.2
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566036)

版本: 二期

上线日期: 2020-5-13 18:00

::: tip 更新内容
1、[确认订单]页 -> 支付密码弹框 <br>
2、yooli-app-登录引导 -> 弹框 <br>
3、埋点添加 : 用户[登录]就 请求用户信息接口 `有利id`、`后台id`
:::

<br>

## v1.0.1
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13566210)

版本: 一期

上线日期: 2020-5-12 18:30

::: tip 更新内容
1、商品展示价格增加代币抵扣展示 <br>
2、结算页代币默认规则优化 <br>
3、新增页面配置规则 <br>
:::

<br>

## v1.0.0-2

版本: 一期

上线日期: 2020-5-6

::: tip 更新内容
[确认订单]页 `千东币` 不可点击(不让调整使用 `币` 值)
:::

<br>

## v1.0.0-1

版本: 一期

上线日期: 2020-4-30

::: tip 更新内容
[订单详情]页 - 关闭时间文案修改
:::

<br>


## v1.0.0
[RP](http://wiki.yooli-in.com/pages/viewpage.action?pageId=13565973)

版本: 一期

上线日期: 2020-4-30

::: tip 更新内容
[商品详情]页 -> 下架商品 -> 不能点击返回问题 <br>
[商品详情]页 -> 猜你喜欢 -> 超过1页，不能点击问题 <br>
[商品详情]页 -> 高德定位 -> 关闭功能 <br>
[商品详情]页 -> 客服 -> 关闭功能 <br>
[确认订单]页 -> 千东币 -> 参与结算、调整币值 <br>
[注册]页 -> 添加协议 <br>
千东币 <br>
交易记录 <br>
店铺、自营图标 -> 全部隐藏 <br>
物流 -> 不支持 -> 不展示(隐藏功能) <br>
不支持微信 -> 打开商城 <br>
诸葛io -> <br>
等等 文案替换 <br>
:::