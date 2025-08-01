function profitDiff(priceDiff, amount, cost) {
  return priceDiff * amount / cost;
}

const assets = [
  { name: '胡姬酒肆', priceDiff: 8, amount: 3120, cost: 25, },
  { name: '皮影戏院', priceDiff: 9, amount: 3120, cost: 27, },
  { name: '华清池', priceDiff: 16, amount: 3000, cost: 30, },
  { name: '游艺馆', priceDiff: 23, amount: 2880, cost: 45, },
  { name: '杏园', priceDiff: 36, amount: 2760, cost: 61, },
  { name: '雁塔广场', priceDiff: 55, amount: 2640, cost: 75, },
  { name: '大慈恩寺', priceDiff: 68, amount: 2520, cost: 110, },
];

let max = 0;
let maxProfitName = ''; 

for (let i = 0; i < assets.length; i++) {
  const item = assets[i];
  const diff = profitDiff(item.priceDiff, item.amount, item.cost);
  if (diff > max) {
    max = diff;
    maxProfitName = item.name;
  }
}

const profits = assets.map(item => {
  return { name: item.name, diff: profitDiff(item.priceDiff, item.amount, item.cost) };
});

console.log('最大收益项: ', maxProfitName);
console.log('最大收益值: ', max);
console.log('明细: ', profits);