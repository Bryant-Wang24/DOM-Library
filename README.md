# DOM封装(源码：https://github.com/Bryant-Wang24/DOM-Library/blob/master/src/dom.js)
## 增

```
创建新节点
dom.create(`<div><span>chuangjian</span></div>`)

创建弟弟节点(原节点后面新增一个节点)
dom.after(node,node2)

创建哥哥节点（原节点前面新增一个节点）
dom.before(node,node2)

新增儿子节点
dom.append(parent,son)

新增父亲节点
dom.wrap(`<div></div>`)
```

## 删
```
删除节点
dom.remove(node)

删除节点的后代
dom.empty(parent)
```

## 改
```
读写属性
dom.attr(node,'title','Hi,I am wang')

读写文本内容
dom.text(node,'你好')

读写html内容
dom.html(node,'string')

修改style
dom.style(node,{border:'1px solid blue',color:'red'})

添加class
dom.class.add(node,'red')

删除class
dom.class.remove(node,'red')

判断节点是否存在class
dom.class.has(node,'red')

添加事件监听
dom.on(node,'click',fn)

删除事件监听
dom.off(node,'click',fn)
```

## 查
```
获取标签数组
dom.find('选择器')

获取父节点
dom.parent(node)

获取子节点
dom.child(node)

获取兄弟姐妹节点
dom.siblings(node)

获取弟弟（下一个节点）
dom.next(node)

获取哥哥（上一个节点）
dom.previos(node)

遍历所有节点
dom.each(nodes,fn)

获取排行老几（也就是获取index）
dom.index(node)
```
