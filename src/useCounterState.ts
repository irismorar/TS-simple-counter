import { useCallback, useState } from "react";

export function useCounterState() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => {
      if (prev < 100) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => {
      if (prev > -100) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
}
