// Function to merge refs
export function mergeRefs<T>(...refs: (React.Ref<T> | null)[]) {
  return (node: T) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else if ("current" in ref) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}