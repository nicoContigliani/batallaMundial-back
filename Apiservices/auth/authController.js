const { User } = require('../../models');
// const { errorsAll } = require('../../utils/errors');
const authDto = require('./authDto');
const authModel = require('./authModel')


const get = async (req, res) => {
    try {
        const users = await User.findAll({

        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const save = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const register = async (req, res) => {
    try {

        const userCreate = req.body;
        const user = await authModel.register(userCreate);
        console.log("🚀 ~ file: authController.js ~ line 35 ~ register ~ user", user)
        const userRow = await authDto.register(user);
        res.status(200).json(userRow);
    } catch (error) {
        res.status(501).json(error);
    }
}
const login = async (req, res) => {
    //    await  errorsAll("todo")
    const userCreate = req.body
    const users = await authModel.login(userCreate);
    if (users.length === 0) {
        console.log(users.flat())
        // return res.status(501).json(
        //          {
        //     "id_user": 0,
        //     "email": "not user",
        //     "error": 501
        //   }
        // )
        // return res.status(500).json({ error: error.message })
        //    await errorsAll('ERROR_CODE_EMAIL')
    } else {
        // await errorsAll('-')
    }

    const userRow = await authDto.login(users.flat())
    const token = userRow;

    // console.log("🚀 ~ file: authController.js ~ line 43 ~ login ~ userRow", userRow)
    res.header('auth-token', token).json({
        ...token
    })
}

module.exports = {
    get,
    save,
    register,
    login
}