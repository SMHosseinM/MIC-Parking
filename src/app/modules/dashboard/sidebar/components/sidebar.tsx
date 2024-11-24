import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDown, Users } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next"


export default function DashboardSidebar() {
    const { t } = useTranslation();
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <div className="p-4">
                        <a className="text-lg font-semibold" href="/dashboard">{t('dashboard')}</a>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarGroup>
                            <SidebarGroupLabel asChild>
                                <CollapsibleTrigger>
                                    {t('dashboardSettings')}
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <CollapsibleContent>
                                    <SidebarMenu>
                                        <SidebarMenuButton asChild>
                                            <a href="/dashboard/members/">
                                                <Users className="mr-2 h-4 w-4" />
                                                <span>{t('dashboardSettingsMembers')}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenu>
                                </CollapsibleContent>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </Collapsible>
                </SidebarContent>
            </Sidebar>
            <Outlet />
        </SidebarProvider>
    )
}