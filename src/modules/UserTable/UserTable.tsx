"use client";
import { TableRow } from "./TableRow/TableRow";
import { UserTableFilters } from "./UserTableFilters/UserTableFilters";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { useEffect } from "react";
import { fetchUsers } from "@/app/lib/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

export const UserTable = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="shadow-md md:w-9/12 w-10/12 mt-24">
      <UserTableHeader />
      <UserTableFilters />
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <TableRow
            title={true}
            email="Email"
            name="Full name"
            username="Username"
            phone="Phone"
          />
          {users.map((user) => (
            <TableRow
              key={user.email}
              email={user.email}
              name={user.name}
              username={user.username}
              phone={user.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
