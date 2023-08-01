export const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className="relative z-0 sectionWrapper" id={idName}>
        <Component />
      </section>
    );
  };
