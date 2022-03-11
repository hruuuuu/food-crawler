// 處理資料庫
const connection = require('./database');

const insertFood = (foodData) => {
  foodData.forEach(async (food) => {
    const { name, weight, unit, calories, protein, dietaryFiber, fat, carbohydrate, iconUrl } = food;
    const sql = `INSERT IGNORE INTO goals.food (name, weight, unit, calories, protein, dietaryFiber, fat, carb, iconUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [response, fields] = await connection.execute(sql, [name, weight, unit, calories, protein, dietaryFiber, fat, carbohydrate, iconUrl]);
    return response;
  });
};

module.exports = {
  insertFood,
};
