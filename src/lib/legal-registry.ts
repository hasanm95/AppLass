import FomogenPrivacy from '@/components/legal/FomogenPrivacy.astro';
import FomogenTerms from '@/components/legal/FomogenTerms.astro';
import MindfulPrivacy from '@/components/legal/MindfulGuardPrivacy.astro';
import MindfulTerms from '@/components/legal/MindfulGuardTerms.astro';
import ScreenveilPrivacy from '@/components/legal/ScreenveilPrivacy.astro';
import ScreenveilTerms from '@/components/legal/ScreenveilTerms.astro';

export const legalRegistry: Record<string, any> = {
  'fomogen/privacy': {
    component: FomogenPrivacy,
    title: 'Privacy Policy',
    appName: 'FOMOGEN',
    product: 'fomogen',
    type: 'privacy'
  },
  'fomogen/terms': {
    component: FomogenTerms,
    title: 'Terms of Service',
    appName: 'FOMOGEN',
    product: 'fomogen',
    type: 'terms'
  },
  'mindful-guard/privacy': {
    component: MindfulPrivacy,
    title: 'Privacy Policy',
    appName: 'Mindful Guard',
    product: 'mindful-guard',
    type: 'privacy'
  },
  'mindful-guard/terms': {
    component: MindfulTerms,
    title: 'Terms of Service',
    appName: 'Mindful Guard',
    product: 'mindful-guard',
    type: 'terms'
  },
  'screenveil/privacy': {
    component: ScreenveilPrivacy,
    title: 'Privacy Policy',
    appName: 'ScreenVeil',
    product: 'screenveil',
    type: 'privacy'
  },
  'screenveil/terms': {
    component: ScreenveilTerms,
    title: 'Terms of Service',
    appName: 'ScreenVeil',
    product: 'screenveil',
    type: 'terms'
  },
};
