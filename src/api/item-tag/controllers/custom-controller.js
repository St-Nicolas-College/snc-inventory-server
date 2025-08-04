
//@ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::item-tag.item-tag",
  ({ strapi }) => ({
    async findByDocumentId(ctx) {
      const { documentid } = ctx.params;

      if (!documentid) {
        return ctx.badRequest("Missing documentId");
      }

      try {
        const itemTags = await strapi.entityService.findMany(
          "api::item-tag.item-tag",
          {
            filters: {
              item: {
                documentId: documentid,
              },
            },
            populate: "*",
          }
        );
        return ctx.send(itemTags);
      } catch (err) {
        strapi.log.error("Error fetching item-tags by documentId:", err);
        return ctx.internalServerError("Unable to fetch item-tags");
      }
    },
  })
);
