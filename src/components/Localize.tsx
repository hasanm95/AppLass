import { localize } from '../i18n/localize';

interface Props {
  i18n_default_text: string;
  values?: Record<string, unknown>;
}

const Localize = ({ i18n_default_text, values }: Props) => (
  <>{localize(i18n_default_text, values)}</>
);

export default Localize;
