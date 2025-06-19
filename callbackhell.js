//  🎯 Project Goal
// You want to simulate a dashboard that:
// 1️⃣ Fetches a user (by ID)
// 2️⃣ Fetches that user’s list of orders
// 3️⃣ Fetches the details of the first order
// 4️⃣ Displays the final details

function getUser(id, getlist) {
  setTimeout(() => {
    if (id === 25) {
      let user = {
        Fname: "bhavesh",
        userId: 25,
      };

      getlist(user);
    } else {
      console.log("sorry user not found");
    }
  }, 2000);
}

function getOrderList(user, getForder) {
  setTimeout(() => {
    let userID = user.userId;
    if (userID === 25) {
      let Orderlist = [12, 23, 34];

      getForder(Orderlist);
    } else {
      console.log("sorry user not found");
    }
  }, 2000);
}

function getFirstOrderDetails(orderId, orderdata) {
  setTimeout(() => {
    if (orderId === 12 || orderId === 23 || orderId === 34) {
      let orderdetails = "computer";

      orderdata(orderdetails);
    } else {
      console.log("sorry order not found");
    }
  }, 2000);
}

getUser(25, (user) => {
  console.log("User Found");
  console.log("User name : " + user.Fname);

  getOrderList(user, (Orderlist) => {
    console.log("Order List Found");
    console.log("Order Id  : " + Orderlist[0]);
    let getID = Orderlist[0];

    getFirstOrderDetails(getID, (orderdata) => {
      console.log("Order Item Found");
      console.log("Order Name " + orderdata);
    });
  });
});
