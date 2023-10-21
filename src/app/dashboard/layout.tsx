import Sidebar from '@/components/Sidebar';
import CustomMantineProvider from '@/components/provider/CustomMantineProvider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <CustomMantineProvider>
      <div className="h-screen w-screen flex">
        <div className="w-full h-full max-w-[16rem]">
          <Sidebar />
        </div>
        <div className="h-screen flex flex-col overflow-hidden w-[calc(100vw-15rem)]">
          {children}
        </div>
      </div>
    </CustomMantineProvider>
  )
}
