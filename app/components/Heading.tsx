const Heading = ({ title }: { title: string }) => (
  <h2
    style={{
      fontWeight: 500,
      fontSize: "16px",
      margin: 0,
      paddingBottom: "16px",
    }}
  >
    {title}
  </h2>
);

export default Heading;
