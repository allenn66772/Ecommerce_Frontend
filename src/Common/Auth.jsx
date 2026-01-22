import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';



function Auth({register}) {
  const dispatch= useDispatch()
  const [submitted, setSubmitted] = useState(false); 
  const navigate=useNavigate()



 const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

useEffect(() => {
  if (!submitted) return; 

  if (error) {
    alert(error);
    setSubmitted(false);
  }

  if (isAuthenticated && !register) {
    alert("Login Successful");
    setSubmitted(false);
    navigate("/home")
  }

  if (register && !error && !loading && !isAuthenticated) {
    alert("Registration Successful");
    setSubmitted(false);
    navigate("/login")
  }
}, [error, isAuthenticated, register, loading, submitted]);



  const [userDetails,setuserDetails]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  console.log(userDetails);

  const handleAuth = (e) => {
  e.preventDefault();
  setSubmitted(true);

  if (register) {
    if (
      !userDetails.username ||
      !userDetails.email ||
      !userDetails.password ||
      !userDetails.confirmpassword
    ) {
      alert("Fill All Fields completely");
      setSubmitted(false);
      return;
    }

    if (userDetails.password !== userDetails.confirmpassword) {
      alert("Password doesn't match");
      setSubmitted(false);
      return;
    }

    dispatch(
      registerUser({
        username: userDetails.username,
        email: userDetails.email,
        password: userDetails.password,
      })
    );
  } else {
    if (!userDetails.email || !userDetails.password) {
      alert("All fields required");
      setSubmitted(false);
      return;
    }

    dispatch(
      loginUser({
        email: userDetails.email,
        password: userDetails.password,
      })
    );
  }
};


  

  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black px-4">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Image Section */}
        <div className="hidden md:block relative">
          <img
            src=""
            alt="Register"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white">
                Welcome Back
              </h2>
              <p className="text-gray-300 mt-3">
                Create your account and explore more
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-12">
          
          {/* Title */}
          <div className="mb-8">
          {register ?  <h1 className="text-3xl font-bold text-white">
              Register
            </h1> :
            <h1 className='text-3xl font-bold text-white'>Login</h1>}
            <p className="text-gray-400 mt-2">
              Please fill in the details
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleAuth}>
            
            {/* Name */}
            {register && <div>
              <label className="block text-sm text-gray-300 mb-1">
                Full Name
              </label>
              <input onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>}

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email Address
              </label>
              <input onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Password
              </label>
              <input onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Confirm Password */}
            {register && <div>
              <label className="block text-sm text-gray-300 mb-1">
                Confirm Password
              </label>
              <input onChange={(e)=>setuserDetails({...userDetails,confirmpassword:e.target.value})}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>}

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold shadow-lg"
            >
              {register ? "Create Account" : "login" }
            </button> 
            
          </form>

          {/* Footer */}
         {register ? <p className="text-gray-400 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-400 hover:underline cursor-pointer">
              Login
            </Link>
          </p> :
          <p className="text-gray-400 text-sm mt-6 text-center">
            New here please register?{" "}
            <Link to="/register" className="text-indigo-400 hover:underline cursor-pointer">
              Register
            </Link>
          </p>}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Auth