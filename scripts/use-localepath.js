import fs from 'fs';
import path from 'path';

const files = [
  'src/components/blog/BlogCard.tsx',
  'src/components/docs-content/mindful-guard/page.tsx',
  'src/components/docs-content/screenveil/page.tsx',
  'src/components/docs-content/fomogen/quick-start/page.tsx',
  'src/components/docs-content/fomogen/page.tsx',
  'src/components/docs-content/page.tsx',
  'src/pages/about/index.astro',
  'src/pages/blog/[slug].astro',
  'src/pages/compare/index.astro',
  'src/pages/fr/about/index.astro',
  'src/pages/fr/blog/[slug].astro',
  'src/pages/fr/compare/index.astro',
  'src/pages/fr/ecommerce-performance-2026-benchmarks/index.astro',
  'src/pages/fr/digital-wellness-2026-guide/index.astro',
  'src/pages/fr/apps/index.astro',
  'src/pages/ecommerce-performance-2026-benchmarks/index.astro',
  'src/pages/digital-wellness-2026-guide/index.astro',
  'src/pages/apps/index.astro'
];

for (const file of files) {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Replace href attributes
  content = content.replace(
    /href=\{lang === "en" \? `\/([^`]+)` : `\/\$\{lang\}\/([^`]+)`\}/g,
    'href={localePath(lang, "/$1")}'
  );

  // Replace link attributes
  content = content.replace(
    /link=\{lang === "en" \? `\/([^`]+)` : `\/\$\{lang\}\/([^`]+)`\}/g,
    'link={localePath(lang, "/$1")}'
  );

  // Replace href/link object properties
  content = content.replace(
    /href:\s*lang === "en" \? `\/([^`]+)` : `\/\$\{lang\}\/([^`]+)`/g,
    'href: localePath(lang, "/$1")'
  );
  content = content.replace(
    /link:\s*lang === "en" \? `\/([^`]+)` : `\/\$\{lang\}\/([^`]+)`/g,
    'link: localePath(lang, "/$1")'
  );

  if (content !== originalContent) {
    if (!content.includes('localePath')) continue; // Should have been added, just a safeguard

    // Check if imported
    if (!content.includes('import { localePath }') && !content.includes('import {getLangFromUrl, localePath}')) {
      // Find the last import
      const importRegex = /^import .+?;?$/gm;
      let lastImportMatch;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastImportMatch = match;
      }

      const importStatement = `import { localePath } from "@/i18n/utils";\n`;
      if (lastImportMatch) {
        const insertPos = lastImportMatch.index + lastImportMatch[0].length + 1;
        content = content.slice(0, insertPos) + importStatement + content.slice(insertPos);
      } else {
        // Just put it at the top (or after --- in Astro)
        if (file.endsWith('.astro')) {
          content = content.replace(/^---\n/, `---\n${importStatement}`);
        } else {
          content = importStatement + "\n" + content;
        }
      }
    }
    
    // Also if using Astro, wait, Astro import of getDictionary already exists often.
    // The above generic top-level works.
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
}
