import "./ToCurrency.scss";
import { filterSlice } from "../../store/reducers/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { currencyFilters } from "../../serverData/directions";
import { currencyListSlice } from "../../store/reducers/currencyListSlice";
import { useEffect } from "react";

const ToCurrency = () => {
  const dispatch = useDispatch();
  const { toType } = useSelector((state) => state.filter);
  const { toList, filteredToList } = useSelector((state) => state.currency);

  function onFilterChange(e) {
    const currentFilter = currencyFilters[e.target.value].map((el) => el.code);
    dispatch(filterSlice.actions.changeToFilter(e.target.value));
    dispatch(
      currencyListSlice.actions.changeFilteredToList(
        currencyFilters[e.target.value]
      )
    );
    dispatch(
      currencyListSlice.actions.changeFilteredToList(
        toList.filter((item) => currentFilter.includes(item.code))
      )
    );
  }

  useEffect(() => {
    dispatch(currencyListSlice.actions.changeFilteredToList(toList));
  }, [toList]);

  return (
    <div className="currency">
      <h2 className="currency__title">Получаете</h2>
      <form className="currency__form">
        <div className="currency__filter">
          <div className="currency__radio-btn">
            <input
              id="radio-11"
              type="radio"
              value="all"
              checked={toType === "all"}
              className="currency__option"
              name="filter"
              onChange={onFilterChange}
            />
            <label htmlFor="radio-11">Все</label>
          </div>

          <div className="currency__radio-btn">
            <input
              id="radio-12"
              type="radio"
              value="crypto"
              className="currency__option"
              name="filter"
              checked={toType === "crypto"}
              onChange={onFilterChange}
            />
            <label htmlFor="radio-12">Криптовалюта</label>
          </div>
          <div className="currency__radio-btn">
            <input
              id="radio-13"
              type="radio"
              value="cash"
              className="currency__option"
              name="filter"
              checked={toType === "cash"}
              onChange={onFilterChange}
            />
            <label htmlFor="radio-13">Наличные</label>
          </div>
          <div className="currency__radio-btn">
            <input
              id="radio-14"
              type="radio"
              value="banksRU"
              className="currency__option"
              name="filter"
              checked={toType === "banksRU"}
              onChange={onFilterChange}
            />
            <label htmlFor="radio-14">Банки RUB</label>
          </div>
        </div>
        <input type="text" placeholder="123.4123" className="curency__input" />
        <select name="currency">
          {filteredToList.map((item) => (
            <option value={item.code} key={Date.now + Math.random()}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default ToCurrency;
