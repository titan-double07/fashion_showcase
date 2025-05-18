
export default ({ env }) => ({
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
        "api::contact-page.contact_page",
        "api::design-collection.design_collection",
        "api::landing-page.landing_page",
        "api::landing-page-media.landing-page_media",
      ],
      authorizedImports: [
        "api::contact-page.contact_page",
        "api::design-collection.design_collection",
        "api::landing-page.landing_page",
        "api::landing-page-media.landing-page_media",
      ],
    },
  },
  
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {}, // Optional: customize further if needed
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
