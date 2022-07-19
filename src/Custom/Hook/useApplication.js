
import { ApplicationContext } from "../../context/ApplicationProvider";
import { useContext } from "react";

 export default function useApplication(){
    return useContext(ApplicationContext)
}