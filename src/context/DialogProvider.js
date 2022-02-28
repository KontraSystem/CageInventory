import React, { useState } from "react";
import DialogContext from "./DialogContext";
function DialogProvider(props) {
  const [dialog, setDialog] = useState({
    isOpen: false,
    productName: "",
    imageUrl: "",
    numberOfItems: "",
    description: "",
  });

  return (
    <DialogContext.Provider value={{ dialog, setDialog }} {...props}>
      {props.children}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
