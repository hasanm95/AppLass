import React from 'react';
import { Trans } from 'react-i18next';
import { i18n } from '@/i18n/index';
import crc32 from 'crc-32';

interface LocalizeProps {
  i18n_default_text: string;
  values?: Record<string, any>;
  components?: any;
  options?: any;
  shouldUnescape?: boolean;
}

const Localize: React.FC<LocalizeProps> = ({ 
  i18n_default_text, 
  values, 
  components, 
  options, 
  shouldUnescape 
}) => {
  const normalized = i18n_default_text.replace(/\s+/g, ' ').trim();
  
  // Configure interpolation to respect shouldUnescape
  const tOptions = {
    ...options,
    interpolation: {
      escapeValue: shouldUnescape ? false : true,
      ...options?.interpolation,
    }
  };

  return (
    <Trans
      i18n={i18n}
      i18nKey={crc32.str(normalized).toString()}
      defaults={normalized}
      values={values}
      components={components}
      tOptions={tOptions}
    />
  );
};

export default Localize;
