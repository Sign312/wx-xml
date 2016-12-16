# wx-xml
node.js微信开发时解析和转化xml数据

### 使用方法:

* 安装

        npm install wx-xml --save
        
* 引入
       
        var WxXml = require('wx-xml')
       
* xml转化为js对象

        WxXml.xml2js(xml)
       
* js对象转化为xml

        WxXml.js2xml(js)
        
        WxXml.js2xml(js,false)  //若不需要"<![CDATA[...]]>"
       
#### dependence:

node.js V4+