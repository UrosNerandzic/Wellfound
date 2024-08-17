export const CultureAndBenefits = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-xl font-medium text-dark-aaaa antialiased mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-dark-aaaa font-medium antialiased text-xl mb-4 relative">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[20px] styles_component__ss">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    normal: ({ children }) => (
      <div className="pr-6 ">
        <p>{children}</p>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
};
