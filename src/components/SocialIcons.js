const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/tecnicos">
        <i className="fa-brands fa-github" aria-hidden="true" title="SAADAOUI Zakaria's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/zakaria-saadaoui-aba125136/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="SAADAOUI Zakaria's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/zakaria_.saadaoui/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="SAADAOUI Zakaria's Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/zakariasaadao19">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="SAADAOUI Zakaria's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
