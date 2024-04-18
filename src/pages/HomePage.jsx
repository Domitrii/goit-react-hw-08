import DocumentTitle from "../DocumentTitle"


function HomePage() {
  const styles = {
    container: {
      minHeight: "calc(100vh - 50px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: "center",
    },
  };
  return (
    <>
      <DocumentTitle>Welcome Page</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>Contacts manager welcome page
        <span role="img" aria-label="Greeting icon" >
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  )
}

export default HomePage