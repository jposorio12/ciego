import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useCountDetailId = () => {
  const [open, setOpen] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/count");
  };

  return { open, setOpen, openCancel, setOpenCancel, goBack };
};

export default useCountDetailId;
