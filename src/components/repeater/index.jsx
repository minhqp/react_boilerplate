// ** Third Party Components
import React from 'react';
import PropTypes from 'prop-types';

const Repeater = (props) => {
  // ** Props
  const { count, tag, component, children, ...rest } = props;

  // ** Custom Tag
  const Tag = tag;

  // ** Default Items
  const items = [];

  // ** Loop passed count times and push it in items Array
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    items.push(children(i));
  }

  return <Tag {...rest}>{items}</Tag>;
};

/* eslint-disable */
// ** PropTypes
Repeater.propTypes = {
  count: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
};

// ** Default Props
Repeater.defaultProps = {
  tag: 'div',
};
/* eslint-enable */

export default Repeater;
