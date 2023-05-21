const API_BASE_URL = process.env.NEXT_APP_API_BASE_URL;
const PRODUCTION_URL = process.env.NEXT_APP_APP_BASE_URL;
const PORTAL_MAIN_CONTAINER_ID = 'portal-main-container';

/**
 * SEO constants
 */
const SEO_TITLE = 'Next Blogging | Scholarsspace';
const SEO_DESCRIPTION = 'Next Blogging | Scholarsspace - A Next.js Blogging Template with Chakra UI';
const SEO_KEYWORDS = 'nextjs, next, react, chakra, chakra ui, blog, blogging, template';
const SEO_OG_IMAGE = `${PRODUCTION_URL}/favicon.png`;
const SEO_TWITTER_IMAGE = `${PRODUCTION_URL}/favicon.png`;

export {
    API_BASE_URL,
    PRODUCTION_URL,
    PORTAL_MAIN_CONTAINER_ID,
    SEO_TITLE,
    SEO_DESCRIPTION,
    SEO_KEYWORDS,
    SEO_OG_IMAGE,
    SEO_TWITTER_IMAGE,
};
