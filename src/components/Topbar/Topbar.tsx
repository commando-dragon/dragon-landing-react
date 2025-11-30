const Topbar = () => {
  return (
    <div className="bg-white p-2 rounded-xl fixed top-5 left-32 right-32 z-50">
      <button
        type="button"
        className="py-2 px-4 bg-primary-500 text-white rounded-xl hover:scale-95 transition cursor-pointer"
      >
        عضویت / ورود
      </button>
    </div>
  );
};

export default Topbar;
