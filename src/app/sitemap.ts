import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://legiongrappling.com';

    // Core static pages
    const routes = [
        '',
        '/about',
        '/timetable',
        '/pricing',
        '/contact',
        '/programs',
        '/free-trial/adults',
        '/free-trial/kids',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Program pages (Static list based on what we know exists)
    const programRoutes = [
        '/classes/mens-bjj',
        '/classes/mens-no-gi',
        '/classes/mens-wrestling',
        '/classes/mens-mma',
        '/classes/womens-bjj',
        '/classes/womens-judo',
        '/classes/boys-jiu-jitsu',
        '/classes/boys-wrestling',
        '/classes/girls-bjj',
        '/classes/girls-judo',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...programRoutes];
}
