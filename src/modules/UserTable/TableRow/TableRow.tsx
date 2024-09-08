import { User } from "@/app/utils/types";
import { TableCell } from "./TableCell/TableCell";
import clsx from "clsx";

type TableRowProps = User & {
  title?: boolean;
};

export const TableRow = ({
  name,
  username,
  email,
  phone,
  title = false,
}: TableRowProps) => {
  return (
    <div
      className={clsx("flex flex-row", { "bg-slate-200 text-center": title })}
    >
      <TableCell>
        <p>{name}</p>
      </TableCell>
      <TableCell>
        <p>{username}</p>
      </TableCell>
      <TableCell>
        <p>{email}</p>
      </TableCell>
      <TableCell>
        <p>{phone}</p>
      </TableCell>
    </div>
  );
};
