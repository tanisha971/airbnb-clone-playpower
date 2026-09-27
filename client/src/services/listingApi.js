const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

export const getListing = async (listingId) => {
  const response = await fetch(
    `${API_URL}/listings/${listingId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch listing");
  }

  const result = await response.json();

  return result.data;
};