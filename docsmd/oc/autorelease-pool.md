# Autorelease Pool 自动释放池(对象引用计数自动处理器)
是OC中的一种内存自动回收机制，支持Cocoa的引用计数的内存管理系统的对象。

## 原理
`autorelease`本质上就是延迟调用`release`。

```objc
  NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
  NSString* nsstring;
  char* cstring = "Hello CString";
  nsstring = [NSString stringWithUTF8String:cstring];
  // 这一行代码就是在给pool发送drain消息了
  [pool release];
```

## 我个人的看法
从我工作时，都是[ARC](https://en.wikipedia.org/wiki/Automatic_Reference_Counting)/[Swift-ARC](https://docs.swift.org/swift-book/LanguageGuide/AutomaticReferenceCounting.html)。

仅demo中，为了了解[MRC](https://zh.wikipedia.org/zh-hans/%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0)会写一些。

## 官方对于 自动释放池 的说法
### 1. [Apple - NSAutoreleasePool](https://developer.apple.com/documentation/foundation/nsautoreleasepool?language=occ)
### 2. [Apple - 高级内存管理编程指南](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html) 2012-07-17
应用程序内存管理是在程序运行时分配内存，使用它并在完成后释放它的过程。编写良好的程序将使用尽可能少的内存。在Objective-C中，它也可以看作是在许多数据和代码之间分配有限内存资源所有权的一种方法。完成本指南的工作后，您将拥有显式管理对象生命周期并在不再需要它们时释放它们的知识，从而可以管理应用程序的内存。

尽管通常在单个对象级别上考虑内存管理，但实际上您的目标是管理对象图。您要确保内存中没有超出实际需要的对象。

### 3. [Apple - 过渡到ARC发行说明](https://developer.apple.com/library/archive/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html)


## 参考资料
- [csdn - iOS 缓存池 对象重复使用](https://blog.csdn.net/u010856537/article/details/47301691)
- [csdn - iOS 自动释放池内存实现](https://blog.csdn.net/yuanmengong886/article/details/52783599) 2016-10-11 00:35:53
- [csdn - `iOS---NSAutoreleasePool自动释放原理及详解`](https://blog.csdn.net/Tongseng/article/details/52101476) 2016-08-03 10:53:32
- [csdn - `Objective-C Autorelease Pool 的实现原理`](https://blog.csdn.net/weixin_30723433/article/details/99760791)  2015-06-24 15:03:00
- [csdn - iOS 自动释放池一个小的面试题引发的简单学习](https://blog.csdn.net/u011217834/article/details/89668872)  2019-04-29 09:54:51
- [csdn - `iOS 运行循环-RunLoop 和 自动释放池-autoreleasepoo 笔记`](https://blog.csdn.net/shihuboke/article/details/73865028) 2017-06-28 23:16:35
- [csdn - `iOS AutoreleasePool（自动释放池子）的原理和实现`](https://blog.csdn.net/u012265444/article/details/106085672) 2020-05-12 23:09:06
- [csdn - `ios自动释放池（autoreleasepool）`](https://blog.csdn.net/tiantian1980/article/details/8715344)  2013-03-25 09:18:57
- [csdn - ]()