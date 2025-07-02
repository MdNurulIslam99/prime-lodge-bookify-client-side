export const myBookingPromise = (email, accessToken) => {
  return fetch(
    `https://primelodge-bookify.vercel.app/hotelsBooking?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
