import react, {useEffect, useRef} from "react";

/**
 * useDidMountEffect - will help us to call the useEffect method only after the component got rendered once.
 * @param {function} func - function used to call after first render
 * @param {any} deps - dependencies used in these side effects
 * @returns {Hook}
 */
const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);
  
    useEffect(() => {
      if (didMount.current) {
        func();
      } else {
        didMount.current = true;
      }
    }, deps);
  };

export default useDidMountEffect;