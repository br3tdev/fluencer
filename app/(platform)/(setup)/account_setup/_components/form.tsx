import DisplayInfoFieldsContainer from "./Form/display-info-fields-container";

export interface IFormProps {
  className?: string;
}

export default function Form({ className }: IFormProps) {
  return (
    <>
      {/* <form className={className}>Form</form> */}
      <DisplayInfoFieldsContainer />
    </>
  );
}
