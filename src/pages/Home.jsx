import React from "react";

const Home = (props) => {
  return (
    <>
      <section id="intro">
        <p>
          Welcome to <i>Plants of the World</i>, an encyclopedic application,
          using the{" "}
          <i>
            <a href="https://trefle.io/explore" target="_blank">
              Trefle API Collection
            </a>
          </i>
          , to help users better identify various flora not only by their common
          name, but also scientific, family, and genus names.
        </p>
      </section>
    </>
  );
};

export default Home;
