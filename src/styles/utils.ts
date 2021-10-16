export const rem = (px: number, context = 16) => `${px / context}rem`;

export const percent = (x: number, y: number) => `${(x / y) * 100}%`;
