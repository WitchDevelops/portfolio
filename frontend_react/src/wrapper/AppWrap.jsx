
export const AppWrap = (Component, idName, classNames = "") => function HOC() {
  return (
    <section id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />
      </div>
    </section>
  );
};

export default AppWrap;