module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: false,
      origin: "*", // Разрешить все домены (или укажи свой)
      headers: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true // Включить поддержку cookies и токенов
    }
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "https://market-assets.strapi.io", "https://befit-nutrition.ams3.cdn.digitaloceanspaces.com"],
          "media-src": ["'self'", "data:", "blob:", "https://befit-nutrition.ams3.cdn.digitaloceanspaces.com"],
          "connect-src": ["'self'", "https://befit-nutrition.ams3.cdn.digitaloceanspaces.com"]
        }
      }
    }
  }
]
