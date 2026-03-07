import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    'Home', 'About', 'Constitution', 'Leadership',
    'PastLeadership', 'Activities', 'EventTimeline',
    'Announcements', 'Gallery', 'Contact'
];

const DIR = path.join(__dirname, '../src/pages');
if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR, { recursive: true });
}

pages.forEach(page => {
    const file = path.join(DIR, `${page}.jsx`);
    if (!fs.existsSync(file)) {
        const content = `import React from 'react';\n\nconst ${page} = () => {\n  return (\n    <div className="section container">\n      <h1 className="section-title">${page}</h1>\n      <p>Placeholder content for ${page}.</p>\n    </div>\n  );\n};\n\nexport default ${page};\n`;
        fs.writeFileSync(file, content);
    }
});

console.log("Created all pages!");
