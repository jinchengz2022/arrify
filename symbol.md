symbol类型学习笔记

symbol不属于unll,undefined,string,boolean,function,number,array,object

symbol单独为一种类型：Symbol

Symbol类型的由来：es6发布前，对象的键名都是string，当开发人员使用时可能会声明重复的键名，这时Symbol类型就产生了，Symbol作为键名是唯一的不会重复。所以Symbol类型很接近string类型。

声明symbol类型方式：const sym = Symbol(); 可传字符串参数作文Symbol类型的标识以供辨别区分（对Symbol的描述）
ex: Symbol('s1') ---> 打印为：'Symbol(s1)'
ex: Symbol() ---> 打印为：'Symbol()'
注意：声明Symbol类型时不能使用 new 关键字

Symbol类型只能转换为string或者Boolean类型，不能与其他类型计算

每一个声明的Symbol都与其他Symbol变量不相等
ex: const s1 = Symbol(); 
    const s2 = Symbol();
    s1 === s2 ---> false


