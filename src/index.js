import "./styles.css";

function thatRecivesInjectedDependency(aDependency) {
  aDependency
    .doSomethingAsync()
    .then((result) => {
      console.log("it happened");
    })
    .catch((error) => {
      throw error;
    });
}

export default thatRecivesInjectedDependency;
