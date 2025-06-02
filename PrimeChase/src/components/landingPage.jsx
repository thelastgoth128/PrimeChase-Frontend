

 export const LandingPage = ()=> {
    return (
        <div>
            <div className="flex text-2xl h-16 justify-between bg-black text-white">
                <h1 className="mt-5">Primechase Studios</h1>
                <button className="cursor-pointer">Menu[+]</button>
            </div>
            <div className="flex">
                <div className="bg-white w-6/12">
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div className="customBlue w-6/12 text-white">
                    <h1 className="text-6xl font-extrabold w-4 mt-20 ml-18">Explore Creativity</h1>
                    <p className="w-92 text-left ml-18 mt-8 text-lg">Welcome to Primechase Studios, 
                        where creativity meets innovation. 
                        We are dedicated to providing top-notch graphic design services that elevate your brand to new heights. 
                        Let's turn your vision into reality!
                    </p>
                    <button className="mt-8 -ml-96 bg-purple-400 rounded-4xl p-3 py-2 hover:bg-black text-black hover:border-3 hover:text-white hover:border-purple-400">Get Started</button>
                </div>
            </div>
            <div className="customPink">
                <h1 className="text-6xl font-extrabold text-left text-white  ">Services</h1>
                <hr className="text-white mt-12 h-2"/>
                <div className="flex mt-12 h-82 text-white text-4xl justify-between">
                    <div className="w-80 ml-20 h-64 border-white border-2">
                        <p className="">Marketing Materials</p>
                        <hr className="mt-6 w-56 ml-12"/>
                        <p className="mt-4 text-2xl text-left ml-6">US$ 200</p>
                        <button className="bg-blue-500 p-2 mt-2">Book Now</button>
                    </div> 
                    <div className="w-80 h-64 border-white border-2">
                        <p className="">Poster Design</p>
                        <hr className="mt-6 w-56 ml-12"/>
                        <p className="mt-8 text-left text-2xl ml-6">US$ 200</p>
                        <button className="bg-blue-500 p-2 mt-8">Book Now</button>
                    </div>
                    <div className="w-80 mr-20 h-64 border-white border-2">
                        <p>Logo Design</p>
                        <hr className="mt-6 w-56 ml-12"/>
                        <p className="mt-8 text-left ml-6 text-2xl">US$ 200</p>
                        <button className="bg-blue-500 p-2 mt-8">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="h-5/6">
                <div className="flex">
                    <div className="w-6/12  h-full customBlue">
                        <h1 className="text-6xl mt-4 -ml-32 font-bold text-white">Our Story</h1>
                        <p className="text-left text-white mt-12 text-xl w-10/12 ml-12">At Primechase Studios, we are passionate about crafting unique
                            design solutions that captivate audiences and drive results.
                            With a focus on tailoring each project to our client's background,
                                we ensure that every design resonates with their target market.
                            Let us bring your ideas to life!
                        </p>
                        <button className="p-5 -ml-72 mb-14.5  mt-12 py-2 bg-purple-400 rounded-4xl">Learn More</button>
                    </div>
                    <div className="w-6/12 h-full"> 
                        <img src="/story.jpg" alt="" className="w-full h-3/5"/>
                    </div>
                </div>
            </div>
            <div className="text-white  h-screen bg-black">
                <h1 className="">My Portifolio</h1>
            </div>
        </div>
    )
};
