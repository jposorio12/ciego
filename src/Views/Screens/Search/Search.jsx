import useComponents from "../../Components";
import clear from "../../../Assets/Clear.png";
import useScreenControllers from "../../../Controllers/ScreenControllers";

const Search = () => {
  const { Filter } = useComponents();
  const { useSearch } = useScreenControllers();
  const { navigate } = useSearch();

  return (
    <Filter
      icon={clear}
      onClickIcon={() => navigate("/count")}
      classNameContainer="border-[1px] border-solid border-[#19418E]"
      classNameSection="mt-[16px]"
      activeOnFocus
    />
  );
};

export default Search;
