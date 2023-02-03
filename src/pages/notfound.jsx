import {Link} from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="w-2/5 h-auto bg-black p-10 text-center text-white rounded-xl flex flex-col justify-center items-center gap-4 max-sm:w-10/12">
        <h1 className="text-5xl font-bebas">Page not Found</h1>
        <p className="text-base font-inter">The url entered does not correspond to any section of the page, please enter a correct url or use the navigation bar. Thanks.</p>
        <Link to="/"><button className='bg-white text-black font-inter font-medium p-2 rounded-md mt-2'>Homepage</button></Link> 
      </div>
    </div>
  );
}
