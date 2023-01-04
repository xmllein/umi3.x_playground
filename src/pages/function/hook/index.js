import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';

export default function (props) {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('text');

  useEffect(() => {
    console.log('useEffect');
    fetch('/api/getLists');
  }, [count]);
  // useEffect
  // 当第二个参数为空数组时，只会在组件挂载时执行一次
  // 当第二个参数为一个变量时，只有当这个变量发生变化时才会执行
  // 当第二个参数为空时，每次组件更新都会执行

  useEffect(() => {
    console.log('useEffect2');
  }, []);

  // useLayoutEffect
  // useLayoutEffect 会在 DOM 更新之后同步调用 effect，而 useEffect 会在 DOM 更新之后异步调用 effect。

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []);

  // useMemo
  // useMemo 会在渲染期间执行，useEffect 会在提交期间执行

  const noCacheText = () => {
    console.log('noCacheText');
    return text;
  };
  const memoText = useMemo(() => {
    console.log('useMemo');
    return text;
  }, [text]);

  // useCallback
  // useCallback 缓存的是函数，useMemo 缓存的是值

  const handleCount = useCallback(() => {
    console.log('count change');
    setCount(count + 1);
  }, [count]);

  // const handleCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h1 onClick={handleCount}>count: {count}</h1>
      <h2>text: {memoText}</h2>
      <h2>noCacheText: {noCacheText()}</h2>
    </div>
  );
}
