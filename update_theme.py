from pathlib import Path
import re

root = Path('components')
patterns = [
    (re.compile(r'bg-black(/\d+)?\b'), lambda m: 'bg-white' + (m.group(1) or '')),
    (re.compile(r'bg-#\[(?:0A0A0A|0E0E0E)\](/\d+)?\b'), lambda m: 'bg-white' + (m.group(1) or '')),
    (re.compile(r'bg-black\b'), 'bg-white'),
    (re.compile(r'bg-#\[(?:0A0A0A|0E0E0E)\]\b'), 'bg-white'),
    (re.compile(r'bg-white/5\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/10\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/20\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/30\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/40\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/50\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/60\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/70\b'), 'bg-slate-100'),
    (re.compile(r'bg-white/80\b'), 'bg-slate-100'),
    (re.compile(r'text-white/(\d+)\b'), r'text-slate-900/\1'),
    (re.compile(r'text-white\b'), 'text-slate-900'),
    (re.compile(r'border-white/(\d+)\b'), r'border-slate-200/\1'),
    (re.compile(r'border-white\b'), 'border-slate-200'),
    (re.compile(r'from-gray-900\b'), 'from-slate-100'),
    (re.compile(r'to-gray-700\b'), 'to-slate-200'),
]
changed_files = []
for path in root.rglob('*.tsx'):
    text = path.read_text(encoding='utf-8')
    new = text
    for pat, repl in patterns:
        new = pat.sub(repl, new)
    if new != text:
        path.write_text(new, encoding='utf-8')
        changed_files.append(path)
print('updated', len(changed_files), 'files')
for p in changed_files:
    print(p)
