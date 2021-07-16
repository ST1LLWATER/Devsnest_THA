function Templates(props) {
  return (
    <>
      <div className="templates">
        {props.data.map((template) => {
          return (
            <>
              <div className="wrapper">
                <div
                  className="container"
                  onClick={() => {
                    props.setMeme(template);
                  }}
                >
                  <p className="title">{template.name}</p>
                  <img
                    className="meme-img"
                    src={template.url}
                    alt={template.name}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Templates;
