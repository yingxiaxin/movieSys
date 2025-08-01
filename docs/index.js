function calcGainDiff(priceDiff, amount, cost) {
  if (!cost) return 0;
  return priceDiff * amount / cost;
}

function getValues() {
  const valueObj = {
    hjjs: {
      name: '胡姬酒肆',
      price: { value: hjjsPrice.value || 0, cost: hjjsPriceCost.value || 0, },
      amount: { value: hjjsAmount.value || 0, cost: hjjsAmountCost.value || 0, },
      profit: { value: hjjsProfit.value || 0, cost: hjjsProfitCost.value || 0, },
      cur: { price: hjjsCurPrice.value || 0, amount: hjjsCurAmount.value || 0, profit: hjjsCurProfit.value || 0, },
    },
    pyxy: {
      name: '皮影戏院',
      price: { value: pyxyPrice.value || 0, cost: pyxyPriceCost.value || 0, },
      amount: { value: pyxyAmount.value || 0, cost: pyxyAmountCost.value || 0, },
      profit: { value: pyxyProfit.value || 0, cost: pyxyProfitCost.value || 0, },
      cur: { price: pyxyCurPrice.value || 0, amount: pyxyCurAmount.value || 0, profit: pyxyCurProfit.value || 0, },
    },
    hqc: {
      name: '华清池',
      price: { value: hqcPrice.value || 0, cost: hqcPriceCost.value || 0, },
      amount: { value: hqcAmount.value || 0, cost: hqcAmountCost.value || 0, },
      profit: { value: hqcProfit.value || 0, cost: hqcProfitCost.value || 0, },
      cur: { price: hqcCurPrice.value || 0, amount: hqcCurAmount.value || 0, profit: hqcCurProfit.value || 0, },
    },
    yyg: {
      name: '游艺馆',
      price: { value: yygPrice.value || 0, cost: yygPriceCost.value || 0, },
      amount: { value: yygAmount.value || 0, cost: yygAmountCost.value || 0, },
      profit: { value: yygProfit.value || 0, cost: yygProfitCost.value || 0, },
      cur: { price: yygCurPrice.value || 0, amount: yygCurAmount.value || 0, profit: yygCurProfit.value || 0, },
    },
    xy: {
      name: '杏园',
      price: { value: xyPrice.value || 0, cost: xyPriceCost.value || 0, },
      amount: { value: xyAmount.value || 0, cost: xyAmountCost.value || 0, },
      profit: { value: xyProfit.value || 0, cost: xyProfitCost.value || 0, },
      cur: { price: xyCurPrice.value || 0, amount: xyCurAmount.value || 0, profit: xyCurProfit.value || 0, },
    },
    ytgc: {
      name: '雁塔广场',
      price: { value: ytgcPrice.value || 0, cost: ytgcPriceCost.value || 0, },
      amount: { value: ytgcAmount.value || 0, cost: ytgcAmountCost.value || 0, },
      profit: { value: ytgcProfit.value || 0, cost: ytgcProfitCost.value || 0, },
      cur: { price: ytgcCurPrice.value || 0, amount: ytgcCurAmount.value || 0, profit: ytgcCurProfit.value || 0, },
    },
    dces: {
      name: '大慈恩寺',
      price: { value: dcesPrice.value || 0, cost: dcesPriceCost.value || 0, },
      amount: { value: dcesAmount.value || 0, cost: dcesAmountCost.value || 0, },
      profit: { value: dcesProfit.value || 0, cost: dcesProfitCost.value || 0, },
      cur: { price: dcesCurPrice.value || 0, amount: dcesCurAmount.value || 0, profit: dcesCurProfit.value || 0, },
    },
  };
  return valueObj;
}

function onClick() {
  const obj = getValues();
  const values = Object.values(obj);
  const len = values.length;
  const order = [];
  for (let i = 0; i < len; i++) {
    const item = values[i];
    const name = item.name;
    // 单价上的利润
    const priceGain = (+item.price.value) * +item.cur.amount;
    // 数量上的利润
    const amountGain = +item.cur.price * (+item.amount.value);
    // 利润上的利润
    const profitGain = +item.profit.value/100 * +item.cur.profit;
    // 总的成本
    const totalCost = +item.price.cost + +item.amount.cost + +item.profit.cost;
    // 总的收益
    const totalGain = +priceGain + +amountGain + +profitGain;
    // 每单位成本获得的收益
    const normalized = +totalGain / +totalCost;
    order.push({ name, normalized, });
  }
  order.sort(function(a, b) {
    return +b.normalized - +a.normalized;
  });
  
  const rstString = order.map(item => `${item.name}: ${item.normalized}`).join('\n');
  const result = `每单位成本获得的收益排序为:\n
${rstString}`;

  result_wrapper.innerHTML = result;
}

