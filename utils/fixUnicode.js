// utils/fixUnicode.js

// Option 1: Fully Normalize Unicode Characters
export function normalizeUnicode(text) {
  if (typeof text !== 'string') return text;
  return text.normalize("NFKC");  // NFKC or NFC are common for display normalization
}

// Option 2: Escape All Non-ASCII Unicode Characters
export function escapeUnicode(text) {
  if (typeof text !== 'string') return text;

  return text.split('').map(char => {
    const charCode = char.charCodeAt(0);
    return charCode > 127 ? `\\u${charCode.toString(16).padStart(4, '0')}` : char;
  }).join('');
}

// Combined function to apply both normalization and escape non-ASCII
export function fixAllUnicode(text) {
  return escapeUnicode(normalizeUnicode(text));
}
