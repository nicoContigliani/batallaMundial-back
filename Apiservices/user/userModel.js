const userDao = require('./userDao');
const bcrypt = require('bcrypt')



const getUser = async () => {
  const user = await userDao.getUser()
  return user
}

const getUserId = async (data) => {
    const user = await userDao.getUserId(data)
    return user
  }


const saveuser = async (resource) => {
  const user = await userDao.saveuser(resource)
  return user
}
const deleteuser = async(data) => {
   console.log("🚀 ~ file: userModel.js ~ line 22 ~ deleteuser ~ data", data)
   
  const user = await userDao.deleteuser(data)
//   return user
}
const updateUser = async(everything)=>{
  const user = await userDao.updateUser(everything)
  return user
}


// sequelize model:create --name Product --attributes  name_products:string, marca_products:string, conditions:string, entry: string, output: string, expires: string, costPrice: integer, costSale: integer, taxId: integer, promotionId: integer, amount: integer, amountMin: integer, amountMax: integer



// sequelize model:create --name Product --attributes prod_name:integer,prod_description:string,prod_image:string,prod_price:string

// sequelize model:create --name Product --attributes
// name_products:string, 
// marca_productsstring, 
// conditions:string, 
// entry:	DATE,
// output:	DATE,
// expires	DATE,
// cost_price:	BIGINT,
// cost_sale:	BIGINT,
// tax_id:	BIGINT,
// promotion_id:	BIGINT,
// amount:	BIGINT,
// amount_min:	BIGINT,
// amount_max:	BIGINT




module.exports = {
 getUserId,
  getUser,
  saveuser,
  deleteuser,
  updateUser
}