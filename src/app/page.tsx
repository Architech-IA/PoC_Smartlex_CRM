import CRMRuntime from '@/components/CRMRuntime';
import type { AppInstance } from '@/lib/app-types';

const smartlexApp: AppInstance = {
  name: 'Smartlex CRM',
  config: {
    companyName: 'Smartlex',
    primaryColor: 'amber',
  },
};

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <CRMRuntime app={smartlexApp} />
    </div>
  );
}
