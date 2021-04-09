# 设计模式

## 一、介绍
### 代理
1. 场景: 当一个类的某些功能需要由别的类来实现，但是又不确定具体会是哪个类实现。
1. 优势: 解耦合
1. 敏捷原则: 开放-封闭原则

### 观察者
1. 场景: 一般为model层对，controller和view进行的通知方式，不关心谁去接收，只负责发布信息。
1. 优势: 解耦合
1. 敏捷原则: 接口隔离原则，开放-封闭原则

### MVC
1. 场景: 是一中非常古老的设计模式，通过数据模型，控制器逻辑，视图展示将应用程序进行逻辑划分。
1. 优势: 使系统，层次清晰，职责分明，易于维护
1. 敏捷原则: 对扩展开放-对修改封闭

### 单例
1. 场景: 确保程序运行期某个类，只有一份实例，用于进行资源共享控制。
1. 优势: 使用简单，延时求值，易于跨模块
1. 敏捷原则: 单一职责原则

### 策略
1. 场景: 定义算法族，封装起来，使他们之间可以相互替换。
1. 优势: 使算法的变化独立于使用算法的用户
1. 敏捷原则: 接口隔离原则；多用组合，少用继承；针对接口编程，而非实现。

### 工厂
1. 场景: 工厂方式创建类的实例，多与proxy模式配合，创建可替换代理类。
1. 优势: 易于替换，面向抽象编程，application只与抽象工厂和易变类的共性抽象类发生调用关系。
1. 缺点: 是工厂类几种了所有产品的创建逻辑，一旦不能正常工作，整个系统都会受到影响，而且当产品类多结构复杂的时候，把所有创建工作放进一个工厂中来，回事后期程序的扩展较为困难。
1. 敏捷原则: DIP依赖倒置原则


## 二、使用过哪类设计模式 - 常用的
### 单例模式-设计模式 （不影响主线程，保证完成任务的作用）
1. UIApplication
1. `网络请求`: 请求可以使 view 发起，controller接收去触发显示。保证 view 消失不会影响controller
1. `网络监听状态`: 任何页面、view 都可以获取到，提供了方便。
1. `下载`: 图片下载、断点续传等。
1. `router 的封装`: 路由跳转 url/UIController
1. `音乐/视频`类app，需要在所有页面之上显示且播放的: `音乐类-网易云音乐/QQ音乐`、`直播类-斗鱼、虎牙`

### 观察者-设计模式 (1 NSNotification-通知, 2 observer-观察者(kvo-键值观察))
1. 自封装`网络监听状态`: `通知`
1. 页面`刷新/加载` - `上拉/下拉`: MJRefresh - `kvo`
1. 获取键盘高度、UITextFiled值的变化等等: `观察者 kvo`

### 工厂-设计模式 (简单、工程、抽象)
1. <del>`RXPicker`: 封装UIPicker - 可以二次封装 - 有点牵强</del>
1. `推送类封装`: 简单工厂设计模式
1. `客服SDK/百度SDK` : 根据适配模式 1. 自选 具体哪一个SDK
1. `地图SDK` : 根据适配模式 1. 自选 具体哪一个SDK

### 建造者-设计模式
1. `接口`的数据模型
1. `组件`的数据模式

### 适配器-设计模式 (@protocol)
1. `客服SDK (七鱼、小能、Udesk)`: 客服SDK @protocol 只是共性的协议
1. `地图SDK`: 百度地图、高德地图、谷歌地图
1. `播放器封装 (AVPlayer / 第三方ijkplayer)`

### 策略设计模式
1. 验证类工具: Email /  emoji / phone / userName

### 代理模式
1. UITableView / UICollectionView: `delegation`

### 装饰器-设计模式 (`category - 类别` / `delegation - 委托`)
1. UITableView / UICollectionView: `delegation`
1. 自定义组件 - xxx : 根据 `category` 实现不用的 UI/交互

### 原型 - 设计模式
1. 数据源: TableView.datasource

## 三、参考
1. [cnblogs - IOS设计模式-观察者模式](https://www.cnblogs.com/goodboy1.heyang/p/5265675.html)
1. [cnblogs - iOS开发中的几种设计模式](https://www.cnblogs.com/huangzs/p/10618173.html)
1. [简书 - iOS 设计模式](https://www.jianshu.com/u/cef9694f06a1)
1. [csdn - iOS中常用的设计模式](https://blog.csdn.net/qq_19678579/article/details/86162604)
1. [简书 - 六大设计原则之依赖倒置原则](https://www.jianshu.com/p/c3ce6762257c)
1. [简书 - KVO原理分析及使用进阶](https://www.jianshu.com/p/badf5cac0130)
