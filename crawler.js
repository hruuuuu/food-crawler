// 處理爬蟲
require('dotenv').config();
const axios = require('axios');
const foodSave = require('./utils/foodSave');

const FOOD_API_URL = 'https://gw.openapi.org.tw/18463fd0-8aa7-11ea-8b2f-dfcba39a3448/6ace07502582';

const FOOD_API_KEY = {
  clientId: process.env.FOOD_CLIENT_ID,
  clientSecret: process.env.FOOD_CLIENT_SECRET,
};

const skip = 1000;
const limit = 100;

const crawler = async () => {
  const api = `${FOOD_API_URL}?client_id=${FOOD_API_KEY.clientId}&client_secret=${FOOD_API_KEY.clientSecret}&skip=${skip}&limit=${limit}`;
  const getFood = await axios.get(api);
  const foodData = getFood.data.data;
  try {
    const response = await foodSave.insertFood(foodData);
  } catch (error) {
    console.log(error);
  }
};

crawler();
