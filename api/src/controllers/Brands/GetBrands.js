const { Op } = require("sequelize");
const { Brand } = require("../../db.js");

const getBrands = async (query) => {
  try {
    if (query.name) {
      return await Brand.findAll({
        where: { name: {[Op.iLike]: `%${query.name}%`} },
        order: [["name", "ASC"]],
      });
    }

    if(query.admin) {
      const count = await Brand.count();
      let limiter = Math.floor(count / 10);
      return await Brand.findAll({
        order: ["name"],
        limit: 10,
        offset: (query.admin <= limiter && query.admin) * 10
      });
    };

    return await Brand.findAll({
      order: [["name", "ASC"]],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBrands;
