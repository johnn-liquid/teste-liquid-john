import { AppSidebar } from "@/components/app-sidebar"
import { PesquisaView } from "@/components/pesquisa-view"
import { SidebarInset } from "@workspace/ui/components/sidebar"

export default function PesquisaPage() {
  return (
    <div className="flex h-svh w-full overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-0 overflow-hidden">
        <PesquisaView />
      </SidebarInset>
    </div>
  )
}
