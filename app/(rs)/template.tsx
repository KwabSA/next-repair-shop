const Template = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="animate-appear">
      {/* Header */}
      {children}
    </div>
  );
};

export default Template;
