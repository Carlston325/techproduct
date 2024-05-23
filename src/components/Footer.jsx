function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="copyright">
        <p>© ElectroHive {year}</p>
      </footer>
    </>
  );
}

export default Footer;
