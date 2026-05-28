import re

patterns = [
    r'bg-#\[(?:0A0A0A|0E0E0E)\]\b',
    r'bg-#\[(?:0A0A0A|0E0E0E)\](/\d+)?\b',
]
for p in patterns:
    print(p, bool(re.search(p, 'bg-[#0A0A0A]')))
    print(p, bool(re.search(p, 'bg-[#0A0A0A]/95')))
