import { i18n } from './index';
import crc32 from 'crc-32';

export const localize = (string: string, values?: Record<string, unknown>): string => {
  if (!string) return '';
  const normalized = string.replace(/\s+/g, ' ').trim();
  const key = crc32.str(normalized).toString();
  return i18n.t(key, { defaultValue: normalized, ...values }) as string;
};
