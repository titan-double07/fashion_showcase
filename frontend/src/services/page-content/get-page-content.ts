import { API_URL } from "@/lib/constants";
import qs from "qs";
export async function getDesignCollection() {
  const url = new URL("/api/design-collections", API_URL);
  url.search = qs.stringify({
    populate: "*",
  });
  const res = await fetch(url.href);
  try {
      const data = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
}
