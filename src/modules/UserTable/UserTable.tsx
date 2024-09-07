"use client";
import { useDispatch, useSelector } from "react-redux";
import { TableRow } from "./TableRow/TableRow";
import { UserTableFilters } from "./UserTableFilters/UserTableFilters";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { UsersState } from "@/app/utils/types";

const TEST_USER = {
  id: 2,
  name: "full name",
  username: "username",
  email: "email@gmail.com",
  phone: "123456789",
};

export const UserTable = () => {
  //   const dispatch = useDispatch();
  //   const { users, loading, filters } = useSelector((state: UsersState) => state);

  return (
    <div className="shadow-md md:w-9/12 w-10/12 mt-24">
      <UserTableHeader />
      <UserTableFilters />
      <div className="flex flex-col overflow-auto">
        <TableRow {...TEST_USER} />
        <TableRow {...TEST_USER} />
        <TableRow {...TEST_USER} />
        <TableRow {...TEST_USER} />
      </div>
      {/* {users.length} */}
    </div>
  );
};
