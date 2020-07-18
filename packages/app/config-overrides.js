const path = require("path");

const eslintConfig = require("../../.eslintrc.js");

const useEslintConfig = configRules => config => {
    const updatedRules = config.module.rules.map(rule => {
        // Only target rules that have defined a `useEslintrc` parameter in their options
        if (rule.use && rule.use.some(use => use.options && use.options.useEslintrc !== void 0)) {
            const ruleUse = rule.use[0];
            const baseOptions = ruleUse.options;
            const baseConfig = baseOptions.baseConfig || {};
            const newOptions = {
                useEslintrc: false,
                ignore: true,
                baseConfig: { ...baseConfig, ...configRules }
            };
            ruleUse.options = newOptions;
            return rule;

            // Rule not using eslint. Do not modify.
        } else {
            return rule;
        }
    });

    config.module.rules = updatedRules;
    return config;
};

const {
    override,
    babelInclude,
    addWebpackAlias,
    removeModuleScopePlugin
} = require("customize-cra");

module.exports = override(
    removeModuleScopePlugin(),
    babelInclude([
        path.resolve("src"), // make sure you link your own source
        path.resolve(__dirname, "../shared/")
    ]),
    useEslintConfig(eslintConfig), // eslint-disable-line
    addWebpackAlias({
        "MM:shared": path.resolve(__dirname, "../shared/"),
        "@components": path.resolve(__dirname, "src/components/")
    })
);
