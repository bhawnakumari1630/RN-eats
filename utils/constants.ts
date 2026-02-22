const address_by_query_URL = (query: string) =>
  `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=8&countrycodes=in`;

const locate_on_map_URL = (lat: string | number, lng: string | number) => {
  if (!lat || !lng) return;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
};

const current_address_by_coords = (
  lat: string | number,
  lng: string | number,
) => {
  if (!lat || !lng) return;
  return `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
};
export { address_by_query_URL, locate_on_map_URL, current_address_by_coords };

// -----------
export const IMAGE_BASE_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/`;
