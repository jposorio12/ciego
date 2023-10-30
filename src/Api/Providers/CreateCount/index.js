import api from "../../../Config/Axios/index";

const CreateCount = (data) => {
  const response = api({
    method: "POST",
    url: "/create",
    data,
  });
  return response;
};

export default CreateCount;
