export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const prepareBarChartData = (data) => {
  let finalData = [];
  let x = data.map((item) => {
    return item.title;
  });
  let ystock = data.map((item) => {
    return item.stock;
  });
  finalData.push({
    x: x,
    y: ystock,
    type: "bar",
    name: "stock",
  });
  let yprice = data.map((item) => {
    return item.price;
  });
  finalData.push({
    x: x,
    y: yprice,
    type: "bar",
    name: "price",
  });
  return finalData;
};
