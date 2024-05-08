import { useEffect } from "react";

export default function(documentRef: any,  resetValue:any, setState:any){

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (documentRef.current && !documentRef.current.contains(event.target)) {
        setState(resetValue);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    };
  }, [documentRef, resetValue]);
}