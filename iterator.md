es6 ---> iterator迭代器

含有Iterator接口都可进行遍历操作
数据结构中含有Symbo.iterator属性就可遍历

Iterator类型：
interface IteratorResult {  
  value: any;
  done: boolean;
}
iterface Iterator {
  next: (value? any) => IteratorResult;
}
iterface Iterable {
  [Symbol.Iterator](): Iterator;
}

原生具备Iterator的数据结构：Array，String，Map，Set，argument，ListNode
Object类型并不具备Iterator接口

es6中新增了for...of遍历方式，而for...of遍历时会找到Iterator接口
因为Object类型并不具备Iterator接口所以不能使用for...of遍历

像es6中的扩展操作符，解构赋值都调用了Iterator接口来实现



