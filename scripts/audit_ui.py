#!/usr/bin/env python3
"""
HyperCraft UI Studio: Automated Codebase & Craft Floor Audit Tool
Scans frontend codebases (JSX, TSX, HTML, Vue, Svelte) to catch AI slop tells,
accessibility gaps, and craft floor violations.
"""

import os
import re
import sys
from pathlib import Path

# AI Slop Detection Rules
RULES = [
    {
        "id": "AI-SLOP-01",
        "name": "Kicker / Eyebrow Label",
        "pattern": re.compile(r'(uppercase\s+tracking-(?:wider|widest)[^>]*>(?:\s*//|[A-Z\s]{4,}))', re.IGNORECASE),
        "severity": "HIGH",
        "message": "Found kicker/eyebrow label above heading. Delete label; let heading stand with authority."
    },
    {
        "id": "AI-SLOP-02",
        "name": "Arbitrary Multi-Color Gradient Text",
        "pattern": re.compile(r'bg-gradient-to-r\s+from-(?:purple|pink|indigo)-[0-9]{3}\s+to-(?:pink|purple|cyan)-[0-9]{3}\s+bg-clip-text', re.IGNORECASE),
        "severity": "MEDIUM",
        "message": "Cheesy multi-color gradient text detected. Use bold, high-contrast solid typography with intentional weight contrast."
    },
    {
        "id": "AI-SLOP-03",
        "name": "Cliché AI Color Palette",
        "pattern": re.compile(r'(?:#f4f1ea|#d97757|rgb\(244,\s*241,\s*234\))', re.IGNORECASE),
        "severity": "HIGH",
        "message": "Warm cream (#f4f1ea) + terracotta (#d97757) AI tell detected. Choose a palette rooted in subject matter using OKLCH."
    },
    {
        "id": "AI-SLOP-04",
        "name": "Hard Zero-Blur Block Shadow",
        "pattern": re.compile(r'(?:box-shadow:\s*\d+px\s+\d+px\s+0(?:px)?|shadow-\[\d+px_\d+px_0(?:px)?\])', re.IGNORECASE),
        "severity": "MEDIUM",
        "message": "Hard offset zero-blur shadow detected. Unless strictly neobrutalist, use layered soft ambient shadows."
    },
    {
        "id": "AI-SLOP-05",
        "name": "Unmotivated Backdrop Blur",
        "pattern": re.compile(r'backdrop-blur-(?:sm|md|lg|xl)\s+(?:bg-white/\d+|bg-black/\d+)', re.IGNORECASE),
        "severity": "LOW",
        "message": "Backdrop blur on card. Ensure content actually scrolls underneath, otherwise it wastes GPU compositing."
    },
    {
        "id": "AI-SLOP-06",
        "name": "Dummy / Placeholder Data",
        "pattern": re.compile(r'(lorem\s+ipsum|john\s+doe|\$1,234\.56|feature\s+[123])', re.IGNORECASE),
        "severity": "HIGH",
        "message": "Placeholder data detected. Use realistic domain context and authentic industry numbers."
    },
    {
        "id": "A11Y-01",
        "name": "Missing Focus-Visible Ring",
        "pattern": re.compile(r'focus:outline-none(?!\s+focus-visible:ring)', re.IGNORECASE),
        "severity": "HIGH",
        "message": "Removed outline without providing a visible focus-visible ring. Breaches WCAG keyboard accessibility."
    }
]

def scan_file(file_path):
    findings = []
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
        for idx, line in enumerate(lines, 1):
            for rule in RULES:
                if rule["pattern"].search(line):
                    findings.append({
                        "file": file_path,
                        "line": idx,
                        "rule_id": rule["id"],
                        "rule_name": rule["name"],
                        "severity": rule["severity"],
                        "message": rule["message"],
                        "snippet": line.strip()[:100]
                    })
    except Exception as e:
        pass
    return findings

def audit_directory(target_dir):
    extensions = {".tsx", ".jsx", ".html", ".vue", ".svelte", ".js", ".ts", ".css"}
    all_findings = []
    total_files = 0

    target = Path(target_dir)
    if not target.exists():
        print(f"Error: Target path '{target_dir}' does not exist.")
        return

    for root, dirs, files in os.walk(target):
        # Skip node_modules, dist, build, .git
        dirs[:] = [d for d in dirs if d not in {"node_modules", "dist", "build", ".git", ".next"}]
        for f in files:
            p = Path(root) / f
            if p.suffix.lower() in extensions:
                total_files += 1
                findings = scan_file(p)
                all_findings.extend(findings)

    print("=" * 65)
    print(" HYPERCRAFT UI STUDIO - CODEBASE CRAFT AUDIT")
    print("=" * 65)
    print(f"Target Directory: {target_dir}")
    print(f"Scanned Files:    {total_files}")
    print(f"Total Findings:   {len(all_findings)}")
    print("-" * 65)

    if not all_findings:
        print("\n [PASSED] Flawless! Zero craft floor violations or AI slop detected.\n")
        return

    high_count = sum(1 for f in all_findings if f["severity"] == "HIGH")
    med_count = sum(1 for f in all_findings if f["severity"] == "MEDIUM")
    low_count = sum(1 for f in all_findings if f["severity"] == "LOW")

    print(f"Severity Breakdown: High ({high_count}) | Medium ({med_count}) | Low ({low_count})\n")

    for f in all_findings:
        sev_color = "[!]" if f["severity"] == "HIGH" else "[-]"
        print(f"{sev_color} {f['rule_id']} [{f['severity']}]: {f['rule_name']}")
        print(f"    File:    {f['file']}:{f['line']}")
        print(f"    Issue:   {f['message']}")
        print(f"    Snippet: {f['snippet']}")
        print()

    print("=" * 65)
    print("Audit Complete. Resolve high-priority findings before presenting.")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "."
    audit_directory(target)
