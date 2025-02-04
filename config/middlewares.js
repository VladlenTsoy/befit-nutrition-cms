module.exports = ["strapi::logger", "strapi::errors", "strapi::security", "strapi::cors", "strapi::poweredBy", "strapi::query", "strapi::body", "strapi::session", "strapi::favicon", "strapi::public", {
  name: "strapi::cors", config: {
    enabled: true, origin: ["*"] // Разрешить доступ со всех доменов
  }
}, {
  name: "strapi::security", config: {
    contentSecurityPolicy: {
      useDefaults: true, directives: {
        "img-src": ["'self'", "data:", "blob:", "https://market-assets.strapi.io", "https://befit-nutrition.ams3.cdn.digitaloceanspaces.com"],
        "media-src": ["'self'", "data:", "blob:", "https://befit-nutrition.ams3.cdn.digitaloceanspaces.com"],
        "connect-src": ["'self'", "https://befit-nutrition.ams3.cdn.digitaloceanspaces.com"]
      }
    }
  }
}]
