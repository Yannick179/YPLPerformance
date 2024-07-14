import Header from "../components/Header"

export default function Register() {
    return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-700 flex flex-col justify-center items-center">
        <Header />
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 h-96 bg-gray-200 border-2 border-gray-400 rounded-md text-center">
            <div className="text-5xl font-bold text-center p-12">Register</div>
            <form className="flex flex-col items-center">
                <input type="text" className="lg:w-3/4 mb-2 px-4 py-2 border-4 border-gray-300 rounded-md focus:border-blue-300 outline-none" placeholder="Email"></input>
                <input type="password" className="lg:w-3/4 mb-2 px-4 py-2 border-4 border-gray-300 rounded-md focus:border-blue-300 outline-none" placeholder="Password"></input>
                <button type="submit" className=" mb-1 mt-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-1/5">
                    Register
                </button>
            </form>
            <a href="/login" className="flex justify-center mt-7 text-blue-400 ">Sign in</a>
            
            

        </div>
    </div>
    );
  }