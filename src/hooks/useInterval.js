import { useEffect } from "react";

import { useLatestRef } from "./useLatestRef";

/**
 * React Hook that provides a declarative `setInterval`
 *
 * @param callback the callback to execute at interval
 * @param delay the `setInterval` delay (in ms)
 */
export function useInterval(callback, delay, isGameOn, counter) {
  const callbackRef = useLatestRef(callback);

  useEffect(() => {
    let intervalId = null;
    const tick = () => callbackRef.current();
    if (delay !== null && isGameOn) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId || counter === 0) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, callbackRef, isGameOn, counter]);
}
