import { i18n } from './index';
import crc32 from 'crc-32';

export const localize = (string: string, values?: Record<string, unknown>): string => {
  if (!string) return '';
  const key = crc32.str(string).toString();
  return i18n.t(key, { defaultValue: string, ...values }) as string;
};
