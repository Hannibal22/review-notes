(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{257:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),s("OutboundLink")],1),a._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),s("OutboundLink")],1),a._v("，转载请附上原文出处链接和本声明。")])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-final-域的内存语义"}},[a._v("1 final 域的内存语义")])]),s("li",[s("a",{attrs:{href:"#_2-final-域的重排序规则"}},[a._v("2 final 域的重排序规则")])]),s("li",[s("a",{attrs:{href:"#_3-写-final-域的重排序规则"}},[a._v("3 写 final 域的重排序规则")])]),s("li",[s("a",{attrs:{href:"#_4-读-final-域的重排序规则"}},[a._v("4 读 final 域的重排序规则")])]),s("li",[s("a",{attrs:{href:"#_5-final-域为引用类型"}},[a._v("5 final 域为引用类型")])]),s("li",[s("a",{attrs:{href:"#_6-为什么-final-引用不能从构造函数内“逸出”"}},[a._v("6 为什么 final 引用不能从构造函数内“逸出”")])]),s("li",[s("a",{attrs:{href:"#_7-final-语义在处理器中的实现"}},[a._v("7 final 语义在处理器中的实现")]),s("ul",[s("li",[s("a",{attrs:{href:"#_7-1-x86-处理器实现"}},[a._v("7.1 X86 处理器实现")])])])]),s("li",[s("a",{attrs:{href:"#_8-jsr-133-为什么要增强-final-的语义"}},[a._v("8 JSR-133 为什么要增强 final 的语义")])]),s("li",[s("a",{attrs:{href:"#参考"}},[a._v("参考")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"_1-final-域的内存语义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-final-域的内存语义"}},[a._v("#")]),a._v(" 1 final 域的内存语义")]),a._v(" "),s("p",[a._v("对 final 域的读和写更像是普通的变量访问。下面将介绍 final 域的内存语义。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalExample")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//普通变量")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//final 变量")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" intArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//final 是引用类型")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalExample")]),a._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//构造函数")]),a._v("\n        i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//写普通域")]),a._v("\n        j "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//写 final 域")]),a._v("\n        intArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//写 final 引用类型域步骤 1")]),a._v("\n        intArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//写 final 引用类型域步骤 2")]),a._v("\n        intArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//写 final 引用类型域步骤 3")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("writer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//写线程 A 执行")]),a._v("\n        obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//读线程 B 执行")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalExample")]),a._v(" object "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//读对象引用")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//读普通域")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//读 final 域")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("intArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//读 final 引用类型域")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_2-final-域的重排序规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-final-域的重排序规则"}},[a._v("#")]),a._v(" 2 final 域的重排序规则")]),a._v(" "),s("p",[a._v("对于 final 域，编译器和处理器要遵守两个重排序规则。")]),a._v(" "),s("ol",[s("li",[a._v("在构造函数内对一个 final 域的写入，与随后把这个被构造对象的引用赋值给一个引用变量，这两个操作之间不能重排序。")]),a._v(" "),s("li",[a._v("初次读一个包含 final 域的对象的引用，与随后初次读这个 final 域，这两个操作之间不能重排序。")])]),a._v(" "),s("h2",{attrs:{id:"_3-写-final-域的重排序规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-写-final-域的重排序规则"}},[a._v("#")]),a._v(" 3 写 final 域的重排序规则")]),a._v(" "),s("p",[a._v("写 final 域的重排序规则禁止把 final 域的写重排序到构造函数之外。这个规则的实现包含下面 2 个方面。")]),a._v(" "),s("ol",[s("li",[a._v("JMM 禁止编译器把 final 域的写重排序到构造函数之外。")]),a._v(" "),s("li",[a._v("编译器会在 final 域的写之后，构造函数 return 之前，插入一个 StoreStore 屏障。这个屏障禁止处理器把 final 域的写重排序到构造函数之外。")])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("分析"),s("code",[a._v("示例代码 FinalExample")]),a._v("中"),s("code",[a._v("writer")]),a._v("方法包含 2 个操作（省略引用类型 final 域分析）：")]),a._v(" "),s("ol",[s("li",[a._v("构造一个 FinalExample 对象")]),a._v(" "),s("li",[a._v("构造出来对象赋值给 obj")])]),a._v(" "),s("p",[a._v("假设执行顺序为：线程 A-> 线程 B")]),a._v(" "),s("ul",[s("li",[a._v("写普通域的操作被编译器重排序到了构造函数之外，读线程 B 错误地读取了普通变量 i 初始化之前的值。")]),a._v(" "),s("li",[a._v("写 final 域的操作，被写 final 域的重排序规则“限定”在了构造函数之内，读线程 B 正确地读取了 final 变量初始化之后的值")])]),a._v(" "),s("p",[a._v("实际的执行时序可能如图："),s("br")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/final-写final域的重排序规则.png",width:"550px"}})]),s("p"),a._v(" "),s("p",[s("strong",[a._v("总结为")]),a._v("：在对象引用为任意线程可见之前，对象的 final 域已经被 正确初始化过了，而普通域不具有这个保障")]),a._v(" "),s("h2",{attrs:{id:"_4-读-final-域的重排序规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-读-final-域的重排序规则"}},[a._v("#")]),a._v(" 4 读 final 域的重排序规则")]),a._v(" "),s("p",[a._v("读 final 域的重排序规则是，在一个线程中，初次读对象引用与初次读该对象包含的 final 域，JMM 禁止处理器重排序这两个操作 (注意，这个规则仅仅针对处理器)。编译器会在读 final 域操作的前面插入一个 LoadLoad 屏障")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("分析"),s("code",[a._v("示例代码 FinalExample")]),a._v("中"),s("code",[a._v("reader")]),a._v("方法包含 3 个操作（省略引用类型 final 域分析）：")]),a._v(" "),s("ol",[s("li",[a._v("初次读引用变量 obj。")]),a._v(" "),s("li",[a._v("初次读引用变量 obj 指向对象的普通域 j。")]),a._v(" "),s("li",[a._v("初次读引用变量 obj 指向对象的 final 域 i。")])]),a._v(" "),s("p",[a._v("假设执行顺序为：线程 A-> 线程 B")]),a._v(" "),s("ul",[s("li",[a._v("读对象的普通域的操作被处理器重排序到读对象引用之前。读普通域时，该域还没有被写线程 A 写入，这是一个错误的读取操作。")]),a._v(" "),s("li",[a._v("读 final 域的重排序规则会把读对象 final 域的操作“限定”在读对象引用之后，此时该 final 域已经被 A 线程初始化过了，这是一个正确的读取操作。")])]),a._v(" "),s("p",[a._v("实际的执行时序可能如图："),s("br")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/final-读final域的重排序规则.png",width:"550px"}})]),a._v(" "),s("strong",[a._v("总结为")]),a._v("：在读一个对象的 final 域之前，一定会先读包含这个 final 域的对象的引用"),s("p"),a._v(" "),s("h2",{attrs:{id:"_5-final-域为引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-final-域为引用类型"}},[a._v("#")]),a._v(" 5 final 域为引用类型")]),a._v(" "),s("p",[a._v("对于引用类型，写 final 域的重排序规则对编译器和处理器增加了如下约束:"),s("br"),a._v("\n在构造函数内对一个 final 引用的对象的成员域的写入，与随后在构造函数外把这个被构造对象的引用赋值给一个引用变量，这两个操作之间不能重排序。")]),a._v(" "),s("p",[s("code",[a._v("示例代码 FinalExample")]),a._v("中以下 3 个步骤为构造函数中对一个 final 引用的对象的成员域的写入操作，任何一个操作不可与"),s("code",[a._v("obj = new FinalExample()")]),a._v("操作重排序")]),a._v(" "),s("blockquote",[s("p",[a._v("intArray = new int[2];    //写 final 引用类型域步骤 1"),s("br"),a._v("\nintArray[0] = 1;          //写 final 引用类型域步骤 2"),s("br"),a._v("\nintArray[1] = 2;          //写 final 引用类型域步骤 3")])]),a._v(" "),s("h2",{attrs:{id:"_6-为什么-final-引用不能从构造函数内“逸出”"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-为什么-final-引用不能从构造函数内“逸出”"}},[a._v("#")]),a._v(" 6 为什么 final 引用不能从构造函数内“逸出”")]),a._v(" "),s("p",[a._v("前面提到过，写 final 域的重排序规则可以确保："),s("code",[a._v("在引用变量为任意线程可见之前，该引用变量指向的对象的 final 域已经在构造函数中被正确初始化过了")]),a._v("。"),s("br"),a._v("\n其实要得到这个效果，还需要一个保证："),s("code",[a._v("在构造函数内部，不能让这个被构造对象的引用为其他线程可见，也就是对象引用不能在构造函数中“逸出”")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalReferenceEscapeExample")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalReferenceEscapeExample")]),a._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalReferenceEscapeExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1 写 final 域")]),a._v("\n        obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//2 this 引用在此“逸出”")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("writer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FinalReferenceEscapeExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//3")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" temp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//4")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Find-Bugs 针对"),s("code",[a._v("obj = this")]),a._v("坏味道代码检测"),s("a",{attrs:{href:"http://findbugs.sourceforge.net/bugDescriptions.html#ST_WRITE_TO_STATIC_FROM_INSTANCE_METHOD",target:"_blank",rel:"noopener noreferrer"}},[a._v("静态变量在构造函数初始化问题 "),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("实际的执行时序可能如图："),s("br")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/final-final引用不能从构造函数内溢出.png",width:"550px"}})]),s("p"),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[s("strong",[a._v("总结为")]),a._v("：被构造对象的引用在构造函数"),s("strong",[a._v("不要发生")]),a._v("“逸出”问题！!")])]),a._v(" "),s("h2",{attrs:{id:"_7-final-语义在处理器中的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-final-语义在处理器中的实现"}},[a._v("#")]),a._v(" 7 final 语义在处理器中的实现")]),a._v(" "),s("p",[a._v("说明 final 语义在处理器中的具体实现。上面我们提到：")]),a._v(" "),s("ul",[s("li",[a._v("写 final 域的重排序规则会要求编译器在 final 域的写之后，构造函数 return 之前插入一个 StoreStore 障屏。")]),a._v(" "),s("li",[a._v("读 final 域的重排序规则要求编译器在读 final 域的操作前面插入一个 LoadLoad 屏障。")])]),a._v(" "),s("h3",{attrs:{id:"_7-1-x86-处理器实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-x86-处理器实现"}},[a._v("#")]),a._v(" 7.1 X86 处理器实现")]),a._v(" "),s("ul",[s("li",[a._v("由于 X86 处理器不会对写-写操作做重排序，所以在 X86 处理器中，写 final 域需要的 StoreStore 障屏会被省略掉。")]),a._v(" "),s("li",[a._v("由于 X86 处理器不会对存在间接依赖关系的操作做重排序， 所以在 X86 处理器中，读 final 域需要的 LoadLoad 屏障也会被省略掉。"),s("br"),a._v(" "),s("strong",[a._v("总结为")]),a._v("：在 X86 处理器中，final 域的读/写不会插入任何内存屏障!")])]),a._v(" "),s("h2",{attrs:{id:"_8-jsr-133-为什么要增强-final-的语义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-jsr-133-为什么要增强-final-的语义"}},[a._v("#")]),a._v(" 8 JSR-133 为什么要增强 final 的语义")]),a._v(" "),s("p",[a._v("在旧的 Java 内存模型中，一个最严重的缺陷就是线程可能看到 final 域的值会改变。比如：")]),a._v(" "),s("ul",[s("li",[a._v("一个线程当前看到一个整型 final 域的值为 0(还未初始化之前的默认值)，过一段时间之后这个线程再去读这个 final 域的值时，却发现值变为 1(被某个线程初始化之后的值)。")]),a._v(" "),s("li",[a._v("String 的值可能会改变。")])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("为了修补这个漏洞，JSR-133 专家组增强了 final 的语义。通过为 final 域增加写和读重排序规则，可以为 Java 程序员提供初始化安全保证: 只要对象是正确构造的 (被构造对象的引用在构造函数中没有“逸出”)，那么不需要使用同步 (指 lock 和 volatile 的使用) 就可以保证任意线程都能看到这个 final 域在构造函数中被初始化之后的值。")]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ul",[s("li",[a._v("《Java 并发编程的艺术》")])])])}),[],!1,null,null,null);t.default=e.exports}}]);