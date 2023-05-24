export const getTableRows = (rows: string[][], columns: string[]) => {
  return rows.map((row, rowInd) => row.reduce((prev: any, curr: string | boolean, ind) => {
    if(ind === 0 ) {
      prev.id = rowInd + 1
    }

    const key = columns[ind];
    if(typeof curr === 'boolean') {
      prev[key] = curr ? 1: 0
    } else {
      prev[key] = curr
    }
    return prev;
  }, {}));
};