import { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiBookOpen } from 'react-icons/bi';


const Home = () => {
    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch("./blogs.json")
            .then(res => res.json())
            .then(data => (setAllCourse(data)))
    }, []);
    console.log(allCourse)

    return (
        <div className="max-w-screen-xl mx-auto">
            <header className="py-8">
                <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
                
            </header>

            <div className="mt-4 flex justify-between">

                <div className="grid grid-cols-3 gap-5">

                    {
                       allCourse.map(course =>(
                        <div key={course.id} className="card  w-[300px] h-[410px] bg-base-100">
                        <figure className="pt-2">
                            <img className="w-[280px] h-[160px] rounded" src={course.image} alt="Shoes" />
                        </figure>
                        <div className="px-3 pt-2 text-center ">
                            <h2 className="text-lg font-bold ">{course.title}</h2>
                            <p className="pt-2 text-base text-[#1C1B1B99] font-normal">{course.description}</p>
                            <div className="flex gap-5 justify-between text-center pt-2 pb-2">
                                <p className="flex items-center text-lg font-medium text-[#1C1B1B99]">
                                    <BsCurrencyDollar></BsCurrencyDollar>Price: {course.price}</p>
                                <p className="flex items-center text-lg font-medium text-[#1C1B1B99]"><BiBookOpen></BiBookOpen> Credit: {course.credit}hr</p>
                            </div>
                            <div className="card-actions justify-center absolute bottom-2">
                                <button className="btn bg-[#2F80ED] text-white w-[280px]">Select</button>
                               
                            </div>
                        </div>
                    </div>
                       ))
                    }

                </div>


                <div className="w-[310px] h-[355px] bg-white px-4 pt-3 rounded">
                    <h2 className='text-xl font-bold text-[#2F80ED] text-center border-b-2 pb-3'>Credit Hour Remaining 7 hr</h2> 

                    <h2 className='text-xl font-bold border-b-2 py-3'>Course Name</h2>

                    <p className='text-lg font-medium text-[#1C1B1B99] pt-3'>Total Credit Hour : 13</p>
                    
                </div>

            </div>
        </div>


    );
};



export default Home;