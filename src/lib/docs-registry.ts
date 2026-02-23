import FomogenConfig from '../components/docs-content/fomogen/configuration/page';
import FomogenCountdown from '../components/docs-content/fomogen/countdown-timers/page';
import FomogenExit from '../components/docs-content/fomogen/exit-intent/page';
import FomogenFaq from '../components/docs-content/fomogen/faq/page';
import FomogenProgress from '../components/docs-content/fomogen/progress-indicators/page';
import FomogenPurchase from '../components/docs-content/fomogen/purchase-notifications/page';
import FomogenQuick from '../components/docs-content/fomogen/quick-start/page';
import FomogenSocial from '../components/docs-content/fomogen/social-proof-badges/page';
import FomogenSticky from '../components/docs-content/fomogen/sticky-cart/page';
import FomogenStock from '../components/docs-content/fomogen/stock-alerts/page';
import FomogenTrust from '../components/docs-content/fomogen/trust-badges/page';

import MindfulInstallation from '../components/docs-content/mindful-guard/installation/page';
import MindfulStrictMode from '../components/docs-content/mindful-guard/strict-mode/page';

import ScreenveilAmoled from '../components/docs-content/screenveil/amoled-efficiency/page';

export const docsRegistry: Record<string, Record<string, any>> = {
  fomogen: {
    configuration: FomogenConfig,
    'countdown-timers': FomogenCountdown,
    'exit-intent': FomogenExit,
    faq: FomogenFaq,
    'progress-indicators': FomogenProgress,
    'purchase-notifications': FomogenPurchase,
    'quick-start': FomogenQuick,
    'social-proof-badges': FomogenSocial,
    'sticky-cart': FomogenSticky,
    'stock-alerts': FomogenStock,
    'trust-badges': FomogenTrust,
  },
  'mindful-guard': {
    installation: MindfulInstallation,
    'strict-mode': MindfulStrictMode,
  },
  screenveil: {
    'amoled-efficiency': ScreenveilAmoled,
  },
};
