var xml2json = require('xml2json')

function js2xml(js, cdata = true, key = 'value', root = true) {
	let xml = ''
	if (root) {
		xml = xml + '<xml>'
	}
	if (typeof js === 'object') {
		if (js instanceof Array) {
			for (let i = 0; i < js.length; ++i) {
				xml = xml + '<' + key + '>' + js2xml(js[i], cdata, key, false) + '</' + key + '>'
			}
		} else {
			let keys = Object.keys(js)
			for (let i = 0; i < keys.length; ++i) {
				let key = keys[i]
				let value = js[key]
				if (value instanceof Array) {
					xml = xml + js2xml(value, cdata, key, false)
				} else {
					xml = xml + '<' + key + '>' + js2xml(value, cdata, key, false) + '</' + key + '>'
				}
			}
		}
	} else {
		if (cdata) {
			if (typeof js === 'number') {
				xml = xml + js
			} else {
				xml = xml + '<![CDATA[' + js + ']]>'
			}
		} else {
			xml = xml + js
		}
	}
	if (root) {
		xml = xml + '</xml>'
	}
	return xml
}

function xml2js(xml) {
	return JSON.parse(xml2json.toJson(xml)).xml
}

module.exports = {js2xml, xml2js}