// Async await

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 25) {
        let user = {
          Fname: "bhavesh",
          userId: 25,
        };

        resolve(user);
      } else {
        console.log("sorry user not found");
        reject(new Error("User with ID " + id + " not found."));
      }
    }, 2000);
  });
}

function getOrderList(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userID = user.userId;
      if (userID === 25) {
        let Orderlist = [12, 23, 34];

        resolve(Orderlist);
      } else {
        console.log("sorry Orderlist not found");
        reject(new Error("sorry Orderlist not found"));
      }
    }, 2000);
  });
}

function getFirstOrderDetails(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId === 12 || orderId === 23 || orderId === 34) {
        let orderdetails = "computer";

        resolve(orderdetails);
      } else {
        console.log("sorry order not found");
        reject(new Error("sorry order " + orderId + "not found"));
      }
    }, 2000);
  });
}

async function getOrder(Uid) {
  try {
    let user = await getUser(Uid);
    console.log("User found");
    console.log("User name : " + user.Fname);

    let list = await getOrderList(user);
    console.log("OrderList found");
    console.log("orderId : " + list[0]);

    let ordernamef = await getFirstOrderDetails(list[0]);
    console.log("Ordername found");
    console.log("Order name : " + ordernamef);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

getOrder(25);
