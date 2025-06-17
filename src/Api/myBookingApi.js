export const myBookingPromise = (email) => {
  return fetch(
    `https://primelodge-bookify.vercel.app/hotelsBooking?email=${email}`
  ).then((res) => res.json());
};
