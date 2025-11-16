// src/utils/getToc.ts
import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";

interface TocItem {
    depth: number;
    text: string;
    slug?: string; // optional if you want to generate anchors
}

export function getToc(relativeFilePath: string): TocItem[] {
    // Resolve relative path from project root
    const filePath = path.resolve(relativeFilePath);

    // console.log("[DEBUG] Resolving file path:", filePath);

    if (!fs.existsSync(filePath)) {
        console.warn(`MDX file not found: ${filePath}`);
        return [];
    }

    const mdxRaw = fs.readFileSync(filePath, "utf-8");

    // safe
    const toc: TocItem[] = [];

    // Split the MDX content into lines
    const lines = mdxRaw.split("\n");

    // Track if we are inside a code block or math block
    let inCodeBlock = false;
    let inMathBlock = false;

    for (const line of lines) {
        // Toggle code block status
        if (line.trim().startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            continue;
        }

        // Toggle math block status
        if (line.trim().startsWith("$$")) {
            inMathBlock = !inMathBlock;
            continue;
        }

        // Skip lines inside code or math blocks
        if (inCodeBlock || inMathBlock) continue;

        // Match ##, ###, etc.
        const match = line.match(/^(#{2,6})\s+(.*)/);
        if (match) {
            const depth = match[1].length; // number of # symbols
            const text = match[2].trim(); // heading text
            const slug = text
                .toLowerCase()
                .replace(/[^\w]+/g, "-") // simple slug
                .replace(/^-+|-+$/g, ""); // trim leading/trailing -
            toc.push({ depth, text, slug });
        }
    }

    // console.log("[DEBUG] TOC generated:", toc);
    return toc;
}
