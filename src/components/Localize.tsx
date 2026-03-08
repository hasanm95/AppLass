import { localize } from '../i18n/localize';

interface Props {
  children: string;
  values?: Record<string, unknown>;
}

export const Localize = ({ children, values }: Props) => (
  <>{localize(children, values)}</>
);
