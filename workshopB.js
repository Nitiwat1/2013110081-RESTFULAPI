const users = [
    { nickname: 'Boss', hobby: "eat", postcode: 10111 },
    { nickname: 'B', hobby: "sleep", postcode: 10112 },
    { nickname: 'C', hobby: "gaming", postcode: 10113 },
]

for (const u of users) {
    const info = `My nickname is ${u.nickname}, my hobby is ${u.hobby} and my postcode is ${u.postcode}`;
    console.log(info);
}