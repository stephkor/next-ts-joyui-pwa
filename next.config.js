/* eslint-disable @typescript-eslint/no-var-requires */
const WebpackObfuscatorPlugin = require("webpack-obfuscator");
const withPWA = require("next-pwa");

const isProduction = process.env.NODE_ENV === "production";
const runtimeCaching = require("next-pwa/cache.js");

const config = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config, { isServer, dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (!isServer && !dev) {
      config.plugins = [
        ...config.plugins,
        new WebpackObfuscatorPlugin(
          undefined, // use default: https://github.com/javascript-obfuscator/javascript-obfuscator#default-preset-high-performance
          ["static/chunks/{main,framework,polyfills,webpack}-*.js"],
        ),
      ];
    }

    return config;
  },
  // * 런타임에 환경변수 변경을 위해 추가(.env 에 환경변수 추가시 함께 추가 필수, 속성이 undefined면 빌드 에러 발생하므로 초기화 필요)
  publicRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  },
  compiler: {
    removeConsole: isProduction ? { exclude: ["error"] } : false,
  },
};

const nextConfig = withPWA({
  dest: "public",
  disable: !isProduction,
  runtimeCaching,
})(config);

module.exports = nextConfig;
