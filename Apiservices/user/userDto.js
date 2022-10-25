const single = (resource, authUser) => ({
  id_user: resource.id_user,
  fullname: resource.fullname,
  password: resource.password,
});

const singles = async (resource) => {
  const rest = await resource.map((item) => {
    return item;
  });

  return rest;
};

const register = async (resource) => {
  const data = resource[0];
  const rest = await data.map((item) => {
    delete item.password;
    return item;
  });

  return rest;
};

const login = async (resource) => {
  const data = resource[0];
  const rest = await data.map((item) => {
    delete item.password;
    return item;
  });

  return rest;
};
const formatSingle = async (user) => {
//   if (user.length === undefined) {
//     console.log("todo");
//   }
  delete user.password;
  //   const userF = user[0];
  //   delete userF.password;

  return user;
};
const formatAll = async (user) => {
  console.log("🚀 ~ file: userDto.js ~ line 50 ~ formatAll ~ user", user[0]);
  const userF = user[0];
  delete userF.password;
  return (userF = user.map((item) => {
    delete item.password;
  }));
};
const formatAlls = async (user) => {
  const result = [];
  for (let index = 0; index < user.length; index++) {
    const element = user[index].dataValues;
    delete element.password;
    result.push(element);
  }

  // const userF = user[0]
  // delete userF.password
  // console.log("🚀 ~ file: userDto.js ~ line 65 ~ formatAlls ~ userF", userF)
  // return userF = user.map(item => {
  //     delete item.password
  // })
  return result;
};

module.exports = {
  single,
  singles,
  register,
  login,
  formatSingle,
  formatAll,
  formatAlls,
};
