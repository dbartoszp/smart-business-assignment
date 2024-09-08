import {
  clearFilters,
  setFilterEmail,
  setFilterName,
  setFilterPhone,
  setFilterUsername,
} from "@/app/lib/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";

export const UserTableFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state: RootState) => state.users.filters);

  return (
    <div className="flex-flex-col">
      <div className="flex flex-row justify-around my-2">
        <h2 className="text-slate-500 text-xl py-2">Filter by:</h2>
        <button
          onClick={() => dispatch(clearFilters())}
          className="bg-red-400 p-2 hover:bg-red-300 border border-slate-200 text-slate-50"
        >
          Clear filters
        </button>
      </div>
      <div className="px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <input
          className="bg-slate-200 border-slate-800 p-1"
          type="text"
          placeholder="Name..."
          value={filters.name}
          onChange={(e) => dispatch(setFilterName(e.target.value))}
        />
        <input
          className="bg-slate-200 border-slate-800 p-1"
          type="text"
          placeholder="Username..."
          value={filters.username}
          onChange={(e) => dispatch(setFilterUsername(e.target.value))}
        />
        <input
          className="bg-slate-200 border-slate-800 p-1"
          type="text"
          placeholder="Email..."
          value={filters.email}
          onChange={(e) => dispatch(setFilterEmail(e.target.value))}
        />
        <input
          className="bg-slate-200 border-slate-800 p-1"
          type="text"
          placeholder="Phone..."
          value={filters.phone}
          onChange={(e) => dispatch(setFilterPhone(e.target.value))}
        />
      </div>
    </div>
  );
};
