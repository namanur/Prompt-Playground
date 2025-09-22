import StudioTabsClient from '@/components/studio/StudioTabsClient';

export default function Page() {
  // no lockedTab => shows the tab bar and lets users switch
  return <StudioTabsClient />;
}
