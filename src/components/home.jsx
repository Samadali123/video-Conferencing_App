import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (input.trim()) {
      navigate(`/room/${input}`);
      setInput("");
    }
  };

  return (
    <div className='flex justify-center items-center flex-col min-h-screen bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 p-4'>
      <h1 className='text-4xl font-bold text-white mb-8'>Join a Room</h1>
      <div className="options flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className='px-5 py-2 w-full sm:w-2/3 rounded-lg border-2 border-cyan-400 text-black outline-none focus:border-blue-600 transition-all duration-300' 
          type="text" 
          placeholder='Enter room code' 
          required 
        />
        <button 
          onClick={handleJoinRoom} 
          className='px-5 py-2 w-full sm:w-1/3 rounded-lg bg-black text-white hover:text-cyan-500 hover:text-black transition-all duration-300'>
          Start Call
        </button>
      </div>
    </div>
  );
}

export default Home;
