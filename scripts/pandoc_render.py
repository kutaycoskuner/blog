"""
Usage:

    python prepare_pandoc.py src/content/essays/20230203-imge_ve_olgu.md

This script prepares a Markdown file for Pandoc conversion.

It detects indented HTML <div>...</div> blocks inside the Markdown and
removes their leading indentation in a temporary .pandoc.md file.
This prevents Pandoc from interpreting the embedded HTML as a literal
indented code block.

The original Markdown file is never modified.

The temporary .pandoc.md file is deleted after Pandoc finishes.

The generated HTML file is placed in the current working directory
(the directory from which this script is executed).

Example:

    python prepare_pandoc.py src/content/essays/20230203-imge_ve_olgu.md

Result:

    ./20230203-imge_ve_olgu.html
"""


from pathlib import Path
import re
import subprocess
import sys


def prepare_markdown(source: Path) -> Path:
    prepared = source.with_name(f"{source.stem}.pandoc.md")

    text = source.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)

    output = []

    inside_html_block = False
    div_depth = 0

    for line in lines:
        opening = len(
            re.findall(r"<div\b[^>]*>", line, re.IGNORECASE)
        )
        closing = len(
            re.findall(r"</div\s*>", line, re.IGNORECASE)
        )

        if not inside_html_block:
            if opening > 0:
                inside_html_block = True
                div_depth = opening - closing

                output.append(line.lstrip())

                if div_depth <= 0:
                    inside_html_block = False
                    div_depth = 0

                continue

            output.append(line)
            continue

        div_depth += opening - closing

        output.append(line.lstrip())

        if div_depth <= 0:
            inside_html_block = False
            div_depth = 0

    prepared.write_text(
        "".join(output),
        encoding="utf-8",
    )

    return prepared


def run_pandoc(source: Path, output: Path) -> Path:
    subprocess.run(
        [
            "pandoc",
            str(source),
            "-f",
            "markdown+markdown_in_html_blocks",
            "--standalone",
            "-o",
            str(output),
        ],
        check=True,
    )

    return output


def main():
    if len(sys.argv) != 2:
        print("Usage: python prepare_pandoc.py <markdown-file>")
        sys.exit(1)

    source = Path(sys.argv[1])

    if not source.exists():
        raise FileNotFoundError(
            f"Source file not found: {source}"
        )

    # Put the final HTML in the directory where the script is executed.
    output = Path.cwd() / f"{source.stem}.pandoc.html"

    print("Preparing Markdown...")
    prepared = prepare_markdown(source)
    print(f"Prepared temporary Markdown: {prepared}")

    try:
        print("Working on Pandoc conversion...")
        html = run_pandoc(prepared, output)
        print(f"Generated HTML: {html}")

    except subprocess.CalledProcessError:
        print("Pandoc conversion failed.")
        raise

    finally:
        if prepared.exists():
            prepared.unlink()
            print(f"Removed temporary file: {prepared}")


if __name__ == "__main__":
    main()