// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - PantryPilot Q8M6
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type EmptyAndErrorRecoveryPantrypilotQ8m6ActionId = "add-item-1" | "retry-load-2" | "create-first-item-3" | "clear-all-filters-4" | "pantry-1" | "insights-2" | "settings-3";

export interface EmptyAndErrorRecoveryPantrypilotQ8m6Props {
  actions?: Partial<Record<EmptyAndErrorRecoveryPantrypilotQ8m6ActionId, () => void>>;
}

export function EmptyAndErrorRecoveryPantrypilotQ8m6({ actions }: EmptyAndErrorRecoveryPantrypilotQ8m6Props) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col p-md gap-sm bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant dark:border-outline h-full w-64 fixed left-0 top-0">
      <div className="mb-lg px-sm">
      <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">PantryPilot</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Management</p>
      </div>
      <div className="flex flex-col gap-sm flex-grow">
      {/* Active: Pantry (Defaulting to Pantry as it's the primary list view that would be empty) */}
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container font-bold rounded-xl scale-95 active:scale-100 transition-transform" href="#" data-action-id="pantry-1" onClick={actions?.["pantry-1"]}>
      <Circle  data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span>Pantry</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl scale-95 active:scale-100 transition-transform" href="#" data-action-id="insights-2" onClick={actions?.["insights-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl scale-95 active:scale-100 transition-transform" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
      {/* TopAppBar (Web) */}
      <header className="flex items-center justify-between px-margin-desktop w-full h-16 bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline">
      <div className="flex-1">
      {/* Search bar placeholder */}
      <div className="hidden md:flex items-center max-w-md bg-surface-container rounded-full px-md py-xs border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
      <Search className="text-on-surface-variant mr-sm" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full outline-none text-on-surface" placeholder="Search pantry..." type="text" />
      </div>
      </div>
      <div className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim hidden md:block">
                      PantryPilot Q8M6
                  </div>
      <div className="flex-1 flex justify-end">
      <button className="bg-primary text-on-primary font-body-sm text-body-sm font-bold h-xl px-md rounded hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="add-item-1" onClick={actions?.["add-item-1"]}>
                          Add Item
                      </button>
      </div>
      </header>
      {/* Main Recovery Area */}
      <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface flex items-center justify-center">
      <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
      {/* Illustration Side (Empty State/Error Graphic) */}
      <div className="hidden md:flex justify-center">
      <div className="relative w-64 h-64 bg-surface-container-lowest rounded-full border border-outline-variant shadow-sm flex items-center justify-center overflow-hidden">
      {/* Abstract placeholder for missing data */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "repeating-linear-gradient(45deg, var(--tw-colors-outline-variant) 0, var(--tw-colors-outline-variant) 1px, transparent 1px, transparent 10px)"}}></div>
      <Circle  style={{fontSize: "80px"}} className="text-outline" aria-hidden={true} focusable="false" />
      <Circle  style={{fontSize: "32px"}} className="text-error absolute bottom-1/4 right-1/4 bg-surface rounded-full p-1" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Content Side */}
      <div className="flex flex-col gap-md text-center md:text-left bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
      <div className="mb-sm">
      <span className="inline-flex items-center gap-xs px-sm py-xs bg-error-container text-on-error-container rounded-full font-label-bold text-label-bold mb-md">
      <TriangleAlert  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Sync Issue
                              </span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Failed to load inventory</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                                  We couldn't retrieve your pantry items matching the current filters. Please check your connection or clear filters to try again.
                              </p>
      </div>
      <div className="p-md bg-surface-container-low rounded-lg border border-outline-variant">
      <h3 className="font-label-bold text-label-bold text-on-surface mb-xs flex items-center gap-xs md:justify-start justify-center">
      <Circle  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Quick Tip
                              </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                                  If you're starting fresh, you can create your first item now. Otherwise, try clearing your active search filters.
                              </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-sm mt-md justify-center md:justify-start">
      <button className="flex items-center justify-center gap-xs bg-primary text-on-primary font-body-sm text-body-sm font-bold h-xl px-md rounded hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="retry-load-2" onClick={actions?.["retry-load-2"]}>
      <RefreshCw  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                                  Retry Load
                              </button>
      <button className="flex items-center justify-center gap-xs bg-surface-container-lowest text-on-surface font-body-sm text-body-sm font-bold h-xl px-md rounded border border-outline-variant hover:bg-surface-container-low transition-colors" type="button" data-action-id="create-first-item-3" onClick={actions?.["create-first-item-3"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                                  Create First Item
                              </button>
      </div>
      <div className="mt-sm">
      <button className="font-label-bold text-label-bold text-secondary hover:text-on-surface transition-colors underline decoration-secondary/30 underline-offset-4" type="button" data-action-id="clear-all-filters-4" onClick={actions?.["clear-all-filters-4"]}>
                                  Clear All Filters
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
