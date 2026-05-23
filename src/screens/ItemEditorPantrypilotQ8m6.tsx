// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Item Editor - PantryPilot Q8M6
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { ArrowLeft, Circle, Menu, Plus, Settings, TriangleAlert } from "lucide-react";


export type ItemEditorPantrypilotQ8m6ActionId = "button-1-1" | "add-item-2" | "button-3-3" | "button-4-4" | "cancel-5" | "save-changes-6" | "pantry-1" | "insights-2" | "settings-3" | "back-to-pantry-4";

export interface ItemEditorPantrypilotQ8m6Props {
  actions?: Partial<Record<ItemEditorPantrypilotQ8m6ActionId, () => void>>;
}

export function ItemEditorPantrypilotQ8m6({ actions }: ItemEditorPantrypilotQ8m6Props) {
  const [itemName, setItemName] = useState("Organic Black Beans");
  const [category, setCategory] = useState("canned");
  const [quantity, setQuantity] = useState("4");
  const [unit, setUnit] = useState("cans");
  const [expiryDate, setExpiryDate] = useState("2025-08-14");
  const [priority, setPriority] = useState("medium");

  const adjustQuantity = (delta: number) => {
    setQuantity((currentQuantity) => String(Math.max(0, Number(currentQuantity || 0) + delta)));
  };

  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col p-md gap-sm bg-surface-container-low border-r border-outline-variant z-20">
      {/* Brand Header */}
      <div className="px-md py-lg mb-sm">
      <h1 className="font-headline-md text-headline-md text-primary tracking-tight">PantryPilot</h1>
      <p className="font-body-sm text-body-sm text-secondary">Management</p>
      </div>
      {/* Navigation Links */}
      <ul className="flex flex-col gap-xs flex-1">
      {/* Active Tab: Pantry (Context: Item Editor belongs to Pantry) */}
      <li>
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container font-bold rounded-xl transition-colors scale-95 active:scale-100" href="#" data-action-id="pantry-1" onClick={actions?.["pantry-1"]}>
      <Circle style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Pantry</span>
      </a>
      </li>
      {/* Inactive Tabs */}
      <li>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-colors hover:scale-[0.98] active:scale-100" href="#" data-action-id="insights-2" onClick={actions?.["insights-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-colors hover:scale-[0.98] active:scale-100" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 relative h-full overflow-hidden">
      {/* TopAppBar (Shared Component) */}
      <header className="bg-surface flex items-center justify-between px-margin-desktop w-full h-16 border-b border-outline-variant z-10 shrink-0">
      <div className="flex items-center gap-md">
      <button className="md:hidden flex items-center justify-center p-xs rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-md text-headline-md text-primary font-bold">
                          PantryPilot Q8M6
                      </div>
      </div>
      <div className="flex items-center gap-md">
      {/* Trailing Primary Action (from JSON) */}
      <button className="hidden md:flex items-center gap-xs px-md h-8 bg-primary text-on-primary rounded-DEFAULT hover:bg-primary-container hover:text-on-primary-container transition-colors font-body-sm text-body-sm font-bold" type="button" data-action-id="add-item-2" onClick={actions?.["add-item-2"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          Add Item
                      </button>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop pb-[120px]">
      <div className="max-w-[800px] mx-auto w-full flex flex-col gap-lg">
      {/* Page Header & Navigation Context */}
      <div className="flex items-center gap-sm text-secondary font-body-sm text-body-sm">
      <a className="hover:text-primary transition-colors flex items-center gap-xs" href="#" data-action-id="back-to-pantry-4" onClick={actions?.["back-to-pantry-4"]}>
      <ArrowLeft className="text-[16px]" aria-hidden={true} focusable="false" />
                              Back to Pantry
                          </a>
      </div>
      <div className="flex flex-col gap-xs">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Edit Item</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Update inventory details for this specific product.</p>
      </div>
      {/* Unsaved Changes Banner */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex items-center justify-between shadow-sm" role="alert">
      <div className="flex items-center gap-md text-on-surface-variant">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">You have unsaved changes. Remember to save before leaving.</span>
      </div>
      </div>
      {/* Bento Grid Layout for Form */}
      <form className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
      {/* Left Column: Core Details */}
      <div className="md:col-span-8 flex flex-col gap-gutter">
      {/* Card: Basic Information */}
      <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-lg flex flex-col gap-md shadow-sm">
      <h3 className="font-headline-md text-headline-md border-b border-surface-variant pb-sm mb-xs">Basic Information</h3>
      {/* Field: Item Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-bold text-label-bold text-on-surface" htmlFor="item-name">Item Name <span className="text-error">*</span></label>
      <input aria-describedby="item-name-error" aria-invalid="true" className="h-10 px-md rounded-DEFAULT border border-error bg-surface-container-lowest focus:border-error focus:ring-1 focus:ring-error outline-none transition-colors font-body-md text-body-md text-on-surface w-full" id="item-name" type="text" value={itemName} onChange={(event) => setItemName(event.target.value)} />
      {/* Validation Message Inline */}
      <p className="font-body-sm text-body-sm text-error mt-xs flex items-center gap-[4px]" id="item-name-error">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                          Item Name cannot contain special characters.
                                      </p>
      </div>
      {/* Field: Category */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-bold text-label-bold text-on-surface" htmlFor="category">Category</label>
      <div className="relative w-full">
      <select className="appearance-none h-10 px-md pr-xl rounded-DEFAULT border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface w-full cursor-pointer" id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
      <option value="canned">Canned Goods</option>
      <option value="dry">Dry Goods &amp; Pasta</option>
      <option value="baking">Baking Supplies</option>
      <option value="spices">Spices &amp; Seasonings</option>
      </select>
      <Circle className="absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-secondary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Card: Inventory Metrics */}
      <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-lg flex flex-col gap-md shadow-sm">
      <h3 className="font-headline-md text-headline-md border-b border-surface-variant pb-sm mb-xs">Inventory Status</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {/* Field: Quantity Toggle (Specialized Component) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-bold text-label-bold text-on-surface">Current Quantity</label>
      <div className="flex items-center gap-xs">
      <div className="flex items-center border border-outline-variant rounded-DEFAULT overflow-hidden bg-surface-container-lowest h-10">
      <button className="w-10 h-full flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant transition-colors border-r border-outline-variant" type="button" data-action-id="button-3-3" onClick={() => { adjustQuantity(-1); actions?.["button-3-3"]?.(); }}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <input className="w-12 h-full text-center border-none focus:ring-0 font-mono-data text-mono-data bg-transparent text-on-surface p-0" type="text" inputMode="numeric" value={quantity} onChange={(event) => setQuantity(event.target.value.replace(/\D/g, ""))} />
      <button className="w-10 h-full flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant transition-colors border-l border-outline-variant" type="button" data-action-id="button-4-4" onClick={() => { adjustQuantity(1); actions?.["button-4-4"]?.(); }}>
      <Plus aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="relative w-[100px]">
      <select className="appearance-none h-10 px-sm pr-lg rounded-DEFAULT border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface w-full cursor-pointer" value={unit} onChange={(event) => setUnit(event.target.value)}>
      <option value="cans">Cans</option>
      <option value="boxes">Boxes</option>
      <option value="lbs">lbs</option>
      <option value="items">Items</option>
      </select>
      <Circle className="absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Field: Expiry Date */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-bold text-label-bold text-on-surface" htmlFor="expiry">Expiry Date</label>
      <div className="relative w-full">
      <input className="appearance-none h-10 px-md rounded-DEFAULT border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface w-full cursor-pointer" id="expiry" type="date" value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Meta & Actions */}
      <div className="md:col-span-4 flex flex-col gap-gutter">
      {/* Card: Classification */}
      <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-lg flex flex-col gap-md shadow-sm">
      <h3 className="font-headline-md text-headline-md border-b border-surface-variant pb-sm mb-xs">Classification</h3>
      {/* Field: Priority */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-bold text-label-bold text-on-surface">Restock Priority</label>
      <div className="flex flex-col gap-xs">
      <label className="flex items-center gap-sm p-sm rounded-DEFAULT border border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
      <input checked={priority === "high"} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="priority" type="radio" value="high" onChange={(event) => setPriority(event.target.value)} />
      <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-error inline-block"></span> High
                                              </span>
      </label>
      <label className="flex items-center gap-sm p-sm rounded-DEFAULT border border-primary bg-primary-fixed/20 cursor-pointer transition-colors relative overflow-hidden">
      <input checked={priority === "medium"} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="priority" type="radio" value="medium" onChange={(event) => setPriority(event.target.value)} />
      <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-xs font-bold">
      <span className="w-2 h-2 rounded-full bg-surface-tint inline-block"></span> Medium
                                              </span>
      </label>
      <label className="flex items-center gap-sm p-sm rounded-DEFAULT border border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
      <input checked={priority === "low"} className="text-primary focus:ring-primary h-4 w-4 border-outline-variant" name="priority" type="radio" value="low" onChange={(event) => setPriority(event.target.value)} />
      <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim inline-block"></span> Low
                                              </span>
      </label>
      </div>
      </div>
      </div>
      </div>
      </form>
      </div>
      </main>
      {/* Fixed Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-md flex items-center justify-end gap-md z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <button className="h-8 px-md rounded-DEFAULT border border-outline bg-transparent text-secondary font-body-sm text-body-sm hover:bg-surface-container-low transition-colors" type="button" data-action-id="cancel-5" onClick={actions?.["cancel-5"]}>
                      Cancel
                  </button>
      <button className="h-8 px-lg rounded-DEFAULT bg-primary text-on-primary font-body-sm text-body-sm font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm" type="submit" data-action-id="save-changes-6" onClick={actions?.["save-changes-6"]}>
                      Save Changes
                  </button>
      </div>
      </div>
    </>
  );
}
