export const Challenge = ({ description }: { description: string }) => {
  return (
    <div className="relative z-[2] mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 ml-10">
      <section id="challenge">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 ml-2">
            <span className="text-secondary">El </span>
            <span className="text-primary">desafío</span>
          </h3>
          <p className="text-secondary leading-relaxed max-w-[544px] pl-2">
            {description}
          </p>
        </div>
        <div className="hidden md:block" aria-hidden="true"></div>
      </section>
    </div>
  );
};
