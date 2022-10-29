const jwt = require('jsonwebtoken');
// const { errorsAll, returnForError } = require('../../utils/errors');
require('dotenv').config()


const single = (resource, authUser) => (
  {
    id_user: resource.id_user,
    fullname: resource.fullname,
    password: resource.password,
  });

const singles = async (resource) => {

  const rest = await resource.map((item) => {
    delete item.password
    return item
  }
  )

  return rest
}


const register = async (resource) => {

  const rest = []
  const data = resource;



  // // console.log(rest)
  // const rest = await data.map((item) => {
  //   delete item.password
  //   return item
  // })




  const token = jwt.sign({
    id_user: resource.id,
    nickname: resource.nickname,
    email: resource.email,
    rol_id: resource?.rol_id,
    status: resource?.status,
    ranking: resource?.ranking,
    avatar: resource?.avatar

  }, process.env.TOKEN_SECRET)


  for (let index = 0; index < data.length; index++) {

    if (data[index].password) {
      delete data[index].password
    }
    rest.push(data[index])
  }

  // const token = jwt.sign({
  //   id_user: rest[0].id_user,
  //   fullname: rest[0].fullname,
  //   email: rest[0].email,
  //   id_rol: rest[0].id_rol
  // }, process.env.TOKEN_SECRET)

  const element = { token, rest, error: null }

  return element
}


const login = async (resource) => {
  console.log("🚀 ~ file: authDto.js ~ line 67 ~ login ~ resource", resource)

  const data = resource[0]
  const rest = await resource.map((item) => {
    delete item.password
    return item
  }
  )


  // const esError = await returnForError()
  const token = jwt.sign({
    id_user: rest[0]?.id_user || 0,
    fullname: rest[0]?.nickname || "yo",
    email: rest[0]?.email || "yo",
    rol_id: rest[0]?.rol_id || 2,
    status: rest[0]?.status || "golden",
    ranking: rest[0]?.status || 1,
    avatar: rest[0]?.avatar || 'https://drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b',
  }, process.env.TOKEN_SECRET)
  console.log(token)
  const element = {
    token, rest,
    //uerror: esError 
  }

  console.log("🚀 ~ file: authDto.js ~ line 88 ~ login ~ element", element)
  return element
}

module.exports = {
  single,
  singles,
  register,
  login
};