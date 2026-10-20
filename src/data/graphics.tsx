import {
  PortfolioWebGraphic,
  AviationPaymentGraphic,
  UFOGraphic,
  MindfulnessGraphic,
  BluetoothDeviceGraphic,
  MobileAppGraphic,
  TelecomGraphic,
  GamingArenaGraphic,
  IoTGraphic,
  ConferenceGraphic,
  DefaultProjectGraphic,
} from '../components/ProjectGraphics';
import { TypeDrivenGraphic, BluetoothGraphic } from '../components/BlogGraphics';
import {
  MindfulnessScene,
  BleSdkScene,
  GamingArenaScene,
  TelecomScene,
  SmartLabScene,
  ConferenceScene,
  TruthSeekerScene,
} from '../components/ScreenScenes';

// Decorative SVG per project / post slug (kept out of siteMeta.ts, which must stay JSX-free)
const projectGraphics: Record<string, () => React.ReactNode> = {
  'most-io': () => <AviationPaymentGraphic />,
  'ufo-tracker': () => <UFOGraphic />,
  'nova-eva': () => <MobileAppGraphic />,
  'mindfulness-app': () => <MindfulnessGraphic />,
  temnadigital: () => <PortfolioWebGraphic />,
  'ble-medical-sdk': () => <BluetoothDeviceGraphic />,
  'gaming-arena': () => <GamingArenaGraphic />,
  'telecom-app': () => <TelecomGraphic />,
  'smart-lab-iot': () => <IoTGraphic />,
  hskiki26: () => <ConferenceGraphic />,
};

const postGraphics: Record<string, () => React.ReactNode> = {
  'type-driven-design': () => <TypeDrivenGraphic />,
  'ble-sdk-architecture': () => <BluetoothGraphic />,
};

export function projectGraphic(slug: string) {
  return (projectGraphics[slug] ?? (() => <DefaultProjectGraphic />))();
}

// Full animated app screens for projects without public screenshots (NDA work)
const projectScenes: Record<string, () => React.ReactNode> = {
  truthseeker: () => <TruthSeekerScene />,
  'mindfulness-app': () => <MindfulnessScene />,
  'ble-medical-sdk': () => <BleSdkScene />,
  'gaming-arena': () => <GamingArenaScene />,
  'telecom-app': () => <TelecomScene />,
  'smart-lab-iot': () => <SmartLabScene />,
  hskiki26: () => <ConferenceScene />,
};

export function projectScene(slug: string) {
  return projectScenes[slug]?.() ?? null;
}

export function postGraphic(slug: string) {
  return postGraphics[slug]?.() ?? null;
}
