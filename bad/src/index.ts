export function format(data: number | string | boolean): string {
  if (typeof data === "number") {
    return `#<Number ${data}>`;
  } else if (typeof data === "string") {
    throw new Error("not yet implemented");
  } else {
    throw new Error("what");
  }
}
