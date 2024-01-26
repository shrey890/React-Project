import logo from '/public/Vector.svg'
function Nav() {
    return (
        <div className='flex justify-between  items-center '>
            <div ><img src={ logo } className='logo cursor-pointer  mt-5' alt="logo" /></div>
            <div>
                <ul className='flex gap-8 cursor-pointer list-none font-semibold text-3xl '  >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav