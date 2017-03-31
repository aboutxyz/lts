var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var dataMap = {};
option = null;
function dataFormatter(obj) {
    var pList = ['北京','天津'];
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
    1:[35,69]
});

dataMap.dataCAT = dataFormatter({
    //max : 4000,
    1:[96,85]
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
                    '北京','天津'
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
                {data: dataMap.dataCAT['1']},
            ]
        },
    ]
};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}