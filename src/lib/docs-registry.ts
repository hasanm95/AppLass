import FomogenConfig from '../components/docs-content/fomogen/configuration/ConfigurationPage.astro';
import FomogenCountdown from '../components/docs-content/fomogen/countdown-timers/CountdownTimersPage.astro';
import FomogenExit from '../components/docs-content/fomogen/exit-intent/ExitIntentPage.astro';
import FomogenFaq from '../components/docs-content/fomogen/faq/FAQPage.astro';
import FomogenProgress from '../components/docs-content/fomogen/progress-indicators/ProgressIndicatorsPage.astro';
import FomogenPurchase from '../components/docs-content/fomogen/purchase-notifications/PurchaseNotificationsPage.astro';
import FomogenQuick from '../components/docs-content/fomogen/quick-start/QuickStartPage.astro';
import FomogenSocial from '../components/docs-content/fomogen/social-proof-badges/SocialProofBadgesPage.astro';
import FomogenSticky from '../components/docs-content/fomogen/sticky-cart/StickyCartPage.astro';
import FomogenStock from '../components/docs-content/fomogen/stock-alerts/StockAlertsPage.astro';
import FomogenTrust from '../components/docs-content/fomogen/trust-badges/TrustBadgesPage.astro';

import MindfulInstallation from '../components/docs-content/mindful-guard/installation/MindfulInstallationPage.astro';
import MindfulStrictMode from '../components/docs-content/mindful-guard/strict-mode/StrictModePage.astro';

import ScreenveilAmoled from '../components/docs-content/screenveil/amoled-efficiency/AmoledEfficiencyPage.astro';

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
