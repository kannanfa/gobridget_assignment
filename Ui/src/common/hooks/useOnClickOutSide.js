import { useEffect } from "react";


/**
 * useOnClickOutside - will help us to identify click outside of reference 
 * @param {React.ref} ref - Reference of the component to cross check
 * @param {handler} handler - Function which need to fire after the user click outside
 * @returns {Hook}
 */
const useOnClickOutside = (ref, handler) => {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  export default useOnClickOutside