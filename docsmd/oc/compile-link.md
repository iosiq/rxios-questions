# 编译 和 链接

## 一、编译
编译又包含了：`预处理`、`编译`、`汇编`和`链接(二进制可重定位文件)`。

```mermaid
graph LR
    A(hello.c) -- -E_预处理 -->B(hello.i)
    B -- -S_编译 --> C[hello.s]
    C -- -c_汇编 --> E[hello.o]
    E -- 链接 --> F(可执行文件)
```

### 1. 预处理:
```sh
  gcc -E hello.c -o hello.i
```
- 将所有的“#define”删除，并且展开所有的宏定义
- 处理所有的条件编译指令，比如`#if`、`#ifdef`、`#elif`、`#else`、`#endif`
- 处理`#include`预编译指令，将被包含的头文件插入到该编译指令的位置。（这个过程是递归进行的，因为被包含的文件可能还包含了其他文件）
- 删除所有的注释`//`和`/* */`。
- 添加行号和文件名标识，方便后边编译时编译器产生调试用的行号心意以及编译时产生编译错误或警告时能够显示行号。
- 保留所有的`#pragma`编译指令，因为编译器需要使用它们

### 2. 编译:
```sh
  gcc -S hello.i -o hello.o
```
- 编译过程是整个程序构建的核心部分，编译成功，会将源代码由文本形式转换成机器语言，编译过程就是把预处理完的文件进行一系列词法分析、语法分析、语义分析以及优化后生成相应的汇编代码文件。

### 3. 链接:
```sh
  gcc hello.o -o hello
```

## 


## 四、参考
1. [csdn - 编译和链接的过程](https://blog.csdn.net/guaiguaihenguai/article/details/81160310)
1. [csdn - 编译与链接详解](https://blog.csdn.net/Gamebot/article/details/78301714)
1. [简书 - 编译与链接过程的思考](https://www.jianshu.com/p/2310b61e687e)