import { UserTableFilters } from "./UserTableFilters/UserTableFilters";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";

export const UserTable = () => {
  return (
    <div>
      UserTable
      <UserTableHeader />
      <UserTableFilters />
    </div>
  );
};
