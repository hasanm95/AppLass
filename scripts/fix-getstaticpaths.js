import fs from 'fs';
import { execSync } from 'child_process';

const files = execSync('find src/pages -name "*.astro"').toString().trim().split('\n');

for (const file of files) {
  if (!file) continue;
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;
  
  if (!file.includes('[slug]')) {
    const startIdx = content.indexOf('export async function getStaticPaths() {');
    if (startIdx !== -1) {
      let openBraces = 0;
      let endIdx = -1;
      let foundFirst = false;
      for (let i = startIdx; i < content.length; i++) {
        if (content[i] === '{') {
          openBraces++;
          foundFirst = true;
        }
        if (content[i] === '}') {
          openBraces--;
          if (foundFirst && openBraces === 0) {
            endIdx = i;
            break;
          }
        }
      }
      if (endIdx !== -1) {
        content = content.slice(0, startIdx) + content.slice(endIdx + 1);
      }
    }
  } else {
    // Dynamic files
    const isFr = file.includes('/fr/');
    const lang = isFr ? 'fr' : 'en';

    if (file.includes('blog/')) {
      content = content.replace(
/export async function getStaticPaths\(\) \{[\s\S]*?\}\n\}/g,
`export async function getStaticPaths() {
  const lang = "${lang}";
  const langPosts = getBlogPosts(lang);
  return langPosts.map((post) => ({
    params: { slug: post.slug },
  }));
}`
      );
    } else if (file.includes('compare/')) {
      content = content.replace(
/export async function getStaticPaths\(\) \{[\s\S]*?\}\n\}/g,
`export async function getStaticPaths() {
  return comparisons.map((c) => ({
    params: { slug: c.slug },
  }));
}`
      );
    }
    content = content.replace('const { lang, slug } = Astro.params;', `const { slug } = Astro.params;\nconst lang = "${lang}";`);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
