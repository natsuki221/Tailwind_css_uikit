import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void | null>(null);

  // 在每次 callback 改變時更新 ref
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 設定/清除 interval
  useEffect(() => {
    if (delay === null) return; // 若傳入 null 就不啟用計時

    const id = setInterval(() => {
      if (savedCallback.current) savedCallback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
}