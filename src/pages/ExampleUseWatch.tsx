import { useForm, useWatch, Control } from "react-hook-form";

interface FormInputs {
  firstName: string;
  lastName: string;
}

function FirstNameWatched({ control }: { control: Control<FormInputs> }) {
  const firstName = useWatch({
    control,
    name: "firstName",
    defaultValue: "default",
  });
  console.log("firstName: ", firstName);

  return <p>Watch: {firstName}</p>;
}
const ExampleUseWatch = () => {
  const { register, control, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="submit" />

      <FirstNameWatched control={control} />
    </form>
  );
};

export default ExampleUseWatch;
