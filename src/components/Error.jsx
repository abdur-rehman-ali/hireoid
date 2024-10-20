import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const err  = useRouteError()
    console.log("--->",err)
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-9xl text-primary font-bold text-gray-800">{err.status}</h1>
      <h2 className="text-4xl font-semibold text-gray-600 mt-4">Page {err.statusText} </h2>
      <p className="text-lg text-gray-500 mt-2">
        {err.data} 
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-primary text-white rounded-full text-lg hover:text-gray transition">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
