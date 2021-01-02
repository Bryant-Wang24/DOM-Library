# DOM封装
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
dom.attr(node,'title','?')

读写文本内容
dom.text(node,'?')

读写html内容
dom.html(node,'string')

更改style
dom.style(node,{border:'1px solid blue',color:'orange'})
增加类属性
dom.class.add(node,'red')
移除类属性
dom.class.rm(node,'red')
添加事件监听
dom.on(node,'click',fn)
删除事件监听
dom.off(node,'click',fn)
```
