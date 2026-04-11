import FomogenPrivacy from '@/components/legal/FomogenPrivacy.astro';
import FomogenTerms from '@/components/legal/FomogenTerms.astro';
import MindfulPrivacy from '@/components/legal/MindfulGuardPrivacy.astro';
import MindfulTerms from '@/components/legal/MindfulGuardTerms.astro';
import ScreenveilPrivacy from '@/components/legal/ScreenveilPrivacy.astro';
import ScreenveilTerms from '@/components/legal/ScreenveilTerms.astro';

import { localize } from '@/i18n/localize';

export const legalRegistry: Record<string, any> = {
  'fomogen/privacy': {
    component: FomogenPrivacy,
    title: 'Privacy Policy',
    appName: 'FOMOGEN',
    product: 'fomogen',
    type: 'privacy',
    description: localize("Privacy Policy for FOMOGEN - Learn how we collect, use, and protect your information as a Shopify merchant.")
  },
  'fomogen/terms': {
    component: FomogenTerms,
    title: 'Terms of Service',
    appName: 'FOMOGEN',
    product: 'fomogen',
    type: 'terms',
    description: localize("Terms of Service for FOMOGEN - Review the terms, conditions, and user responsibilities for our Shopify application.")
  },
  'mindful-guard/privacy': {
    component: MindfulPrivacy,
    title: 'Privacy Policy',
    appName: 'Mindful Guard',
    product: 'mindful-guard',
    type: 'privacy',
    description: localize("Privacy Policy for Mindful Guard - Discover our zero-telemetry approach and how we protect your offline focus data on Android.")
  },
  'mindful-guard/terms': {
    component: MindfulTerms,
    title: 'Terms of Service',
    appName: 'Mindful Guard',
    product: 'mindful-guard',
    type: 'terms',
    description: localize("Terms of Service for Mindful Guard - Understanding the user agreement and focus session rules for our Android app.")
  },
  'screenveil/privacy': {
    component: ScreenveilPrivacy,
    title: 'Privacy Policy',
    appName: 'ScreenVeil',
    product: 'screenveil',
    type: 'privacy',
    description: localize("Privacy Policy for ScreenVeil - Our transparent approach to Android AMOLED efficiency and zero data collection.")
  },
  'screenveil/terms': {
    component: ScreenveilTerms,
    title: 'Terms of Service',
    appName: 'ScreenVeil',
    product: 'screenveil',
    type: 'terms',
    description: localize("Terms of Service for ScreenVeil - Review the usage conditions for our battery-saving overlay utility.")
  },
};
