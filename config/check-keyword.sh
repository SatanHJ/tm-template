###
# @Descripttion: git提交前检查TODO等
# @Company: 思宏科技
# @version: v1.0
# @Author: HJ
# @Date: 2020-12-21 08:37:24
 # @LastEditors: HJ
 # @LastEditTime: 2020-12-24 14:30:56
###
#!/bin/bash
for FILE in `git diff --name-only --cached`; do
    # 忽略检查的文件
    if [[ $FILE == *".sh"* ]] || [[ $FILE == *".md"* ]] || [[ $FILE == *".eslintrc"* ]] || [[ ! $FILE ]] ; then
        continue
    fi
    # 匹配不能上传的关键字
    grep 'TODO\|debugger\|alert(' $FILE 2>&1 > /dev/null
    if [ $? -eq 0 ]; then
        # 将错误输出
        echo -e $FILE '文件中包含了TODO、debugger、alert其中一个关键字请删除后再提交'
        exit 1
    fi
done
exit
