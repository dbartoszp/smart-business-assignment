import { User } from "@/app/utils/types";

export const TableRow = ({ id, name, username, email, phone }: User) => {
  return (
    <div className="flex flex-row md:justify-around space-x-4 p-2 border-slate-100 border">
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};
