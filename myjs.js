

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'LPL/LCK TOP'
  },    
  legend: {
    data: ['Zeus', 'Breathe', 'Flandre', '369', 'Wayward'],
    right: 10,
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '胜率', max: 100 },
      { name: 'KDA', max: 7 },
      { name: '分均补刀', max: 10 },
      { name: '分均打钱', max: 500 },
      { name: '参团率', max: 60 },
      { name: '击杀率', max: 25 }
    ]
  },
  series: [
    {
      name: 'Top',
      type: 'radar',
      data: [
        {
          value: [83.3, 3.44, 8.35, 453, 56.1, 22.4],
          name: 'Zeus'
        },
        {
          value: [100, 4.33, 8.6, 431, 44.2, 19.2],
          name: 'Breathe'
        },
        {
          value: [66.7, 3.31, 8.12, 389	, 50.6, 12.9],
          name: 'Flandre'
        },
        {
          value: [100, 3, 7.1, 368, 57.9, 14],
          name: '369'
        },
        {
          value: [33.3, 0.82, 8.85, 363, 29, 9.7],
          name: 'Wayward'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
