import fs from 'fs';
import path from 'path';

function getToc(relativeFilePath) {
  const filePath = path.resolve(relativeFilePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`MDX file not found: ${filePath}`);
    return [];
  }
  const mdxRaw = fs.readFileSync(filePath, "utf-8");
  const toc = [];
  const lines = mdxRaw.split("\n");
  let inCodeBlock = false;
  let inMathBlock = false;
  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (line.trim().startsWith("$$")) {
      inMathBlock = !inMathBlock;
      continue;
    }
    if (inCodeBlock || inMathBlock) continue;
    const match = line.match(/^(#{2,6})\s+(.*)/);
    if (match) {
      const depth = match[1].length;
      const text = match[2].trim();
      const slug = text.toLowerCase().replace(/[^\w\.]+/g, "-").replace(/^(\d+)\.(\d+)\./, "$1-$2-").replace(/[^\w]+/g, "-").replace(/(\d)-(\d)/g, "$1$2").replace(/(\d)(?:-(\d))+/g, (_, first, rest) => first + rest.replace(/-/g, "")).replace(/^-+|-+$/g, "");
      toc.push({ depth, text, slug });
    }
  }
  return toc;
}

export { getToc as g };
