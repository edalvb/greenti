export const Solution = ({ description }: { description: string }) => {
  return (
    <section id="solution" className="relative z-[2] mt-16 md:mt-24 flex flex-col items-center text-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-secondary">La </span>
          <span className="text-primary">solución</span>
        </h3>
        <p className="text-secondary leading-relaxed max-w-[544px] mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};
