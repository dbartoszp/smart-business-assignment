type UserTableFooterProps = {
  totalCount: number;
  currentCount: number;
};

export const UserTableFooter = ({
  totalCount,
  currentCount,
}: UserTableFooterProps) => {
  return (
    <div className="p-3">
      {currentCount > 0 ? (
        <p>
          Showing <strong>{currentCount}</strong> out of{" "}
          <strong>{totalCount}</strong> users
        </p>
      ) : (
        <p>No users fit the filters</p>
      )}
    </div>
  );
};
