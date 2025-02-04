module.exports = ({env}) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do", providerOptions: {
        key: env("AWS_ACCESS_KEY_ID"),
        secret: env("AWS_ACCESS_SECRET"),
        endpoint: env("AWS_ENDPOINT"),
        space: env("AWS_BUCKET"),
        directory: env("AWS_SPACE_DIRECTORY"),
        cdn: env("AWS_CDN_URL")
      }
    }
  }
})
