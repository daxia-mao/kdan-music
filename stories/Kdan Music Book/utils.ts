export const makeHsl = (hsl: number[] | string | undefined, weights: number[]) => {
  if (Array.isArray(hsl)) {
    return `hsl(${hsl[0] * weights[0]}, ${hsl[1] * weights[1]}%, ${
      hsl[2] * weights[2]
    }%)`;
  }
};