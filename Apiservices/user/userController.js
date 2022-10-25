const { User } = require('../../models')
const { Role } = require('../../models')

const userDto = require('./userDto');
const userModel = require('./userModel')

const datas = []

const get = async (req, res) => {
    try {
      
     
        const user = await userModel.getUser();
        console.log("🚀 ~ file: userController.js ~ line 14 ~ get ~ user", user)
        const userRow = await userDto.formatAlls(user)
        return res.status(200).json({
            data: userRow,
            status: 200
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getId = async (req, res) => {
    const data = req.params;
    console.log("🚀 ~ file: userController.js ~ line 28 ~ getId ~ data", data)

    try {
         const user = await userModel.getUserId(data);
        const userRow = await userDto.formatSingle(user)
         return res.json({
             data: userRow,
             status: 200
         });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const save = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateS = async (req, res) => {

    try {
        // const user = await User.create(req.body);
        const data = req.params.data;
        const dataBody = req.body;


        const everything = { ...dataBody, data }
        const userUpdate = await userModel.updateUser(everything);
        datas.push(data)
        // return res.status(200).json({
        //     user,
        // });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    try {
        const datax = { data: datas[0] }
        const user = await userModel.getUserId(datax);
        const userRow = await userDto.formatSingle(user)
        return res.status(200).json({
            data: userRow,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const deleteUser = async (req, res) => {
    const data ={ data:req.params};

    try {
        const user = await userModel.deleteuser(data);
        // const userRow = await userDto.formatSingle(user)
        // return res.json({
        //     data: userRow,
        //     status: 200
        // });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}





module.exports = {
    get,
    getId,
    save,
    updateS,
    deleteUser
}