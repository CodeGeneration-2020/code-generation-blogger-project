import React from 'react';
import * as Style from './styles';
import BlueButton from '../../../shared/BlueButton/button.component';
import { ITheme } from '../../../../../types';
import withTheme from '../../../../../HOC/withTheme';
import { v4 as uuidv4 } from 'uuid';

const ListContainer: React.FC<{
  list;
  theme?: ITheme;
  removeItem;
  errors: any;
}> = ({ list, removeItem, theme, errors }) => {
  return (
    <Style.ListContainer theme={theme}>
      <div className="list">
        {list.length ? (
          list.map(item => {
            return (
              <BlueButton
                key={uuidv4()}
                className="scroll-item"
                style={{ hover: false }}
                onClick={() => removeItem(item)}
              >
                <span className="text">{item.label}</span>
              </BlueButton>
            );
          })
        ) : (
          <span className="error">{errors}</span>
        )}
      </div>
    </Style.ListContainer>
  );
};

export default withTheme(ListContainer);
