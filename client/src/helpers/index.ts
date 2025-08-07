/**
 * Converts an array of objects into a select input data format.
 * @param data an array of objects to be converted.
 * @param labelKey the key in the object that should be used as the label.
 * @param labelValue the key in the object that should be used as the value.
 * @returns an array of objects with a label and a value.
 */
export const convertDataToSelectInput = <T, K extends keyof T>(
  data: T[],
  labelKey: K,
  labelValue: K
) => {
  return data.map((item) => {
    return {
      label: item[labelKey],
      value: item[labelValue],
    };
  });
};
