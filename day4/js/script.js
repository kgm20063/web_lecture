const price = ["2000", "1000", "3000", "5000", "4000"];
function getWonPrice(pricelist) {
  //   const temp = [];
  //   for (let i = 0; i < pricelist.length; i++) {
  //     if (Number(pricelist[i]) > 1000) {
  //       temp.push(pricelist[i] + "원");
  //     }
  //   }
  //   return temp;
  const isOverThousand = pricelist.filter(
    (item) => Number(item) > 1000
    //     if (Number(item) > 1000) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     return Number(item) > 1000;
    // }
  );
  isOverThousand.sort();
  return isOverThousand.map((item) => item + "원");
}

const result = getWonPrice(price);
console.log(result);
