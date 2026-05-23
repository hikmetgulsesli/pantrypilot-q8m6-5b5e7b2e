export type PantryCategory = 'produce' | 'dairy' | 'canned-goods' | 'bakery' | 'frozen';

export type PantryItem = {
  id: string;
  name: string;
  category: PantryCategory;
  quantity: number;
  unit: string;
  expiresOn: string;
  reorderAt: number;
  reorderQuantity?: number;
};

export type PantryPreferences = {
  density: 'compact' | 'comfortable';
  notifications: boolean;
  defaultCategory: PantryCategory;
};

export const PANTRYPILOT_Q8M6_FIXTURE_ITEMS: PantryItem[] = [
  {
    id: 'item-spinach',
    name: 'Baby spinach',
    category: 'produce',
    quantity: 2,
    unit: 'bags',
    expiresOn: '2026-05-28',
    reorderAt: 1,
    reorderQuantity: 3,
  },
  {
    id: 'item-yogurt',
    name: 'Greek yogurt',
    category: 'dairy',
    quantity: 6,
    unit: 'cups',
    expiresOn: '2026-06-02',
    reorderAt: 2,
    reorderQuantity: 6,
  },
  {
    id: 'item-beans',
    name: 'Black beans',
    category: 'canned-goods',
    quantity: 4,
    unit: 'cans',
    expiresOn: '2027-01-15',
    reorderAt: 3,
    reorderQuantity: 4,
  },
];

export const PANTRYPILOT_Q8M6_FIXTURE_PREFERENCES: PantryPreferences = {
  density: 'comfortable',
  notifications: true,
  defaultCategory: 'produce',
};
