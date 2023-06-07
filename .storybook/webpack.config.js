const path = require("path");

module.exports = async ({ config }) => {
  // Encontre a regra existente para arquivos CSS
  const cssRuleIndex = config.module.rules.findIndex(
    (rule) => rule.test.toString() === "/\\.css$/"
  );

  // Se a regra existir, adicione a regra para arquivos SASS
  if (cssRuleIndex !== -1) {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../src"),
    });
  }

  return config;
};
