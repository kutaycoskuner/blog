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
                // 1. Allow dots and numbers, and convert spaces/non-word characters to hyphen
                //    We allow the dot here temporarily so the "1.1." part doesn't get messed up.
                .replace(/[^\w\.]+/g, "-")

                // 2. Target only the dot *after* the leading number(s) and replace it with a hyphen
                //    This turns "1.1.Standards..." into "1-1-Standards..."
                //    It keeps the structure of the leading outline numbers.
                .replace(/^(\d+)\.(\d+)\./, "$1-$2-")

                // 3. Simple slug - converts any remaining non-word characters (if any) and dots to a hyphen.
                .replace(/[^\w]+/g, "-")
                .replace(/(\d)-(\d)/g, "$1$2")

                // 4. Trim leading/trailing -
                .replace(/^-+|-+$/g, "");
                // console.log(slug)
            toc.push({ depth, text, slug });
        }
    }

    // console.log("[DEBUG] TOC generated:", toc);
    return toc;
}
