const RadioList = ({ valueList = [], selected, callback }) => {
  return (
    <div>
      {valueList.map(value => {
        return (
          <React.Fragment key={value}>
            <label htmlFor={value}>{value}</label>
            <input
              id={value}
              type="radio"
              name="operator"
              value={value}
              checked={selected == value}
              onChange={e => callback(e)}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RadioList;
