function NavBar() {
  return (
    <>
      <nav className="px-6">
        <div className="flex justify-between items-center ">
          <h1 className="text-secondery-bg">brahma kumaris</h1>

          <div>
            <ul className="flex flex-row space-x-9">
              <li>
                <a> Home</a>
              </li>
              <li>
                <a> About Us</a>
              </li>
              <li>
                <a> Experiences</a>
              </li>
              <li>
                <a> contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;