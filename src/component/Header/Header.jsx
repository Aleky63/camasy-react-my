import s from "./Header.module.css";

function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"
        alt="pic"
      />
    </header>
  );
}
export default Header;
