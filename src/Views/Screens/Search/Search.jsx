import useComponents from "../../Components";
import clear from "../../../Assets/Clear.png";
import useScreenControllers from "../../../Controllers/ScreenControllers";

const Search = () => {
  const { Filter, CardCount } = useComponents();
  const { useSearch } = useScreenControllers();
  const { navigate, handleChange, match } = useSearch();
  console.log(match);

  return (
    <section>
      <Filter
        icon={clear}
        onClickIcon={() => navigate("/count")}
        classNameContainer="border-[1px] border-solid border-[#19418E]"
        classNameSection="mt-[16px]"
        activeOnFocus
        handleChange={handleChange}
      />
      {match?.map(
        ({ driver, plaque, truckSheet, route, status, conveyor }, i) => (
          <CardCount
            key={i}
            numberRoute={route}
            date="22/08/23"
            state={status}
            lastUpdate="22/08/23"
            numberDriver={conveyor}
            truckSheet={truckSheet}
            plaque={plaque}
            driver={driver}
            onClick={() => navigate("/detail/1")}
          />
        )
      )}
    </section>
  );
};

export default Search;
