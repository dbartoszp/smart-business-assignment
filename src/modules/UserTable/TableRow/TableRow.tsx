import { User } from "@/app/utils/types";
import { TableCell } from "./TableCell/TableCell";

interface TableRowProps extends User {
  title?: boolean;
}

export const TableRow = ({
  name,
  username,
  email,
  phone,
  title = false,
}: TableRowProps) => {
  return (
    <div className={`flex flex-row ${title ? "bg-slate-200 text-center" : ""}`}>
      <TableCell>{name}</TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
    </div>
  );
};
