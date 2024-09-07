import { UserTable } from "@/modules/UserTable/UserTable";

export default function Home() {
  return (
    <div>
      <main className="flex items-center justify-center">
        <UserTable />
      </main>
    </div>
  );
}
