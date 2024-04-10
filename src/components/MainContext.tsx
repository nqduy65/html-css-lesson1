const MainContext = () => {
  return (
    <div className="content">
      <div className="flex-container">
        <div className="col-1" style={{ flexGrow: 1 }}>
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
        <div className="col-1" style={{ flexGrow: 1 }}>
          <h1 className="title-h1">
            <span style={{ color: "#03204c" }}>Container</span>
            <br />
            <span style={{ display: "block", color: "#3bc4e2" }}>
              Shipping Business
            </span>
          </h1>
          <p>
            Ocean shipping is continuing to be a biggest domain in Global Trade
            and carriers strive to deliver service excellence in the face of
            dynamic market changes and the demands for better customer service.
            By providing a robust, web-compliant operating environment and
            user-friendly interface, container carriers can readily decentralize
            their processes across their shipping network while integrating them
            into a single system for better control and improved operational
            efficiency.
          </p>
        </div>
      </div>
      <div
        className="flex-container"
        style={{ margin: "2.5rem 0rem", gap: "25px" }}
      >
        <div className="col-1">
          <h2>
            <span style={{ color: "#03204c" }}>Easy to use</span>
          </h2>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
        <div className="col-1">
          <h2>
            <span style={{ color: "#03204c" }}>Integrate with BI tools</span>
          </h2>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
        <div className="col-1">
          <h2>
            <span style={{ color: "#03204c" }}>Yield Management</span>
          </h2>
          <p>
            Commodo eiusmod sint occaecat ut. Anim do ea duis ullamco
            consectetur eiusmod velit esse. Amet mollit consequat sit laboris
            fugiat anim do. Cillum tempor labore amet magna cillum.
          </p>
        </div>
        <div className="col-1">
          <h2>
            <span style={{ color: "#03204c" }}>Exception Management</span>
          </h2>
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
