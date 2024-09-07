export const UserTableFilters = () => {
  return (
    <>
      <h2 className="text-slate-500 text-xl py-2 pl-10">Filters:</h2>
      <div className="px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Name..."
        />
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Username..."
        />
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Email..."
        />
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Phone..."
        />
      </div>
    </>
  );
};
