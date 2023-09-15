import PropTypes from 'prop-types'

const Cart = ({ selectedCourse }) => {
    console.log(selectedCourse);
    return (
        <div>

            {
                selectedCourse.map(course => (
                    <div key={course.id} >
                        <p>{course.title}</p>

                    </div>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.array
}

export default Cart;