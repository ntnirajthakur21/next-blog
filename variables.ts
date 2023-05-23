const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL;
const PORTAL_MAIN_CONTAINER_ID = 'portal-main-container';

/**
 * SEO constants
 */
const SEO_TITLE = 'Next Blogging | Scholarsspace';
const SEO_DESCRIPTION = 'Next Blogging | Scholarsspace - A Next.js Blogging Template with Chakra UI';
const SEO_KEYWORDS = 'nextjs, next, react, chakra, chakra ui, blog, blogging, template';
const SEO_OG_IMAGE = `${PRODUCTION_URL}/favicon.png`;
const SEO_TWITTER_IMAGE = `${PRODUCTION_URL}/favicon.png`;

// UNSPLASH
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const UNSPLASH_SECRET_KEY = process.env.NEXT_PUBLIC_UNSPLASH_SECRET_KEY;
const UNSPLASH_API_URL = process.env.NEXT_PUBLIC_UNSPLASH_API_BASE_URL;

export {
    API_BASE_URL,
    PRODUCTION_URL,
    PORTAL_MAIN_CONTAINER_ID,
    SEO_TITLE,
    SEO_DESCRIPTION,
    SEO_KEYWORDS,
    SEO_OG_IMAGE,
    SEO_TWITTER_IMAGE,
    UNSPLASH_ACCESS_KEY,
    UNSPLASH_SECRET_KEY,
    UNSPLASH_API_URL,
};
