import { usePathname } from "next/navigation";

/**
 * Checks if a given link is active based on pathname matching.
 * Supports exact or prefix (startsWith) matching for nested routes.
 */
export default function useIsActiveLink() {
  const pathname = usePathname();

  return (url: string, options?: { exact?: boolean }) => {
    const { exact = false } = options || {};

    if (exact) {
      return pathname === url;
    }

    return pathname === url || pathname.startsWith(url + "/");
  };
}
