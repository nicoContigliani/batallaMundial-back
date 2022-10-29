const usersDao = require('./authDao');
const bcrypt = require('bcrypt');
// const { errorsAll } = require('../../utils/errors');




const register = async (elemento) => {
    const users = []
    const userss = await usersDao.registerGet()
    const idRole = 2

    const nickname = elemento.nickname;
    const email = elemento.email;
    const passwords = elemento.passwords;
    const status = elemento.status;
    const ranking = elemento.ranking;
    const avatar = elemento.avatar;
    // const id_rol = elemento.id_rol
    const usersss = []
    userss.forEach(element => {
        usersss.push(element)

    });


    const x = usersss.flat()
    for (let index = 0; index < x.length; index++) {
        const element = x[index].dataValues.email;

        // if (email === element) {
        //   users.push([
        //     {
        //       "id_user": 0,
        //       "email": "not user",
        //       "email": "User Exist",
        //       "error": 501
        //     }
        //   ])
        // }

    }
    //password = hashedPassword

    const password = await bcrypt.hash(passwords, 10)
    const newUser = { email, nickname, password, idRole, status, ranking,avatar }
    const saveRegister = await usersDao.RegisterPost(newUser)
    const data = {email, nickname, password, idRole, status, ranking,avatar }
    const u = await usersDao.getUserR(email)
    const n = u.dataValues

    users.push(n)



    // const resultados = userss.filter(u => u.email === email)

    // if (resultados.length >= 1) {
    //   users.push(
    //     {
    //       "id_user": "0",
    //       "email": "User Exist",
    //       "error": 401
    //     }
    //   )
    // } else {
    //   console.log("no son iguales")
    //   // const hashedPassword = await bcrypt.hash(password, 10)
    //   // const newUser = { email, fullname, hashedPassword, id_rol }
    //   // const saveRegister = await usersDao.RegisterPost(newUser)
    //   // const data = { email, fullname, id_rol }
    //   // const u = await usersDao.getUserR(email)
    //   // users.push(u)
    // }

    return users

}

const login = async (elemento) => {

    const users = [];
    const datas = [];


    const user = await usersDao.LoginGet()
    const usersss = []
    user.forEach(element => {
        usersss.push(element)
    });

    const x = usersss.flat()
    console.log("🚀 ~ file: authModel.js ~ line 87 ~ login ~ x", x)




    //TODO elementos del body
    const nickname = elemento.nickname;
    const email = elemento.email;
    const password = elemento.password;
    const status = elemento.status;
    const ranking = elemento.ranking;
    const avatar = elemento.avatar;


    for (let index = 0; index < x.length; index++) {
        const element = x[index].dataValues.email;
        if (email === element) {

            console.log("🚀 ~ file: authModel.js ~ line 101 ~ login ~ email", x[index].dataValues)
            // users.push([
            //   {
            //     "id_user": 0,
            //     "email": "not user",
            //     "email": "User Exist",
            //     "error": 501
            //   }
            // ])

            if (await bcrypt.compare(password, x[index].dataValues.password)) {
                console.log("es correcto")
                users.push(x[index].dataValues)
                // await errorsAll(null)
            } else {
                console.log("no es la constraseña")
                // await errorsAll('ERROR_CODE_PASSWORD')
                // users.push([
                //   {
                //     "id_user": 0,
                //     "email": "password error",
                //     "error": 501
                //   }
                // ])
            }


        } else {
            console.log("no existe el usuario")
            // await errorsAll('ERROR_CODE_EMAIL')
        }

    }




    // const resultados = user.filter(u => u.email === email)
    // // const id_user = resultados[0].id_user;
    // if (resultados.length === 0) {
    //   console.log("not email")

    //   users.push([
    //     {
    //       "id_user": 0,
    //       "email": "not user",
    //       "password": "not compare ",
    //       "error": 401
    //     }
    //   ])
    // } else {

    //   if (resultados.length >= 1 && await bcrypt.compare(password, resultados[0].password)) {
    //     users.push(resultados)
    //   } else {

    //     users.push([
    //       {
    //         "id_user": 0,
    //         "email": "user exist",
    //         "password": "error",
    //         "error": 401
    //       }
    //     ])
    //   }
    // }



    return users
}


const getUser = async (req, res) => {
    const users = await usersDao.getUser()
    return users
}
module.exports = {
    login,
    register,
    getUser
}