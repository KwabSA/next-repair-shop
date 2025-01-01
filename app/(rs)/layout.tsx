import React from "react";

const RSLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header */}
      <div className="px-y py-2">{children}</div>
    </div>
  );
};

export default RSLayout;