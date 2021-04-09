# CFStringRef

```objc
  #import <Foundation/Foundation.h>
  // 包含
  // #include <CoreFoundation/CoreFoundation.h>

  /* ARC 管理的 Foundation 对象 */
  NSString *s1 = @"string";

  /* 转换后依然由 ARC 管理释放 */
  CFStringRef cfstring = (__bridge CFStringRef)s1;

  /* 开发者手动管理的 Core Foundation 对象 */
  CFStringRef s2 = CFStringCreateWithCString(NULL, "string", kCFStringEncodingASCII);

  /* 转换后依然需要开发者手动管理释放 */
  NSString *fstring = (__bridge NSString*)s2;

```