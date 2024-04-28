const ReactAppFromCDN = () => {
  return (
    <div>
      <h1>Topics Covered</h1>
      <p>
        The following is a list of all the topics we cover in the MDN learning
        area.
      </p>
      <a href="url">Getting Started with the Web.</a>
      <p>
        Provides a practical introduction to web development for complete
        beginners.
      </p>
      <a href="url">HTML-- Structuring the Web</a>
      <p>
        HTML is a language that we use to structure the diferent parts of our
        content and define what their meaning or purpose is. This topic teaches
        HTML in in detail.
      </p>
      <a href="url">CSS -- Styling the Web</a>
      <p>
        CSS is the language that we use to control our web content's style and
        layout, as well as adding behavior like like animation. This topic
        provides comprehensive coverage of CSS.{" "}
      </p>
    </div>
  );
};

ReactDOM.render(<ReactAppFromCDN />, document.querySelector("#root"));
