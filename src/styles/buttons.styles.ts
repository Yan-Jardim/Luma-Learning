const shape = "inline-flex items-center justify-center rounded-lg type-desktop-body-1";
const base = `${shape} whitespace-nowrap`;
const wrapping = `${shape} text-center`;
const primaryLook = "bg-primary-blue px-7 py-3.5 text-white";
const secondaryLook = "border border-line bg-white py-3.5 text-text-primary";

export const primaryButton = `${base} ${primaryLook}`;
export const headerButton = `${base} bg-primary-blue px-5 py-2.5 text-white`;
export const accentButton = `${base} bg-yellow px-7 py-3.5 text-text-primary`;
export const primaryButtonWrapping = `${wrapping} ${primaryLook}`;
export const secondaryButtonWrapping = `${wrapping} ${secondaryLook} px-[29px]`;
export const secondaryButtonWrappingCompact = `${wrapping} ${secondaryLook} px-7`;
