import React from "react";
import withCursor from "../../HOCs/withCursor";

const Button = props => {
  const Tag = props.href ? "a" : "a";

  const { onCursor } = props.context;

  return (
    <Tag
      onMouseEnter={() => onCursor('pointer')}
      onMouseLeave={onCursor}
      {...props}
    />);
};

export default withCursor(Button);
