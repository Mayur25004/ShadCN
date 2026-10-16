import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";


const navigation = [
    {label: "Dashboard", icon : LayoutDashboard},
    {label: "Inventory", icon : Package},
    {label: "Orders", icon: ShoppingCart},
    {label: "Eployees", icon: Users},
    {label :"Settings", icon: Settings}

];    


export function AppSidebar({
  activePage,
  onNavigate,
}: AppSidebarProps) {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-sidebar p-4">
      {/* Branding */}
      <div className="mb-8 flex items-center gap-2 px-2 pt-2">
        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-600 text-primary-foreground">
          <Package className="size-5" />
        </div>

        <div>
          <h1 className="font-bold tracking-tight">Nexus ERP</h1>
          <p className="text-xs text-muted-foreground">
            Business management
          </p>
        </div>
      </div>

      {/* Navigation */}
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Workspace
      </p>

      <nav className="flex-1 space-y-1">
        {navigation.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onNavigate(label)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              activePage === label
                ? "bg-blue-400 text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="rounded-xl bg-muted p-3">
        <p className="text-sm font-semibold">Workspace plan</p>
        <p className="mt-1 text-xs text-muted-foreground">
          ERP starter workspace
        </p>
      </div>
    </aside>
  );
}

