import { TableRowSkeleton } from "./TableRow/TableRowSkeleton";

export const UserTableSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2 p-2">
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
    </div>
  );
};
