(()=>{
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, current) => total + current
    );
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log('Total: ', rta);
  }
  const rta = calcTotal([100, 200, 300]);
  console.log('calcTotals', rta);
})();
