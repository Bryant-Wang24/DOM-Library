const div = dom.create("<div>NewLife</div>")
console.log();

dom.after(test, div);

const div3 = dom.create('<div id = "parent">hi</div>')
dom.wrap(test, div3)

dom.remove(div)

dom.empty(empty)

dom.attr(test, 'title', 'Hi,I am Bob')
const title = dom.attr(test, 'title')
console.log(`title:${title}`);

dom.text(test, '你好，这是新的内容')
dom.text(test)
console.log(dom.text(test));

dom.style(test, { border: '1px solid red', color: 'blue' })
dom.style(test, 'border')
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => { dom.style(n, 'color', 'red') })

console.log(dom.index(s2))
