import * as React from "react"
import { Github, MessagesSquare } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 text-yellow-900 font-sarabun shadow-md border border-yellow-300"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Header with Brand */}
      <SidebarHeader className="p-4 border-b border-yellow-300">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="https://assistant-ui.com" target="_blank" className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-xl bg-yellow-300 text-yellow-900 p-2 shadow-sm transition-transform duration-300 ease-in-out">
                  <MessagesSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-lg">Sarthi-Ai</span>
                  <span className="text-sm text-yellow-700">Your AI Assistant</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content with Threads */}
      <SidebarContent className="p-2 overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 hover:scrollbar-thumb-yellow-400 transition-colors duration-300">
        <ThreadList />
      </SidebarContent>

      {/* Decorative Rail */}
      <SidebarRail className="hidden md:block bg-yellow-100 border-l border-yellow-300" />

      {/* Footer with GitHub */}
      <SidebarFooter className="p-4 border-t border-yellow-300">
        <SidebarMenu>
          <SidebarMenuItem>
            
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
