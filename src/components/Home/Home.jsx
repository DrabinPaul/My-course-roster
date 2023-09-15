import { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiBookOpen } from 'react-icons/bi';
import Cart from '../Cart/Cart';


const Home = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);

    useEffect(() => {
        fetch("./blogs.json")
            .then(res => res.json())
            .then(data => (setAllCourse(data)))
    }, []);

    const handleSelectCouse = (course) => {
        const isExist = selectedCourse.find((item) => item.id == course.id);
        let credit = course.credit;
        if (isExist) {
            return alert('already exist');
        }
        else {

            selectedCourse.forEach((item) => {
                credit = credit + item.credit;
            });
            if (credit > 20) {
               return alert('Credit limit exceeded! Maximum credit limit is 20.');
            }

            setTotalCredit(credit);
            const creditRemaining = 20 - credit;
            if (creditRemaining < 0) {
                return alert('Credit limit exceeded! Maximum credit limit is 20.');
             }

            setRemainingCredit(creditRemaining);

            setSelectedCourse([...selectedCourse, course]);
        }
    }


    return (
        <div className="max-w-screen-xl mx-auto">
            <header className="py-8">
                <h1 className='text-4xl font-bold text-center'>Course Registration</h1>

            </header>

            <div className="mt-4 flex justify-between">

                <div className="grid grid-cols-3 gap-5">

                    {
                        allCourse.map(course => (
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
                                        <button onClick={() => handleSelectCouse(course)} className="btn bg-[#2F80ED] text-white w-[280px]">Select</button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="w-[310px] h-[355px] bg-white px-4 pt-3 rounded">
                    <Cart
                        selectedCourse={selectedCourse} remainingCredit={remainingCredit} totalCredit={totalCredit}
                    ></Cart>
                </div>

            </div>
        </div>


    );
};



export default Home;