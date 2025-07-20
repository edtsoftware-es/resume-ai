import { SideNav } from '@/components/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col justify-center pt-6 md:flex-row md:overflow-hidden">
      <div className="h-full w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow px-6 md:overflow-y-auto">{children}</div>
    </div>
  );
}
