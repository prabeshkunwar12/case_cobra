import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number, currency: string) => {
  const formatter = new Intl.NumberFormat("en-us", {
    style:"currency",
    currency:currency,
  })

  return formatter.format(price)
}