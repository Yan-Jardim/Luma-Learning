export const rem = (px: number) => `${px / 16}rem`;
export const fromCenter = (x: number) => `calc(50% + ${rem(x - 640)})`;
