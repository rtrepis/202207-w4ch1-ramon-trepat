interface TextProps {
  text: string;
  css: string;
  icon?: string;
}

const Button = ({ text, css }: TextProps): JSX.Element => {
  return (
    <button className={css} type="button">
      {text}
    </button>
  );
};

export default Button;
