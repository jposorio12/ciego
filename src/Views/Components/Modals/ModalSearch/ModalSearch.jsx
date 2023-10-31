import useComponents from "../..";
import clear from "../../../../Assets/Clear.png";

const ModalSearch = ({ setOpenModalSearch }) => {
  const { Filter } = useComponents();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div className="relative w-full h-full bg-white cursor-pointer mb-[10px]">
        <Filter
          icon={clear}
          // handleChange={handleChangeFilter}
          placeholder="Buscar SKU..."
          classNameContainer="!bg-[#E8E8E8]"
          classNameInput="!bg-[#E8E8E8]"
          classNameSection="pt-[20px]"
          onClickIcon={() => setOpenModalSearch(false)}
        />
      </div>
    </div>
  );
};

export default ModalSearch;
