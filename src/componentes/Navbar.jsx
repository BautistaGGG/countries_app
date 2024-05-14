function Navbar() {
  return (
    <nav className='flex justify-center md:justify-start p-8 shadow-md bg-lightModeBackground'>
        <a href="/">
            <h1 className="font-bold text-2xl text-TextoDarkBlue">
              Where in the world?
            </h1>
        </a>
        {/* <p>Dark mode</p> */}
    </nav>
  )
}

export default Navbar