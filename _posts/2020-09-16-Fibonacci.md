---
layout: post
title: "피보나치 수 5"
date: 2020-09-16 14:32:29 +0900
categories: Algorithm
tags: [DFS]
---

# BOJ 10870

# 피보나치수 5

### 코드

```c++
#include <iostream>
using namespace std;
int fib(int num)
{
    if (num == 0)
    {
        return 0;
    }
    else if (num == 1)
    {
        return 1;
    }

    else
    {
        return fib(num - 1) + fib(num - 2);
    }
}

int main()
{

    int n;
    cin >> n;
    cout << fib(n) << endl;

    return 0;
}
```
