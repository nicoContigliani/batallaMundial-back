// const pool = require('../../services/database');
// const bcrypt = require('bcrypt')
const { User } = require("../../models");
const { Role } = require("../../models");
const { Op } = require("sequelize");

const getUser = async (id_user) => {
  // console.log(id_user)

  try {
    const user = await User.findAll({
      include: [
        {
          model: Role,
        },
      ],
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
const getUserId = async (data) => {
  console.log("🚀 ~ file: userDao.js ~ line 28 ~ getUserId ~ data", data);
  try {

    // const dataUser = await User.findOne({
    //   include: [
    //     {
    //       model: Role,
    //     },
    //   ],
    //   [Op.or]: [
    //     { nickname: data.data },
    //     { email: data.data },
    //     { status: data.data },
    //     { ranking: data.data },
    //     { id: data.data },
    //   ],
    // });
    const dataUser = await User.findAll({
      include: [
        { model: Role }
      ],
      // where: {
      //   // id: parseInt(data.data),
      //   [Op.or]: [
      //     { nickname: data.data },
      //     { email: data.data },
      //     { status: data.data },
      //     { ranking: data.data },
      //     // { id: data.data },
      //   ],
      // }

      where: {
        [Op.or]: [
          { id: data.data },
          { status: data.data },
          { nickname: data.data },
          // { ranking: data.data }
        ]
      }


    })


    return dataUser;
  } catch (error) {
    console.log(error);
  }
};

const saveBudget = async (resource) => {
  const { concept, amount, date, id_user, type } = resource;
  try {
    const response = await pool.query(
      'INSERT INTO public.budgets (concept, amount, "date", id_user, "type") VALUES ($1,$2,$3,$4,$5)',
      [concept, amount, date, id_user, type]
    );
    budgets = response;
    return budgets;
  } catch (error) {
    console.log(error);
  }
};

const deleteuser = async (data) => {
  const datas = data.data.data;
  console.log("🚀 ~ file: userDao.js ~ line 68 ~ deleteuser ", data.data.data);
  const users = await User.destroy({
    returning: true,
    where: {
      id: parseInt(datas),
      // [Op.or]: [{
      //     fullname: datas
      // },
      // {
      //     email: datas
      // },
      // {
      //     phone: datas
      // }
      // ]
    },
  });
  console.log("🚀 ~ file: userDao.js ~ line 85 ~ deleteuser ~ users", users);
};

const updateUser = async (everything) => {
  try {
    User.update(
      {
        id: everything.id,
        role_id: everything.role_id,
        email: everything.email,
        password: everything.password,
        fullname: everything.fullname,
        phone: everything.phone,
      },
      // { returning: true, where: { id: data} }
      {
        returning: false,

        where: {
          id: parseInt(everything.data),
          [Op.or]: [
            {
              fullname: everything.data,
            },
            {
              email: everything.data,
            },
            {
              phone: everything.data,
            },
          ],
        },
      }
    );

    // const { concept, amount, date, id_user, type, id_budget } = everything;
    // id
    // role_id
    // email
    // password
    // fullname
    // phone
    // createdAt
    // updatedAt

    // budgets = response.rows
    // return budgets
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  // getBudgets,
  getUser,
  saveBudget,
  deleteuser,
  updateUser,
  getUserId,
};
