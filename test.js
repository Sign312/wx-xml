var WxXml = require('./wx-xml')

let a = {
	images: [
		{
			arr: [
				{
					name: 'flypie',
					sex: 2
				},
				{
					name: 'flypie2',
					sex: 2
				}
			]
		},
		{
			arr: [
				{
					name: 'flypie',
					sex: 2
				},
				{
					name: 'flypie2',
					sex: 2
				}
			]
		}
	]
}

a = WxXml.js2xml(a)

console.log(a)

a = WxXml.xml2js(a)

console.log(a)