import { clsx, type ClassValue } from "clsx";

/** Une clases condicionalmente (helper estándar). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** ¿Es un placeholder sin completar? (texto entre corchetes) */
export function isPlaceholder(value: string): boolean {
  return /^\s*\[.*\]\s*$/.test(value);
}
