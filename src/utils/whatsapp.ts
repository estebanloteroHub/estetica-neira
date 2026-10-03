import { defaultWhatsAppMessage, siteInfo } from '../data/site';

export function createWhatsAppLink(message = defaultWhatsAppMessage) {
  const phone = siteInfo.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
