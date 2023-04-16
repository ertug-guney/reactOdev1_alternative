import axios from "./node_modules/axios";

const getData = async (user_id) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );

  console.log("user", user);
  console.log("posts", posts);
};

// getData(1);

// const getData = (user_id) => {
//   return new Promise(async (resolve, reject) => {
//     const { data: user } = await axios(
//       `https://jsonplaceholder.typicode.com/users/${user_id}`
//     );

//     const { data: posts } = await axios(
//       `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
//     );

//     resolve([user, posts]);
//     reject("Bir sorun daha oluştu!");
//   });
// };

// (async () => {
//   try {
//     const data = await getData(1);

//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// })();

export { getData };
