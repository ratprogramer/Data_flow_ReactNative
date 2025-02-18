import { LabelRN } from "../../../Atomos/Label/LabelRN";
import { InputDate } from "../../../Atomos/InputDate/InputDate";
import { View } from "react-native";
export const TimeGroup = ({
  id,label, register, validaciones, type, defaultDate = false
}) => {
  return (
    <View>
      <LabelRN>{label}</LabelRN>
      <InputDate
        id={id}
        register={register}
        validaciones={validaciones}
        type={type}
        defaultDate={defaultDate}
      />
    </View>
  );
}