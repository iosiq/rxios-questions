# 线程

## thread

### Pthreads
```oc
#import <pthread.h>

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event {
  pthread_t thread;
  // 创建一个线程并自动执行
  pthread_create(&thread, NULL, start, NULL);
}

void *start(void *data) {
  NSLog(@"%@", [NSThread currentThread]);
  return NULL;
}

// 2015-07-27 23:57:21.689 testThread[10616:2644653] <NSThread: 0x7fbb48d33690>{number = 2, name = (null)}
```
### NSThread

## GCD

## NSOperation