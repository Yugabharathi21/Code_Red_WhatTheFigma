import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side - Login Form */}
      <div className="w-[45%] flex items-center justify-center">
        <div className="w-[480px] px-8 flex flex-col items-start gap-10">
          <h1 className="text-[30px] font-semibold font-poppins text-[#171725] text-center">Log In</h1>
          
          <div className="flex flex-col justify-center items-start gap-10 w-full">
            <div className="flex flex-col items-end gap-8 w-full">
              <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-4 px-5 py-3 bg-white rounded-lg border-[1.6px] border-[#E0E2E9]">
                      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="#ADB0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 3L11 10L1 3" stroke="#ADB0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-sm font-medium text-[#969AB8] outline-none flex-1 font-poppins"
                      />
                    </div>
                    
                    <div className="flex items-center gap-4 px-5 py-3 bg-white rounded-lg border-[1.6px] border-[#E0E2E9]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z" stroke="#ADB0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.83333 9.16666V5.83332C5.83333 4.72825 6.27232 3.66845 7.05372 2.88705C7.83512 2.10565 8.89493 1.66666 9.99999 1.66666C11.1051 1.66666 12.1649 2.10565 12.9463 2.88705C13.7277 3.66845 14.1667 4.72825 14.1667 5.83332V9.16666" stroke="#ADB0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm font-medium text-[#969AB8] outline-none flex-1 font-poppins"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-16 py-3 bg-[#0062FF] text-white rounded-lg border-[1.6px] font-semibold text-[15px] font-poppins"
                  >
                    Log In
                  </button>
                </div>
                
                <div className="w-full flex justify-end items-center">
                  <button type="button" className="text-[#0062FF] text-[15px] font-semibold font-poppins">
                    Forgot password?
                  </button>
                </div>
              </form>

              <div className="flex flex-col items-center gap-5 w-full">
                <div className="w-full flex items-center gap-5">
                  <div className="flex-1 h-[1px] bg-[#E4E6EC]" />
                  <span className="text-[#969AB8] text-sm font-medium font-poppins">or</span>
                  <div className="flex-1 h-[1px] bg-[#E4E6EC]" />
                </div>

                <div className="flex gap-5 w-full">
                  <button className="flex-1 px-5 py-2 bg-white rounded-lg border-[1.6px] border-[#E0E2E9] flex items-center justify-center gap-[15px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FBC02D"/>
                      <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#E53935"/>
                      <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3037 18.0011 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
                      <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.785L18.7045 19.404C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1565C0"/>
                    </svg>
                    <span className="text-[#171725] text-sm font-semibold font-poppins">Google</span>
                  </button>

                  <button className="flex-1 px-5 py-2 bg-white rounded-lg border-[1.6px] border-[#E0E2E9] flex items-center justify-center gap-[15px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
                      <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
                    </svg>
                    <span className="text-[#171725] text-sm font-semibold font-poppins">Facebook</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#969AB8] text-[15px] font-normal font-poppins">Don't have an account?</span>
              <button className="text-[#0062FF] text-[15px] font-semibold font-poppins">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-[55%] h-screen bg-cover bg-center bg-no-repeat" 
           style={{ 
             backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
             backgroundPosition: 'center',
           }}>
      </div>
    </div>
  );
};

export default Login; 