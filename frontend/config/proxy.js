const prefix = process.env.APP_PROXY_URL;

console.log('prefix', prefix);

module.exports = prefix ? {
  '/': {
    target: prefix,
    pathRewrite: {'^/': ''},
  },
} : undefined;
