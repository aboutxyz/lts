var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var dataMap = {};
option = null;
function dataFormatter(obj) {
    var pList = ['宁波外运泛海','宁波港兴','宁波哲辉','外运箱运','宁波外运海运','宁波泛洋','宁波中远物流','宁波泛洲','宁波东南物流','宁波外运海港','宁波托浦船务','宁波豪捷','宁波利丰','宁波沛华运通','宁波汎华','浙远宁波货运','宁波雅戈尔','宁波一洲','宁波 甬通订舱中心','宁波简达','宁波五矿物流','宁波斯姆士船务代理有限公司','宁波兴港','浙江邦泰','宁波开源','宁波上海诚泰','宁波上海海尊','宁波集运物流部','宁波美航物流','宁波亚细亚','宁波中外运明州','宁波上海甲申','嘉兴外运','深圳 华鑫宁波','宁 波明州海运','宁波外代新华箱运部','福州大元','金诚物流','航都','宁波泛洋船务部'];
    var temp;
	for (var month = 1; month <= 1; month++) {
		temp = obj[month];
		for (var i = 0, l = temp.length; i < l; i++) {
			obj[month][i] = {
                name : pList[i],
                value : temp[i]
			}
		}
    return obj;
	}
}

dataMap.dataCKA = dataFormatter({
    //max : 60000,
    1:[0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 94, 0, 0, 2, 2, 2, 0]
});

dataMap.dataCPS = dataFormatter({
    //max : 4000,
    1:[0, 156, 0, 42, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 471, 0, 0, 0, 0, 248, 0, 0, 0, 0, 0, 0, 1, 3, 2, 366, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0]
});


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: false,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2016-01-01', '2016-02-01', '2016-03-01', '2016-04-01', '2016-05-01', '2016-06-01', '2016-07-01', '2016-08-01', '2016-09-01', '2016-10-01', '2016-11-01', '2016-12-01'
				// print [str(date(2016, i, 1)) for i in range(1,13)]
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getMonth()+1;
                }
            }
        },
        title: {
            subtext: '数据来自LTS'
        },
        tooltip: {
        },
        legend: {
            x: 'right',
            data: ['CKA','CAT','NEAX','PAN NKT1','SITC NJ1','SITC NA1', 'EASNSP','SCT', 'CTI', 'NT1', 'CHS','CPS', 'CPF'],
			// print [i.encode("utf-8") for i in collection.distinct("航线")]
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                    '宁波外运泛海','\n宁波港兴','宁波哲辉','\n外运箱运','宁波外运海运','\n宁波泛洋','宁波中远物流','\n宁波泛洲','宁波东南物流','\n宁波外运海港','宁波托浦船务','\n宁波豪捷','宁波利丰','\n宁波沛华运通','宁波汎华','\n浙远宁波货运','宁波雅戈尔','\n宁波一洲','宁波 甬通订舱中心','\n宁波简达','宁波五矿物流','\n宁波斯姆士船务代理有限公司','宁波兴港','\n浙江邦泰','宁波开源','\n宁波上海诚泰','宁波上海海尊','\n宁波集运物流部','宁波美航物流','\n宁波亚细亚','宁波中外运明州','\n宁波上海甲申','嘉兴外运','\n深圳 华鑫宁波','宁 波明州海运','\n宁波外代新华箱运部','福州大元','\n金诚物流','航都','\n宁波泛洋船务部'
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'TEU'
            }
        ],
        series: [
			{name: 'CKA', type: 'bar'},
			{name: 'CAT', type: 'bar'},
			{name: 'NEAX', type: 'bar'},
            {name: 'EASNSP', type: 'bar'},
			{name: 'SITC NJ1', type: 'bar'},
			{name: 'PAN NKT1', type: 'bar'},
            {name: 'SITC NA1', type: 'bar'},
			{name: 'SCT', type: 'bar'},		
			{name: 'CTI', type: 'bar'},
			{name: 'NT1', type: 'bar'},
			{name: 'CHS', type: 'bar'},	
			{name: 'CPS', type: 'bar'},	
			{name: 'CPF', type: 'bar'},
        ]
    },
    options: [
        {
            title: {text: '2016年1月份出货量'},
            series: [
                {data: dataMap.dataCKA['1']},
                {data: dataMap.dataCPS['1']},
            ]
        },
    ]
};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}