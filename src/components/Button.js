/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({url, text}) => (
  <a 
    href={url}
    sx={{
      borderColor: 'purple',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 3,
      color: 'purple',
      padding: 2,
      textDecoration: 'none',
      fontWeight: 600,
    }}
  >
    {text}
  </a>
);

export default Button;