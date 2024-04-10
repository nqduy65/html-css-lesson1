const MainContext = () => {
  return (
    <div className="content">
      <div className="flex-container">
        <div className="col-1" style={{ flexGrow: 1, padding: "0 0.5rem" }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/rNjUDw5E6tY?si=zYn9rJoSOkS_kCOr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-1" style={{ flexGrow: 1, padding: "0 0.5rem" }}>
          <h1 className="title-h1">
            <span style={{ color: "#03204c" }}>Container</span>
            <br />
            <span style={{ display: "block", color: "#3bc4e2" }}>
              Shipping Business
            </span>
          </h1>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
      </div>
      <div
        className="flex-container"
        style={{ margin: "2.5rem 0.5rem", gap: "25px" }}
      >
        <div className="col-1" style={{ flexGrow: 1 }}>
          <h3>
            <span style={{ color: "#03204c" }}>Easy to use</span>
          </h3>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
        <div className="col-1" style={{ flexGrow: 1 }}>
          <h3>
            <span style={{ color: "#03204c" }}>Integrate with BI tools</span>
          </h3>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
        <div className="col-1" style={{ flexGrow: 1 }}>
          <h3>
            <span style={{ color: "#03204c" }}>Yield Management</span>
          </h3>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
        <div className="col-1" style={{ flexGrow: 1 }}>
          <h3>
            <span style={{ color: "#03204c" }}>Exception Management</span>
          </h3>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContext;
