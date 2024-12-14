import { TextInput, Checkbox, Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../api/axiosInstance";
import useAuthStore from "../store/authStore";
const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleLogin = async (values) => {
    try {
      const response = await axiosInstance.post("/login", values);
      const { data } = response.data;
      console.log(response.data);

      setAuth(data);

      navigate("/admin");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login gagal, periksa username dan password Anda."
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username wajib diisi"),
      password: Yup.string().required("Password wajib diisi"),
    }),
    onSubmit: handleLogin,
  });
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/bg-login.jpg')" }}
      ></div>

      {/* Form Section */}
      <div className="relative z-10 flex min-h-screen">
        <div className="w-1/2 bg-zinc-100 flex items-center justify-center rounded-e-xl px-12">
          <div className="w-96 flex flex-col items-center justify-center text-center">
            {/* Logo */}
            <div className="pb-4">
              <img src="/logo2.png" alt="logo" />
            </div>

            {/* Judul */}
            <h2 className="text-3xl font-bold mb-4 leading-5">
              Welcome Back, Traveler!
            </h2>

            {/* Sub Judul */}
            <p className="text-gray-400 mb-6 leading-5">
              Explore your next journey effortlessly.
            </p>

            {/* Form */}
            <form className="w-full" onSubmit={formik.handleSubmit}>
              {/* Email */}
              <TextInput
                id="username"
                type="text"
                name="username"
                placeholder="username"
                required
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                color={
                  formik.touched.usernmae && formik.errors.username
                    ? "failure"
                    : undefined
                }
                helperText={
                  formik.touched.email && formik.errors.email ? (
                    <>
                      <span className="font-medium -mt-2 mb-2 block text-sm ">
                        {formik.errors.email}
                      </span>
                    </>
                  ) : undefined
                }
                className="mb-4"
              />

              {/* Password */}
              <TextInput
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                color={
                  formik.touched.password && formik.errors.password
                    ? "failure"
                    : undefined
                }
                helperText={
                  formik.touched.password && formik.errors.password ? (
                    <>
                      <span className="font-medium -mt-2 mb-2 block text-sm ">
                        {formik.errors.password}
                      </span>
                    </>
                  ) : undefined
                }
                className="mb-4"
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    name="remember"
                    color="customBlue"
                    checked={formik.values.remember}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm ml-2 cursor-pointer"
                  >
                    Ingat Saya
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Lupa Password?
                </a>
              </div>

              {/* Button */}
              <Button color="customBlue" type="submit" className="w-full">
                Login
              </Button>
              <Link to="/admin" className="text-blue-500 hover:underline font-semibold">
                Link ke Admin
              </Link>
            </form>

            {/* Link ke Register */}
            <p className="text-sm mt-4">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:underline font-semibold"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
