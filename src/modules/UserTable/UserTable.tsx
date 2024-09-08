"use client";
import { TableRow } from "./TableRow/TableRow";
import { UserTableFilters } from "./UserTableFilters/UserTableFilters";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { useAppSelector } from "@/app/lib/hooks";
import { UserTableSkeleton } from "./UserTableSkeleton";
import { UserTableFooter } from "./UserTableFooter/UserTableFooter";

export const UserTable = () => {
  const { filteredUsers, loading, users } = useAppSelector(
    (state) => state.users
  );

  return (
    <div className="shadow-md md:w-7/12 w-10/12 mt-16">
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
          {loading && <UserTableSkeleton />}
          {filteredUsers.map((user) => (
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
      <UserTableFooter
        totalCount={users.length}
        currentCount={filteredUsers.length}
      />
    </div>
  );
};
