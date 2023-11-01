import useComponents from "../..";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clear from "../../../../Assets/Clear.png";
import errorFilter from "../../../../Assets/errorFilter.png";

const ModalSearch = ({
  setOpenModalSearch,
  handleChange,
  array,
  type,
  suggestions,
  handleUpdateSuggestions,
  onclickAdd,
  maxLength,
}) => {
  const navigate = useNavigate();
  const { Filter, CardCount, SuggestLine, CardSkuCount } = useComponents();
  const [value, setValue] = useState("");

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div className="relative w-full h-full bg-white cursor-pointer mb-[10px]">
        <Filter
          icon={clear}
          handleChange={(e) => {
            if (e.target.value.length <= (maxLength ?? 12)) {
              handleChange(e);
              setValue(e.target.value);
            }
          }}
          placeholder="Buscar SKU..."
          value={value}
          classNameContainer={`!bg-[#E8E8E8] ${
            array?.length === 0 &&
            value?.length > 0 &&
            "border-[#FF1130] border-[2px] border-solid"
          }`}
          classNameInput="!bg-[#E8E8E8]"
          classNameSection="pt-[20px]"
          onClickIcon={() => {
            const e = { target: { value: "" } };
            handleChange(e);
            setOpenModalSearch(false);
            setValue("");
          }}
          error={array.length === 0 && value.length > 0}
        />

        {value?.length === 0 && (
          <>
            <h2 className="font-inter font-normal text-[12px] text-[#797979] my-[16px] px-[16px] max-w-[400px] mx-auto">
              Búsquedas recientes
            </h2>
            {suggestions?.map(({ value, date }) => (
              <SuggestLine
                key={value}
                suggestion={value}
                date={date}
                onClick={() => {
                  const e = { target: { value } };
                  handleChange(e);
                  setValue(value);
                }}
              />
            ))}
          </>
        )}

        {value.length > 0 && (
          <h2 className="font-inter font-normal text-[12px] text-[#797979] px-[16px] mx-auto max-w-[400px] my-[16px]">
            Resultados de tu búsqueda
          </h2>
        )}

        {value.length > 0 && array?.length === 0 && (
          <div>
            <img
              src={errorFilter}
              alt="icon"
              className="mt-[16px] mb-[8px] px-[16px] mx-auto"
            />
            <h2
              className="font-inter font-bold text-[32px] px-[16px] text-[#202020] text-center leading-[40px]
              mb-[10px] max-w-[400px] mx-auto"
            >
              No hay resultados para tu búsqueda
            </h2>
            <h3 className="font-inter font-normal text-[18px] text-center px-[16px] max-w-[400px] mx-auto">
              Intenta nuevamente cambiando los parámetros de tu búsqueda
            </h3>
          </div>
        )}

        <div className="flex flex-col gap-[20px] mt-[20px]">
          {type === 1 &&
            array?.map((count) => (
              <CardCount
                key={count?.id}
                numberRoute={count?.form?.route}
                date={count?.date}
                state={count?.status}
                lastUpdate={count?.lastUpdateDate}
                numberDriver={count?.form?.conveyor}
                truckSheet={count?.form?.truckSheet}
                plaque={count?.form?.plaque}
                driver={count?.form?.driver}
                onClick={() => {
                  handleUpdateSuggestions(array[0]?.form?.route);
                  navigate(`/detail/${count?.id}`);
                }}
              />
            ))}

          {type === 2 &&
            array?.map((sku, i) => (
              <CardSkuCount
                key={sku}
                index={i}
                number={sku}
                name="Modelo especial BT 6 Pack 24/355 ml RD"
                measure="PCE"
                onClick={() => {
                  handleUpdateSuggestions(sku);
                  const e = { target: { value: "" } };
                  handleChange(e);
                  onclickAdd(sku, "Modelo especial BT 6 Pack 24/355 ml RD");
                  setOpenModalSearch(false);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;
