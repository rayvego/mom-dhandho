import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </main>
  );
}
