import { useEffect } from "react";

//console log a value
export default function useUpdateLogger(value: any) {
  useEffect(() => {
    console.log("useUpdateLogger tracking: ", value);
  }, value);
}
