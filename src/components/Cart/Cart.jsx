import PropTypes from 'prop-types'

const Cart = ({ selectedCourse, remainingCredit, totalCredit }) => {
    console.log(selectedCourse);
    return (
        <div>
            <h2 className='text-xl font-bold text-[#2F80ED] text-center border-b-2 pb-3'>Credit Hour Remaining {remainingCredit} hr</h2>
            <h2 className='text-2xl font-bold py-3'>Course Name</h2>
            {
                selectedCourse.map((course, index) => (
                    <div className='pb-2' key={course.id} >
                        <p>{`${index + 1}. ${course.title}`}</p>
                    </div>
                ))
            }
            <p className='text-lg font-medium border-t-2 text-[#1C1B1B99] pt-3'>Total Credit Hour : {totalCredit}</p>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.array,
    remainingCredit: PropTypes.number,
    totalCredit: PropTypes.number
}

export default Cart;