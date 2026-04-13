import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Separator } from "@workspace/ui/components/separator"
import { ThemeToggle } from "@/components/theme-toggle"

interface PageShellProps {
  breadcrumb?: React.ReactNode
  actions?: React.ReactNode
  children: React.ReactNode
  noPadding?: boolean
}

export function PageShell({ breadcrumb, actions, children, noPadding }: PageShellProps) {
  return (
    <div className="flex h-svh w-full overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-0 overflow-hidden">
        <header className="flex items-center gap-2 h-12 px-4 border-b border-border flex-shrink-0">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          {breadcrumb}
          <div className="ml-auto flex items-center gap-2">
            {actions}
            <ThemeToggle />
          </div>
        </header>
        <main className={noPadding ? "flex-1 overflow-hidden flex flex-col" : "flex-1 overflow-y-auto p-6"}>
          {children}
        </main>
      </SidebarInset>
    </div>
  )
}
