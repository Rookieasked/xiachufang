var Mock = require('mockjs');

Mock.mock('http//www.xiachufang.com/index',{
	'banner|4': [{
		"img":"@dataImage('500x300')",
		"tit":"@cname",
		"con":"@id"
		}],
	'summerfoods|12':[{
		"img|12":"@dataImage('60x65')",
		"summerfood":"@cname"
	}],
	'bannernav|5':[{
		"img":"@dataImage('150x100')",
		"foodname":"@cname",
		"img1":"@dataImage('150x100')",
		"foodname":"@cname",
		"img2":"@dataImage('150x100')",
		"foodname2":"@cname"
	}],
	"liuxing|12":[{
		"img":"@dataImage('230x140')",
		"foodname":"@name",
		"users":"@cname",
		"usernum":"@id"
	}]
})

var banner = {
	banner:[
	{
		"img":"@dataImage('200x100')",
		"tit":"@cname",
		"con":"id"
	},
	{
		"img":"@dataImage('200x100')",
		"tit":"@cname",
		"con":"id"
	},
	{
		"img":"@dataImage('200x100')",
		"tit":"@cname",
		"con":"id"
	},
	{
		"img":"@dataImage('200x100')",
		"tit":"@cname",
		"con":"id"
	}
	]
}
//console.log(banner)
var resou = [{
	"sortnum":"0",
	"resoufood":"@cname"
}]
