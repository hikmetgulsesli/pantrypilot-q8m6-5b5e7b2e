// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - PantryPilot Q8M6
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, ListFilter, Menu, Plus, Search, Settings, Trash2 } from "lucide-react";


export type SettingsAndPreferencesPantrypilotQ8m6ActionId = "button-1-1" | "button-2-2" | "add-item-3" | "compact-4" | "comfortable-5" | "manage-all-6" | "button-7-7" | "button-8-8" | "reset-to-defaults-9" | "cancel-10" | "save-preferences-11" | "pantry-1" | "insights-2" | "settings-3" | "pantry-4" | "insights-5" | "settings-6";

export interface SettingsAndPreferencesPantrypilotQ8m6Props {
  actions?: Partial<Record<SettingsAndPreferencesPantrypilotQ8m6ActionId, () => void>>;
}

export function SettingsAndPreferencesPantrypilotQ8m6({ actions }: SettingsAndPreferencesPantrypilotQ8m6Props) {
  return (
    <>
      {/* SideNavBar (Web/Tablet) */}
      <nav className="hidden md:flex flex-col bg-surface-container-low border-r border-outline-variant h-full w-64 p-md gap-sm flex-shrink-0 z-20">
      <div className="mb-lg px-xs">
      <h1 className="font-headline-md text-headline-md text-primary">PantryPilot</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Management</p>
      </div>
      <div className="flex flex-col gap-xs flex-1">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-colors hover:scale-[0.98]" href="#" data-action-id="pantry-1" onClick={actions?.["pantry-1"]}>
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md font-medium">Pantry</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-colors hover:scale-[0.98]" href="#" data-action-id="insights-2" onClick={actions?.["insights-2"]}>
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md font-medium">Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-xl transition-colors hover:scale-[0.98]" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-lg" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md font-bold">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
      {/* TopAppBar (Mobile/Web) */}
      <header className="flex items-center justify-between px-margin-desktop w-full h-16 bg-surface border-b border-outline-variant flex-shrink-0 z-10">
      <div className="flex items-center gap-md">
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-sm rounded-full transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="md:hidden">
      <h1 className="font-headline-md text-headline-md text-primary">PantryPilot</h1>
      </div>
      <h2 className="hidden md:block font-headline-md text-headline-md text-on-surface">Preferences</h2>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden sm:flex items-center">
      <Search className="absolute left-sm text-on-surface-variant text-sm pointer-events-none" aria-hidden={true} focusable="false" />
      <input className="w-64 pl-xl pr-sm py-xs bg-surface-container-low border border-outline-variant rounded-full font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search settings..." type="text" />
      </div>
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-sm rounded-full transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Search aria-hidden={true} focusable="false" />
      </button>
      <button className="px-md py-sm bg-primary text-on-primary font-label-bold text-label-bold rounded-lg shadow-sm hover:bg-surface-tint transition-colors active:opacity-80 flex items-center gap-xs" type="button" data-action-id="add-item-3" onClick={actions?.["add-item-3"]}>
      <Plus className="text-sm" aria-hidden={true} focusable="false" />
                          Add Item
                      </button>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <main className="flex-1 overflow-y-auto p-margin-desktop bg-background">
      <div className="max-w-4xl mx-auto space-y-xl pb-24">
      {/* Page Header */}
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Workflow Preferences</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Customize your pantry management experience and notification behaviors.</p>
      </div>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
      {/* Display & View Settings (Span 8) */}
      <section className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm border-b border-outline-variant pb-sm">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
                                  Appearance
                              </h3>
      <div className="space-y-lg">
      {/* Default View */}
      <div>
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-sm uppercase tracking-wider">Default View</label>
      <div className="flex gap-md">
      <label className="flex-1 cursor-pointer">
      <input checked={true} className="peer sr-only" name="default_view" type="radio" value="list" />
      <div className="p-md border border-outline-variant rounded-lg peer-checked:border-primary peer-checked:bg-primary-container/10 transition-colors flex items-center justify-center gap-sm">
      <Circle className="text-on-surface-variant peer-checked:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md font-medium">List View</span>
      </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="default_view" type="radio" value="grid" />
      <div className="p-md border border-outline-variant rounded-lg peer-checked:border-primary peer-checked:bg-primary-container/10 transition-colors flex items-center justify-center gap-sm">
      <Circle className="text-on-surface-variant peer-checked:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md font-medium">Grid View</span>
      </div>
      </label>
      </div>
      </div>
      {/* Display Density */}
      <div>
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-sm uppercase tracking-wider">Display Density</label>
      <div className="bg-surface-container-low rounded-lg border border-outline-variant p-sm flex gap-sm relative">
      {/* Decorative indicator for active state */}
      <div className="absolute left-sm top-sm bottom-sm w-[calc(50%-6px)] bg-surface-container-lowest border border-outline shadow-sm rounded-md transition-transform duration-300 ease-in-out" id="density-indicator"></div>
      <button className="flex-1 py-sm px-md text-center z-10 relative font-body-sm text-body-sm font-medium text-on-surface transition-colors" type="button" data-action-id="compact-4" onClick={actions?.["compact-4"]}>
                                              Compact
                                          </button>
      <button className="flex-1 py-sm px-md text-center z-10 relative font-body-sm text-body-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="comfortable-5" onClick={actions?.["comfortable-5"]}>
                                              Comfortable
                                          </button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Compact density shows more items per screen. Recommended for large pantries.</p>
      </div>
      </div>
      </section>
      {/* Notifications (Span 4) */}
      <section className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm border-b border-outline-variant pb-sm">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
                                  Alerts
                              </h3>
      <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-md">
      <label className="block font-label-bold text-label-bold text-on-surface-variant mb-xs uppercase tracking-wider">Expiry Threshold</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Notify me when items expire in:</p>
      <div className="relative">
      <select className="w-full appearance-none bg-surface border border-outline-variant rounded-lg py-sm pl-md pr-xl font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
      <option value="3">3 Days</option>
      <option selected={true} value="7">7 Days</option>
      <option value="14">14 Days</option>
      <option value="30">30 Days</option>
      </select>
      <Circle className="absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center justify-between pt-md border-t border-surface-container-high mt-md">
      <span className="font-body-md text-body-md font-medium">Low Stock Alerts</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      </section>
      {/* Saved Filters (Span 12) */}
      <section className="lg:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
      <div className="flex items-center justify-between mb-md border-b border-outline-variant pb-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
      <ListFilter className="text-primary" aria-hidden={true} focusable="false" />
                                      Saved Filters
                                  </h3>
      <button className="text-primary font-label-bold text-label-bold hover:underline" type="button" data-action-id="manage-all-6" onClick={actions?.["manage-all-6"]}>Manage All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
      {/* Filter Card 1 */}
      <div className="border border-outline-variant rounded-lg p-sm flex items-center justify-between hover:bg-surface-container-low transition-colors group cursor-pointer">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md font-medium text-on-surface">Expiring Soon</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">&lt; 7 days left</span>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-error p-xs rounded-full hover:bg-surface-container-highest" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <Trash2 className="text-sm" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Filter Card 2 */}
      <div className="border border-outline-variant rounded-lg p-sm flex items-center justify-between hover:bg-surface-container-low transition-colors group cursor-pointer">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md font-medium text-on-surface">Baking Supplies</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Category: Baking</span>
      </div>
      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-error p-xs rounded-full hover:bg-surface-container-highest" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Trash2 className="text-sm" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Add New Filter */}
      <div className="border border-dashed border-outline-variant rounded-lg p-sm flex items-center justify-center hover:bg-surface-container-low hover:border-primary transition-colors cursor-pointer text-on-surface-variant hover:text-primary gap-sm">
      <Plus className="text-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm font-medium">Create Filter</span>
      </div>
      </div>
      </section>
      </div>
      {/* Action Bar */}
      <div className="flex items-center justify-between pt-lg border-t border-outline-variant mt-xl">
      <button className="font-label-bold text-label-bold text-error hover:underline px-md py-sm transition-colors rounded-lg hover:bg-error-container/20" type="button" data-action-id="reset-to-defaults-9" onClick={actions?.["reset-to-defaults-9"]}>
                              Reset to Defaults
                          </button>
      <div className="flex gap-md">
      <button className="px-lg py-sm border border-outline-variant text-secondary font-label-bold text-label-bold rounded-lg hover:bg-surface-container-low transition-colors" type="button" data-action-id="cancel-10" onClick={actions?.["cancel-10"]}>
                                  Cancel
                              </button>
      <button className="px-lg py-sm bg-primary text-on-primary font-label-bold text-label-bold rounded-lg shadow-sm hover:bg-surface-tint transition-colors active:scale-95 flex items-center gap-sm" id="save-btn" type="button" data-action-id="save-preferences-11" onClick={actions?.["save-preferences-11"]}>
                                  Save Preferences
                              </button>
      </div>
      </div>
      </div>
      </main>
      {/* Toast Notification (Hidden by default) */}
      <div className="absolute bottom-margin-desktop left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-lg py-sm rounded-lg shadow-md flex items-center gap-sm font-body-md text-body-md transition-colors duration-300 opacity-0 pointer-events-none translate-y-4 z-50" id="toast">
      <Circle className="text-inverse-primary text-sm" aria-hidden={true} focusable="false" />
                  Preferences saved successfully
              </div>
      </div>
      {/* BottomNavBar (Mobile Only - Replaces SideNav) */}
      <nav className="md:hidden flex items-center justify-around w-full h-16 bg-surface-container-low border-t border-outline-variant pb-safe flex-shrink-0 z-20">
      <a className="flex flex-col items-center justify-center gap-1 w-full h-full text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#" data-action-id="pantry-4" onClick={actions?.["pantry-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-bold text-label-bold text-[10px]">Pantry</span>
      </a>
      <a className="flex flex-col items-center justify-center gap-1 w-full h-full text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#" data-action-id="insights-5" onClick={actions?.["insights-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-bold text-label-bold text-[10px]">Insights</span>
      </a>
      <a className="flex flex-col items-center justify-center gap-1 w-full h-full text-primary relative" href="#" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <div className="absolute inset-x-4 top-1 bottom-1 bg-primary-container rounded-xl -z-10"></div>
      <Settings data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-bold text-label-bold text-[10px] text-on-primary-container">Settings</span>
      </a>
      </nav>
      
    </>
  );
}
