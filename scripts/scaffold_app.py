#!/usr/bin/env python3
"""
HyperCraft UI Studio: Project Scaffolder
Instantly configures a project with HyperCraft UI templates, components, and CSS themes.
"""

import os
import shutil
import sys
from pathlib import Path

def scaffold_project(target_path):
    target = Path(target_path).resolve()
    base_dir = Path(__file__).resolve().parent.parent

    print(f"Scaffolding HyperCraft UI into: {target}")
    os.makedirs(target / "src" / "components" / "ui", exist_ok=True)
    os.makedirs(target / "src" / "styles", exist_ok=True)
    os.makedirs(target / "src" / "lib", exist_ok=True)

    # Copy components
    components_src = base_dir / "templates" / "components"
    if components_src.exists():
        for comp in components_src.glob("*.tsx"):
            dest = target / "src" / "components" / "ui" / comp.name
            shutil.copy2(comp, dest)
            print(f"  + Component: src/components/ui/{comp.name}")

    # Copy themes
    themes_src = base_dir / "templates" / "themes" / "themes.css"
    if themes_src.exists():
        dest = target / "src" / "styles" / "themes.css"
        shutil.copy2(themes_src, dest)
        print(f"  + Theme Tokens: src/styles/themes.css")

    # Create lib/utils.ts
    utils_file = target / "src" / "lib" / "utils.ts"
    if not utils_file.exists():
        with open(utils_file, "w", encoding="utf-8") as f:
            f.write('''import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
''')
        print(f"  + Utility: src/lib/utils.ts")

    # Copy quickstart configs if not present
    quickstart_src = base_dir / "templates" / "quickstart"
    for config_name in ["tailwind.config.js", "vite.config.ts"]:
        src_file = quickstart_src / config_name
        dest_file = target / config_name
        if src_file.exists() and not dest_file.exists():
            shutil.copy2(src_file, dest_file)
            print(f"  + Config: {config_name}")

    print("\nScaffolding complete! Install dependencies with: npm install")

if __name__ == "__main__":
    dest = sys.argv[1] if len(sys.argv) > 1 else "."
    scaffold_project(dest)
