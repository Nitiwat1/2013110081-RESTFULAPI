function showUserData({ nickname,hobby, address:{postcode}, }) {
    return `My nickname is ${nickname}, My hobby is ${hobby}
  and my postcode is ${postcode}`;
};

const user = {
    name: "Nitiwat",
    nickname: "Boss",
    hobby: "sleep",
    address: {
        province: "Bangkok",
        postcode: "10250",
    }
};

console.log(showUserData(user))

