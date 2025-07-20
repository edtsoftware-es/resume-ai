import { SideNav } from '@/components/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row justify-center overflow-hidden pt-6">
      <div className="h-full w-64 flex-none">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto px-6">{children}</div>
    </div>
  );
}
