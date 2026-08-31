module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  // Pinned rather than left to the default: the largest asset the site owns is
  // a 28 MB film, and an upload that silently exceeds the ceiling fails
  // mid-way with no useful error in the admin UI.
  {
    name: 'strapi::body',
    config: {
      formLimit: '64mb',
      jsonLimit: '64mb',
      textLimit: '64mb',
      formidable: { maxFileSize: 64 * 1024 * 1024 },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
