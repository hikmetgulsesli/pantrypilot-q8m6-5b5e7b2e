// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Item Operations - PantryPilot Q8M6
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, Plus, Search, Settings, TriangleAlert, X } from "lucide-react";
import type { PantryItem } from "../__fixtures__/pantrypilot-q8m6.fixture";


export type ItemOperationsPantrypilotQ8m6ActionId = "button-1-1" | "sync-2" | "add-item-3" | "all-items-4" | "produce-5" | "dairy-6" | "canned-goods-7" | "expiring-8" | "button-9-9" | "button-10-10" | "button-11-11" | "button-12-12" | "button-13-13" | "button-14-14" | "button-15-15" | "edit-16" | "reorder-17" | "pantry-1" | "insights-2" | "settings-3";

export interface ItemOperationsPantrypilotQ8m6Props {
  actions?: Partial<Record<ItemOperationsPantrypilotQ8m6ActionId, () => void>>;
  counts?: {
    total: number;
    expiring: number;
    reorder: number;
  };
  items?: PantryItem[];
  selectedItem?: PantryItem | null;
}

const EXPIRING_SOON_DAYS = 7;
const MS_PER_DAY = 86_400_000;

const categoryLabels: Record<PantryItem["category"], string> = {
  produce: "Produce",
  dairy: "Dairy",
  "canned-goods": "Canned Goods",
  bakery: "Bakery",
  frozen: "Frozen",
};

const dateDiffInDays = (isoDate: string) => {
  const expires = new Date(`${isoDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((expires.getTime() - today.getTime()) / MS_PER_DAY);
};

const formatExpiry = (isoDate: string) => {
  const days = dateDiffInDays(isoDate);
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));
};

const getStatus = (item: PantryItem) => {
  if (dateDiffInDays(item.expiresOn) <= EXPIRING_SOON_DAYS) return "Expiring";
  if (item.quantity <= item.reorderAt) return "Low Stock";
  return "In Stock";
};

const quantityText = (item: PantryItem) => `${item.quantity} ${item.unit}`;

export function ItemOperationsPantrypilotQ8m6({ actions, counts, items = [], selectedItem }: ItemOperationsPantrypilotQ8m6Props) {
  const visibleItems = items.slice(0, 3);
  const detailItem = selectedItem ?? visibleItems[0] ?? null;

  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant dark:border-outline fixed left-0 top-0 h-full w-64 flex-col p-md gap-sm z-20">
      <div className="mb-xl px-sm">
      <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">PantryPilot</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Management</p>
      </div>
      <div className="flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container font-bold rounded-xl scale-95 active:scale-100 transition-transform" href="#" data-action-id="pantry-1" onClick={actions?.["pantry-1"]}>
      <Circle  data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span>Pantry</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-95 active:scale-100 transition-transform" href="#" data-action-id="insights-2" onClick={actions?.["insights-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-95 active:scale-100 transition-transform" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 relative h-full">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline flex items-center justify-between px-margin-desktop w-full h-16 shrink-0 z-10 sticky top-0">
      <div className="flex items-center gap-md md:hidden">
      <button className="text-on-surface-variant p-sm rounded-full hover:bg-surface-container-low transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">PantryPilot Q8M6</span>
      </div>
      <div className="hidden md:flex flex-1 max-w-xl mx-auto relative">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-sm pl-xl pr-md font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-on-surface placeholder:text-on-surface-variant" placeholder="Search inventory..." type="text" />
      </div>
      <div className="flex items-center gap-md ml-auto">
      <button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-full text-secondary font-body-sm font-bold hover:bg-surface-container-low transition-colors h-8" type="button" data-action-id="sync-2" onClick={actions?.["sync-2"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="hidden sm:inline">Sync</span>
      </button>
      <button className="flex items-center gap-xs px-md py-sm bg-primary text-on-primary rounded-full font-body-sm font-bold hover:opacity-90 active:opacity-80 transition-opacity h-8" type="button" data-action-id="add-item-3" onClick={actions?.["add-item-3"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="hidden sm:inline">Add Item</span>
      </button>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface-bright flex gap-lg">
      {/* Left Column: Primary List */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* Metrics Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex items-center justify-between hover:shadow-sm transition-shadow">
      <div>
      <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-xs">Total Items</p>
      <p className="font-headline-lg text-headline-lg text-on-surface">{counts?.total ?? items.length}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex items-center justify-between hover:shadow-sm transition-shadow relative overflow-hidden">
      <div className="absolute inset-0 bg-error/5 pointer-events-none"></div>
      <div>
      <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-xs">Expiring Soon</p>
      <p className="font-headline-lg text-headline-lg text-error">{counts?.expiring ?? items.filter((item) => getStatus(item) === "Expiring").length}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center relative z-10">
      <Circle className="text-on-error-container" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex items-center justify-between hover:shadow-sm transition-shadow">
      <div>
      <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-xs">Low Stock</p>
      <p className="font-headline-lg text-headline-lg text-[#b87c00]">{counts?.reorder ?? items.filter((item) => item.quantity <= item.reorderAt).length}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-[#ffecb3]/50 flex items-center justify-center">
      <TriangleAlert className="text-[#b87c00]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Filters */}
      <div className="flex items-center gap-sm mb-md overflow-x-auto pb-xs scrollbar-hide">
      <button className="px-md py-[6px] bg-secondary-container text-on-secondary-container rounded-full font-body-sm font-bold border border-transparent whitespace-nowrap" type="button" data-action-id="all-items-4" onClick={actions?.["all-items-4"]}>All Items</button>
      <button className="px-md py-[6px] bg-surface text-on-surface-variant border border-outline-variant rounded-full font-body-sm hover:bg-surface-container-low transition-colors whitespace-nowrap" type="button" data-action-id="produce-5" onClick={actions?.["produce-5"]}>Produce</button>
      <button className="px-md py-[6px] bg-surface text-on-surface-variant border border-outline-variant rounded-full font-body-sm hover:bg-surface-container-low transition-colors whitespace-nowrap" type="button" data-action-id="dairy-6" onClick={actions?.["dairy-6"]}>Dairy</button>
      <button className="px-md py-[6px] bg-surface text-on-surface-variant border border-outline-variant rounded-full font-body-sm hover:bg-surface-container-low transition-colors whitespace-nowrap" type="button" data-action-id="canned-goods-7" onClick={actions?.["canned-goods-7"]}>Canned Goods</button>
      <button className="px-md py-[6px] bg-surface text-on-surface-variant border border-outline-variant rounded-full font-body-sm hover:bg-surface-container-low transition-colors whitespace-nowrap text-error border-error/30 hover:bg-error/5" type="button" data-action-id="expiring-8" onClick={actions?.["expiring-8"]}>Expiring</button>
      </div>
      {/* Data List (Glass/Modern feel via subtle borders and hover states) */}
      <div className="bg-surface border border-outline-variant rounded-xl flex-1 flex flex-col min-h-0 overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-md p-md border-b border-outline-variant bg-surface-container-lowest font-label-bold text-label-bold text-on-surface-variant uppercase sticky top-0 z-10">
      <div>Name</div>
      <div>Category</div>
      <div className="text-right">Quantity</div>
      <div>Expiry Date</div>
      <div className="text-right">Status</div>
      </div>
      {/* Rows */}
      <div className="overflow-y-auto flex-1">
      {visibleItems.length === 0 && (
      <div className="p-md font-body-sm text-body-sm text-on-surface-variant">
      No pantry items match the current view.
      </div>
      )}
      {visibleItems[0] && (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-md p-md items-center border-b border-outline-variant hover:bg-[#F1F3F5] bg-[#F1F3F5] cursor-pointer transition-colors group">
      <div className="font-mono-data text-mono-data text-on-surface truncate">{visibleItems[0].name}</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{categoryLabels[visibleItems[0].category]}</div>
      <div className="flex items-center justify-end gap-xs">
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant hover:bg-surface-container text-secondary" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}><Circle className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <span className="font-mono-data text-mono-data w-6 text-center">{visibleItems[0].quantity}</span>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant hover:bg-surface-container text-secondary" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}><Plus className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className={getStatus(visibleItems[0]) === "Expiring" ? "font-body-sm text-body-sm text-error" : "font-body-sm text-body-sm text-on-surface-variant"}>{formatExpiry(visibleItems[0].expiresOn)}</div>
      <div className="flex justify-end">
      <span className={getStatus(visibleItems[0]) === "Expiring" ? "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-error/10 text-error" : "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary"}>{getStatus(visibleItems[0])}</span>
      </div>
      </div>
      )}
      {visibleItems[1] && (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-md p-md items-center border-b border-outline-variant hover:bg-[#F1F3F5] cursor-pointer transition-colors group">
      <div className="font-mono-data text-mono-data text-on-surface truncate">{visibleItems[1].name}</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{categoryLabels[visibleItems[1].category]}</div>
      <div className="flex items-center justify-end gap-xs">
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant hover:bg-surface-container text-secondary" type="button" data-action-id="button-11-11" onClick={actions?.["button-11-11"]}><Circle className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <span className="font-mono-data text-mono-data w-6 text-center">{visibleItems[1].quantity}</span>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant hover:bg-surface-container text-secondary" type="button" data-action-id="button-12-12" onClick={actions?.["button-12-12"]}><Plus className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className={getStatus(visibleItems[1]) === "Expiring" ? "font-body-sm text-body-sm text-error" : "font-body-sm text-body-sm text-on-surface-variant"}>{formatExpiry(visibleItems[1].expiresOn)}</div>
      <div className="flex justify-end">
      <span className={getStatus(visibleItems[1]) === "Expiring" ? "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-error/10 text-error" : "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary"}>{getStatus(visibleItems[1])}</span>
      </div>
      </div>
      )}
      {visibleItems[2] && (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-md p-md items-center border-b border-outline-variant hover:bg-[#F1F3F5] cursor-pointer transition-colors group">
      <div className="font-mono-data text-mono-data text-on-surface truncate">{visibleItems[2].name}</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{categoryLabels[visibleItems[2].category]}</div>
      <div className="flex items-center justify-end gap-xs">
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant hover:bg-surface-container text-secondary" type="button" data-action-id="button-13-13" onClick={actions?.["button-13-13"]}><Circle className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <span className="font-mono-data text-mono-data w-6 text-center">{visibleItems[2].quantity}</span>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant hover:bg-surface-container text-secondary" type="button" data-action-id="button-14-14" onClick={actions?.["button-14-14"]}><Plus className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className={getStatus(visibleItems[2]) === "Expiring" ? "font-body-sm text-body-sm text-error" : "font-body-sm text-body-sm text-on-surface-variant"}>{formatExpiry(visibleItems[2].expiresOn)}</div>
      <div className="flex justify-end">
      <span className={getStatus(visibleItems[2]) === "Expiring" ? "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-error/10 text-error" : "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary"}>{getStatus(visibleItems[2])}</span>
      </div>
      </div>
      )}
      </div>
      </div>
      </div>
      {/* Right Column: Detail Preview Panel (Hidden on mobile, visible on desktop) */}
      <div className="hidden xl:flex w-80 flex-col bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] h-fit sticky top-margin-desktop">
      <div className="h-32 bg-surface-container-high relative">
      {/* Decorative pattern instead of image */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 2px 2px, #316342 1px, transparent 0)", backgroundSize: "16px 16px"}}></div>
      <button className="absolute top-sm right-sm w-8 h-8 rounded-full bg-surface/50 backdrop-blur-sm flex items-center justify-center text-on-surface hover:bg-surface transition-colors" type="button" data-action-id="button-15-15" onClick={actions?.["button-15-15"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-md -mt-8 relative z-10">
      <div className="w-16 h-16 rounded-xl bg-surface border border-outline-variant flex items-center justify-center shadow-sm mb-md bg-white">
      <Circle className="text-[32px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">{detailItem?.name ?? "No item selected"}</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">{detailItem ? `${categoryLabels[detailItem.category]} pantry item.` : "Select an item to review details."}</p>
      <div className="grid grid-cols-2 gap-sm mb-md">
      <div className="bg-surface-container-low p-sm rounded-lg">
      <p className="font-label-bold text-label-bold text-on-surface-variant mb-1">Stock Level</p>
      <p className="font-mono-data text-mono-data">{detailItem ? quantityText(detailItem) : "0 units"}</p>
      </div>
      <div className="bg-surface-container-low p-sm rounded-lg">
      <p className="font-label-bold text-label-bold text-on-surface-variant mb-1">Expires</p>
      <p className="font-mono-data text-mono-data">{detailItem ? formatExpiry(detailItem.expiresOn) : "N/A"}</p>
      </div>
      </div>
      <div className="border-t border-outline-variant pt-md">
      <h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-sm">Recent Activity</h3>
      <div className="flex flex-col gap-sm relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-high">
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface border-2 border-primary flex items-center justify-center mt-1 bg-white">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">{detailItem ? `${detailItem.name} quantity: ${quantityText(detailItem)}` : "No recent item activity"}</p>
      <p className="font-label-bold text-label-bold text-on-surface-variant">Current pantry state</p>
      </div>
      </div>
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center mt-1"></div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">{detailItem ? `${getStatus(detailItem)} status` : "Awaiting inventory"}</p>
      <p className="font-label-bold text-label-bold text-on-surface-variant">{detailItem ? categoryLabels[detailItem.category] : "Pantry"}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="p-md mt-auto border-t border-outline-variant bg-surface-container-lowest flex gap-sm">
      <button className="flex-1 py-sm border border-outline-variant rounded-lg font-body-sm font-bold text-secondary hover:bg-surface-container-low transition-colors" type="button" data-action-id="edit-16" onClick={actions?.["edit-16"]}>Edit</button>
      <button className="flex-1 py-sm bg-primary text-on-primary rounded-lg font-body-sm font-bold hover:opacity-90 transition-opacity" type="button" data-action-id="reorder-17" onClick={actions?.["reorder-17"]}>Reorder</button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
