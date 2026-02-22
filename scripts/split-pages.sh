#!/bin/bash
set -eo pipefail

echo "Splitting [lang] pages..."
cd src/pages
SRC_DIR="[lang]"
EN_DIR="."
FR_DIR="fr"

mkdir -p "$FR_DIR"

# Find all Astro files inside [lang]
find "$SRC_DIR" -type f -name "*.astro" | while read -r file; do
    rel_path=$(echo "$file" | sed 's|^\[lang\]/||')
    en_file="$EN_DIR/$rel_path"
    fr_file="$FR_DIR/$rel_path"
    
    mkdir -p "$(dirname "$en_file")"
    mkdir -p "$(dirname "$fr_file")"
    
    echo "Processing $rel_path"
    
    # Process for English (root)
    # Uses strong perl to match balanced block of getStaticPaths and delete it
    cat "$file" | \
    perl -0777 -pe 's/export\s+async\s+function\s+getStaticPaths\(\)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}//msg' | \
    sed 's/const { lang } = Astro.params;/const lang = "en";/' | \
    perl -pe 's#(\'\''|")((\.\./)+)#$1 . substr($2, 3)#ge' > "$en_file"
    
    # Process for French (fr folder)
    cat "$file" | \
    perl -0777 -pe 's/export\s+async\s+function\s+getStaticPaths\(\)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}//msg' | \
    sed 's/const { lang } = Astro.params;/const lang = "fr";/' > "$fr_file"
done

echo "Done splitting pages."
