
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-violet-800 text-white py-3">
      <div className="logo">
       <span className='font-bold text-xl mx-9'> iTask  </span>
      </div>
      <ul className='flex gap-8 mx-11'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold  transition-all'>Your task</li>
      </ul>
    </nav>
  )
}

export default Navbar
