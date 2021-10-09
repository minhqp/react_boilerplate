/* eslint-disable react/no-array-index-key */
// ** React Imports
import React, { Fragment } from 'react';

// ** Third Party Components
import Proptypes from 'prop-types';
import classnames from 'classnames';
import { UncontrolledTooltip } from 'reactstrap';

// ** Custom Components
import Avatar from '@src/components/avatar';

const AvatarGroup = (props) => {
  // ** Props
  const { data, tag, className } = props;

  // ** Conditional Tag
  const Tag = tag || 'div';

  // ** Render Data
  const renderData = () => {
    return data.map((item, i) => {
      const ItemTag = item.tag ? item.tag : 'div';
      return (
        <Fragment key={i}>
          {item.title ? (
            <UncontrolledTooltip
              placement={item.placement}
              target={item.title.split(' ').join('-')}
            >
              {item.title}
            </UncontrolledTooltip>
          ) : null}
          {!item.meta ? (
            <Avatar
              tag={ItemTag}
              className={classnames('pull-up', {
                [item.className]: item.className,
              })}
              {...(item.title ? { id: item.title.split(' ').join('-') } : {})}
              title={undefined}
              meta={undefined}
              {...item}
            />
          ) : null}
          {item.meta ? (
            <ItemTag className="d-flex align-items-center pl-1">
              {item.meta}
            </ItemTag>
          ) : null}
        </Fragment>
      );
    });
  };

  return (
    <Tag
      className={classnames('avatar-group', {
        [className]: className,
      })}
    >
      {renderData()}
    </Tag>
  );
};

export default AvatarGroup;

/* eslint-disable */
// ** PropTypes
AvatarGroup.propTypes = {
  data: Proptypes.array.isRequired,
  tag: Proptypes.oneOfType([Proptypes.func, Proptypes.string]),
};
/* eslint-enable */
