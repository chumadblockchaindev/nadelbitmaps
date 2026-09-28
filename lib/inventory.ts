export type InventoryStatus = "available" | "occupied";
export type InventoryType = "billboard" | "led";
export type InventorySubtype = "standard" | "large" | "portrait";

export interface InventoryItem {
  id: number;
  location: string;
  type: InventoryType;
  subtype: InventorySubtype;
  size: string;
  status: InventoryStatus;
  imageUrl: string;
}

export interface InventoryResponse {
  next: { page: number; limit: number } | null;
  results: InventoryItem[];
  numberOfPages: number;
  currentPage: number;
}

export interface InventoryQuery {
  page?: number;
  limit?: number;
  status?: InventoryStatus;
  type?: InventoryType;
  subtype?: InventorySubtype;
  location?: string;
  size?: string;
}

const INVENTORY_API_BASE_URL = "https://nadelhub.onrender.com";

export async function fetchInventory(
  query: InventoryQuery = {}
): Promise<InventoryResponse> {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  });

  const queryString = params.toString();
  const url = `${INVENTORY_API_BASE_URL}/api/inventory${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch inventory (${response.status})`);
  }

  return response.json();
}
