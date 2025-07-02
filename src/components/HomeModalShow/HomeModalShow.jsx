import React, { useEffect } from "react";

const HomeModalShow = ({ offers }) => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.showModal(); // Open modal on load
  }, []);

  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box max-w-2xl mt-12">
        <form method="dialog">
          {/* ✕ Close button */}
          <button className="btn btn-md bg-emerald-400 btn-circle btn-ghost absolute right-2 top-3">
            ✕
          </button>
        </form>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Special Offers & Promotions
        </h2>
        <div className="space-y-6">
          {offers.map((offer, idx) => (
            <div key={idx} className="text-center">
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className="rounded-lg w-full h-48 object-cover mb-3"
              />
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <p className="text-gray-700">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default HomeModalShow;
