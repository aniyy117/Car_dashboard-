export const CustomersList = () => {
  return fetch("https://intense-tor-76305.herokuapp.com/merchants")
    .then((res) => res.json())
    .then((res) => {
      return SortInDescendingOrderByBidAmount(res);
    })
    .catch((e) => false);
};

const SortInDescendingOrderByBidAmount = (data) => {
  return data.sort((prevCustomer, nextCustomer) => {
    return (
      Math.max.apply(
        Math,
        nextCustomer?.bids?.map(function (bid) {
          return bid.amount;
        })
      ) -
      Math.max.apply(
        Math,
        prevCustomer?.bids?.map(function (bid) {
          return bid.amount;
        })
      )
    );
  });
};
