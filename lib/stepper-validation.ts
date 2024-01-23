export const checkStepperValidation = (inputFields: object, errors: object) => {
  const userInfoFields = Object.values(inputFields);
  const errorsFields = Object.values(errors);

  const userInfoPopulated = userInfoFields.every((value) => value !== "");
  const noErrors = errorsFields.length === 0;

  return userInfoPopulated && noErrors;
};
