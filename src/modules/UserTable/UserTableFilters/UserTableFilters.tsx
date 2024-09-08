"use client";

import {
  clearFilters,
  setFilterEmail,
  setFilterName,
  setFilterPhone,
  setFilterUsername,
} from "@/app/lib/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

export const UserTableFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.users.filters);

  return (
    <div className="flex-flex-col">
      <div className="flex flex-row justify-around my-2">
        <h2 className="text-slate-500 text-xl py-2 pl-10">Filter by:</h2>
        <button
          onClick={() => dispatch(clearFilters())}
          className="bg-red-400 p-2 hover:bg-red-300 border border-slate-200 text-slate-50"
        >
          Clear filters
        </button>
      </div>
      <div className="px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Name..."
          value={filters.name}
          onChange={(e) => dispatch(setFilterName(e.target.value))}
        />
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Username..."
          value={filters.username}
          onChange={(e) => dispatch(setFilterUsername(e.target.value))}
        />
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Email..."
          value={filters.email}
          onChange={(e) => dispatch(setFilterEmail(e.target.value))}
        />
        <input
          className="bg-slate-100 border-slate-800 p-1"
          type="text"
          placeholder="Phone..."
          value={filters.phone}
          onChange={(e) => dispatch(setFilterPhone(e.target.value))}
        />
      </div>
    </div>
  );
};
