import React from 'react';
import authImage from "../../assets/authImage.png";
import ProfastLogo from "../Shared/ProfastLogo/ProfastLogo";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
          <div className="flex-1">
            <img src={authImage} />
          </div>
          <div className="flex-1 bg-white min-h-screen p-10">
            <ProfastLogo></ProfastLogo>
            <div className="max-w-md mx-auto mt-10">
              <div className="space-y-2 mb-4">
                <h2 className="text-3xl font-extrabold">Create An Account</h2>
                <p>Register with Profast</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  {/* name filed */}
                  <label className="label">Name</label>
                  <input
                    type="name"
                    {...register("name")}
                    className="input w-full"
                    placeholder="Name"
                  />

                  {/* email filed */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="input w-full"
                    placeholder="Email"
                  />

                  {/* Password filed */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: true, minLength: 8 })}
                    className="input w-full"
                    placeholder="Password"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">password required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      type password 8 charector or long
                    </p>
                  )}

                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <p className="font-bold">
                Already Create an account? Please{" "}
                <Link className="text-green-500" to="/auth/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;