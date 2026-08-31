'use strict';

/*
 * The site reads Strapi anonymously, so the public role needs `find` on every
 * content type it renders. Doing that by hand in the admin is a step that gets
 * forgotten on a fresh environment and shows up as a wall of 403s, so it is
 * declared here instead and reasserted on every boot.
 *
 * Strictly additive and strictly read-only: only the types listed below, only
 * find/findOne. Nothing here can grant a write.
 */

const PUBLIC_READ = {
  // Single types answer `find` only — there is nothing to look up by id.
  'global': ['find'],
  'home-page': ['find'],
  'work-page': ['find'],
  'news-page': ['find'],
  'about-page': ['find'],
  'contact-page': ['find'],
  'legal-page': ['find'],
  // Collections need both: the grid lists, the project page fetches one.
  'project': ['find', 'findOne'],
  'news-item': ['find', 'findOne'],
};

async function grantPublicRead(strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    strapi.log.warn('No public role found; skipping permission setup.');
    return;
  }

  const wanted = [];
  for (const [api, actions] of Object.entries(PUBLIC_READ)) {
    for (const action of actions) wanted.push(`api::${api}.${api}.${action}`);
  }

  const existing = await strapi.query('plugin::users-permissions.permission').findMany({
    where: { role: publicRole.id, action: { $in: wanted } },
  });
  const have = new Set(existing.map((p) => p.action));
  const missing = wanted.filter((a) => !have.has(a));

  for (const action of missing) {
    await strapi
      .query('plugin::users-permissions.permission')
      .create({ data: { action, role: publicRole.id } });
  }

  if (missing.length) {
    strapi.log.info(`Granted public read on ${missing.length} endpoint(s).`);
  }
}

module.exports = {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    await grantPublicRead(strapi);
  },
};
