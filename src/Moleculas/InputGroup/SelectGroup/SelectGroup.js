import { LabelRN } from "../../../Atomos/Label/LabelRN";
import { InputLst } from "../../../Atomos/InputLst/InputLst";
import { View } from "react-native";

export const SelectGroup = ({
  label,
  id,
  opciones,
  register,
  onChange,
  // validations,
}) => {
  return (
    <View>
      <LabelRN>{label}</LabelRN>
      <InputLst
        id={id}
        opciones={opciones}
        register={register}
        onChange={onChange}
        // validations={validations}
      />
    </View>
  );
};
