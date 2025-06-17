export const myBookingPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/hotelsBooking?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
