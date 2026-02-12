require('dotenv').config();
const FirecrawlApp = require('@mendable/firecrawl-js').default;
const fs = require('fs');
const path = require('path');

async function migrateContent() {
    const apiKey = process.env.FIRECRAWL_API_KEY;
    if (!apiKey) {
        console.error('Error: FIRECRAWL_API_KEY is not set in .env');
        process.exit(1);
    }

    const app = new FirecrawlApp({ apiKey });

    try {
        console.log('Mapping site: https://legiongrappling.com ...');
        const mapResult = await app.map('https://legiongrappling.com');
        // Save map result for reference
        fs.writeFileSync(path.join(__dirname, '../data/site-map.json'), JSON.stringify(mapResult, null, 2));
        console.log('Site map saved to data/site-map.json');

        console.log('Scraping About Us page...');
        const scrapeResult = await app.scrape('https://legiongrappling.com/about-us', {
            formats: ['markdown'],
            onlyMainContent: true
        });

        if (scrapeResult && (scrapeResult.success || scrapeResult.markdown)) {
            const content = scrapeResult.markdown;
            if (content) {
                const filePath = path.join(__dirname, '../data/about-us.md');
                fs.writeFileSync(filePath, content);
                console.log(`Successfully saved About Us content to ${filePath}`);
            } else {
                console.error('Scrape succeeded but no markdown found in result');
            }
        } else {
            console.error('Scrape failed:', scrapeResult.error || 'Unknown error');
        }
    } catch (error) {
        console.error('An error occurred during migration:', error);
    }
}

migrateContent();
