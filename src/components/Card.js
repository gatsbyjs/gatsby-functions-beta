/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from './Button';

const Card = ({name, repo, baseRepo}) => (
  <div
    sx={{
      borderRadius: 4,
      padding: 4,
      boxShadow: "rgb(46 41 51 / 8%) 0px 1px 2px, rgb(71 63 79 / 8%) 0px 2px 4px;"
    }}
  >
    <h2 sx={{fontSize: 3}}>
      {name}
    </h2> 
    <Button url={`${baseRepo + repo}`} text="Visit Repo" />
  </div>
);

export default Card;