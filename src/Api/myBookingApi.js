export const myBookingPromise = (email) => {
  return fetch(`http://localhost:3000/hotelsBooking?email=${email}`).then(
    (res) => res.json()
  );
};
