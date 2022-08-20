import "./FromCurrency.scss";
import { filterSlice } from "../../store/reducers/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { currencyListSlice } from "../../store/reducers/currencyListSlice";
import { currencyFilters } from "../../serverData/directions";
import { currencyMap } from "../../serverData/filter";
import { useEffect, useRef } from "react";

const FromCurrency = () => {
  const selectRef = useRef();
  const dispatch = useDispatch();
  const { fromType } = useSelector((state) => state.filter);
  const { fromList, activeFrom } = useSelector((state) => state.currency);

  function onFilterChange(e) {
    dispatch(filterSlice.actions.changeFromFilter(e.target.value));
    dispatch(filterSlice.actions.changeToFilter("all"));
    dispatch(
      currencyListSlice.actions.changeFromList(currencyFilters[e.target.value])
    );
    dispatch(
      currencyListSlice.actions.setFromCurrency(
        currencyFilters[e.target.value][0].code
      )
    );
    dispatch(
      currencyListSlice.actions.changeToList(
        currencyMap.filter(
          (item) => item.from.code === currencyFilters[e.target.value][0].code
        )[0].to
      )
    );
  }
  function onSelectChange(e) {
    dispatch(currencyListSlice.actions.setFromCurrency(e.target.value));
    dispatch(
      currencyListSlice.actions.changeToList(
        currencyMap.filter((item) => item.from.code === e.target.value)[0].to
      )
    );
  }

  useEffect(() => {
    dispatch(
      currencyListSlice.actions.changeToList(
        currencyMap.filter(
          (item) => item.from.code === selectRef.current.value
        )[0].to
      )
    );
  }, []);

  return (
    <div className="currency">
      <h2 className="currency__title">Отдаёте</h2>
      <form className="currency__form">
        <div className="currency__filter">
          <div className="currency__radio-btn">
            <input
              id="radio-1"
              type="radio"
              value="all"
              checked={fromType === "all"}
              className="currency__option"
              name="filter"
              onChange={onFilterChange}
            />
            <label htmlFor="radio-1">Все</label>
          </div>

          <div className="currency__radio-btn">
            <input
              id="radio-2"
              type="radio"
              value="crypto"
              className="currency__option"
              name="filter"
              checked={fromType === "crypto"}
              onChange={onFilterChange}
            />
            <label htmlFor="radio-2">Криптовалюта</label>
          </div>
          <div className="currency__radio-btn">
            <input
              id="radio-3"
              type="radio"
              value="cash"
              className="currency__option"
              name="filter"
              checked={fromType === "cash"}
              onChange={onFilterChange}
            />
            <label htmlFor="radio-3">Наличные</label>
          </div>
          <div className="currency__radio-btn">
            <input
              id="radio-4"
              type="radio"
              value="banksRU"
              className="currency__option"
              name="filter"
              checked={fromType === "banksRU"}
              onChange={onFilterChange}
            />
            <label htmlFor="radio-4">Банки RUB</label>
          </div>
        </div>
        <input type="text" placeholder="123.4123" className="curency__input" />
        <select
          ref={selectRef}
          name="currency"
          onChange={onSelectChange}
          value={activeFrom}
        >
          {fromList.map((item) => (
            <option value={item.code} key={Date.now + Math.random()}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FromCurrency;
