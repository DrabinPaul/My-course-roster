# **3 Project Features**


 **1. Course Selection and Limit Handling:**
   - Users can browse and select courses from a list displayed on the page.
   - The application tracks the total credit hours of the selected courses.
   - It also enforces a credit limit of 20 hours, ensuring that users cannot exceed this limit. If the limit is exceeded, the application displays an alert using the `Toastify library`.

 **2. Course Display:**
   - Courses are displayed in a visually appealing format with images, titles, descriptions, prices, and credit hours.
   - Each course has a `"Select"` button that allows users to add the course to their selection.

 **3. Real-time Cart Updates:**
   - A cart component (`<Cart>`) is used to display the selected courses and provide information about the user's current selection.
   - As users select or deselect courses, the cart updates in real-time to reflect the changes in the selected courses and the remaining available credit hours.

**These features make it easy to pick courses and stay within the credit limit. You'll receive instant toast notifications for key events like exceeding the credit limit or confirming course selections.**


# **Managed state in this project**


**1. `allCourse` State:**
   - This state stores all the available courses that users can choose from. We fetch this data from an external JSON file using the `fetch` API and set it initially with the `useState` hook. It's an array of course objects, and it gets populated when the component mounts.

**2. `selectedCourse` State:**
   - This state keeps track of the courses that a user has selected. Initially, it's an empty array, but as users click the `"Select"` button on a course card, we add that course to this array.

**3. `remainingCredit` State:**
   - Here, we're tracking the remaining credit hours that a user can choose before hitting the credit limit. We set this to a maximum of 20 hours initially.

**4. `totalCredit` State:**
   - This state holds the sum of credit hours of all the courses a user has selected. As users add or remove courses, this state updates to reflect the total credit hours of their selection.

**Handling State Changes:**
   - When a user selects a course, we check if it already exists in the `selectedCourse` array. If it does, we display a notification saying "already exist." If not, we calculate the new `totalCredit` by adding the credit hours of the selected course to the existing total.
   - We also calculate the `creditRemaining` by subtracting the `totalCredit` from the 20-hour limit.
   - If the `totalCredit` exceeds 20 or the `creditRemaining` becomes negative, we display a notification alerting the user about the credit limit.

**So, in essence, these states help in managing and tracking the course selection process and ensure that users stay within the specified credit limit. The project maintains a smooth and informative user experience with real-time updates and notifications to keep users informed throughout their course selection journey.**








