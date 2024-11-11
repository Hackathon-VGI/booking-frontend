export const onChangeHandler = (handler: Function) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    handler(e.target.value);
  };
};
