// const pool = require('../../services/database');
// const bcrypt = require('bcrypt')
const { User } = require('../../models')


const getUser = async () => {

    const response = await User.findAll({});
    // const response = await pool.query('SELECT * FROM public.users;');
    const users = response.rows;
    return users
};
const getUserR = async (data) => {

    //    const {email,fullname}=data;
    // const response = await pool.query("SELECT * FROM public.users where email ='" + data + "'");
    // const response = await User.findOne({ where: { "email": data} });

    const response = await User.findOne({
        where: { email: data },
    });
    console.log("🚀 ~ file: authDao.js ~ line 22 ~ getUserR ~ response", response)

    const users = response
    return users
};

const registerGet = async () => {
    const users = await User.findAll({});

    const user = users
    return user
}
const LoginGet = async () => {
    const users = await User.findAll({});
    console.log("🚀 ~ file: authDao.js ~ line 38 ~ LoginGet ~ users", users)
    const user = users
    return user
}
const RegisterPost = async (newUsers) => {
    let user;
    const password = newUsers.hashedPassword;
    const nickname = newUsers.nickname;
    const email = newUsers.email;
    const status = newUsers.status;
    const ranking = newUsers.ranking;
    const role_id = newUsers.idRole;

    newUsers.createdAt = new Date();
    newUsers.updatedAt = new Date();


    console.log("🚀 ~ file: authDao.js ~ line 58 ~ RegisterPost ~ newUsers", newUsers)

    try {
        // const response = await pool.query('INSERT INTO public.users (fullname, password,email,id_rol) VALUES ($1, $2,$3,$4)', [fullname, password, email, id_rol]);
        const user = await User.create(newUsers);
        return user
    } catch (error) {
        console.log(error)

    }
    return user
}


module.exports = {
    RegisterPost,
    registerGet,
    getUserR,
    getUser,
    LoginGet
}