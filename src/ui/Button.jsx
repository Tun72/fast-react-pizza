import { Link } from "react-router-dom";

function Button({ children, disabled = false, to, type = "primary", onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colorsduration-300 hover:bg-yellow-300 focus:bg-yellow-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + "  px-4 py-3 md:px-6 md:py-4 text-sm",
    small: base + " px-4 py-3 md:px-5 md:py-2.5 text-xs",
    round: base + " px-3.5 py-2.5 md:px-4.5 md:py-2 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-stone-300  px-4 py-2.5 md:px-6 md:py-4 font-semibold uppercase tracking-wide text-stone-400 transition-colorsduration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300  focus:outline-none disabled:cursor-not-allow",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
