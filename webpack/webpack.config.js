const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const { env } = envVars; //dev or prod
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
