import React from 'react';
import Tag from '../Tag';
import { v4 as uuidv4 } from 'uuid';
import { ListTags } from './styles';
import { IOption, ITheme } from '../../../../types';
import withTheme from '../../../../HOC/withTheme';

const ScrollTags: React.FC<{
  tags: IOption[];
  className?: string;
  scroll?: string;
  theme?: ITheme;
}> = ({ tags, className = 'default-tag', scroll, theme }) => {
  return (
    <ListTags scroll={scroll} theme={theme}>
      {tags.length > 0 &&
        tags.map(tag => {
          return <Tag key={uuidv4()} title={tag.label} className={className} />;
        })}
    </ListTags>
  );
};

export default withTheme(ScrollTags);
