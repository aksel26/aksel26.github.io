---
layout: post
title: "두 개 뽑아서 더하기"
date: 2020-12-26 02:31:29 +0900
categories: Algorithm
tags: [Implement]
---

# 두 개 뽑아서 더하기

### 코드

#### erase(unique) 중복제거

```c
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
vector<int> solution(vector<int> numbers)
{
    vector<int> answer;
    int i, j;

    for (i = 0; i < numbers.size(); i++)
    {

        for (j = i + 1; j < numbers.size(); j++)
        {
            int sum = numbers[i] + numbers[j];
            answer.push_back(numbers[i] + numbers[j]);
        }
    }

    sort(answer.begin(), answer.end());
    answer.erase(unique(answer.begin(), answer.end()), answer.end());
    for (i = 0; i < answer.size(); i++)
    {
        printf("%d ", answer[i]);
    }

    return answer;
}

int main()
{
    vector<int> a{2, 1, 3, 4, 1};
    solution(a);

    return 0;
}
```

<br/>
