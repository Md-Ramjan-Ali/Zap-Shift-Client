import React from "react";
import authImage from "../../assets/authImage.png";
import ProfastLogo from "../Shared/ProfastLogo/ProfastLogo";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, setUser } = useAuth();
const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
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
                <h2 className="text-3xl font-extrabold">Welcome back</h2>
                <p>Login with profast</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="input w-full"
                    placeholder="Email"
                  />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: true, minLength: 8 })}
                    className="input w-full"
                    placeholder="Password"
                  />
                  {errors.password?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      password required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-500">
                      type password 8 character or long
                    </p>
                  )}

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p className="font-bold">
                Do not create an account? Please{" "}
                <Link className="text-green-500" to="/auth/register">
                  Register
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
