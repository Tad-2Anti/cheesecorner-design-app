import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919489531976';

export function getWhatsAppLink(productName?: string): string {
  let message: string;

  if (productName) {
    message = `Hi! I'd like to order ${productName} from Cheese Corner. Can you please let me know the availability and pricing?`;
  } else {
    message = `Hi! I'd like to enquire about your cheese selection and current offers at Cheese Corner, Madurai.`;
  }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

