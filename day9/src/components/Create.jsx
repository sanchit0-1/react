import {toast} from 'react-toastify'
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
const Create = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const tods = props.tods;
  const settods = props.settods;

  const sumitHandler = (e) => {
    e.isCompleted = false;
    e.id = nanoid();
    settods([...tods, e])
    toast.success("created !")
    reset() // used to clear precious input data from the place holder
    // // these three steps can be done in single step as follows
    
  };
  return (
    <div>
      <h1>Create tasks</h1>
      <form onSubmit={handleSubmit(sumitHandler)}>
        <input {...register("title",{required: "it cannot be empty"})} type="text" placeholder="title" />
        {/* {errors && errors.title && errors.title.message&&<small>{errors.title.message}</small>} */}
        <small className="mt-2 text-sm text-red-600">{errors?.title?.message}</small>
        <br />
        <br />
        <button>Create todo</button>
      </form>
    </div>
  );
};

export default Create;