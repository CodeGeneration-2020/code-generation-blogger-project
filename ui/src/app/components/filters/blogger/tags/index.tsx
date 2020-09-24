import React from 'react';
import * as Style from './styles';
import { v4 as uuidv4 } from 'uuid';
import BlueButton from '../../../shared/BlueButton/button.component';
import Select from '../../../shared/select/';

const TagsFilter = props => {
  const removeOption = idtags => {
    const tags = props.selectedTags.filter(t => t.value !== idtags);
    props.setFilter(tags, 'tags');
  };

  const setTagsFilter = option => {
    const tags = [...props.selectedTags, option];
    props.setFilter(tags, 'tags');
  };

  return (
    <Style.Tags>
      <Style.SelectContainer>
        <span className="icon">{'#'}</span>
        <div className="select">
          <Select
            changeHandler={option => setTagsFilter(option)}
            title="tag"
            options={props.tags}
            selected={props.selectedTags}
          />
        </div>
        <div className="button">
          <BlueButton style={{ width: '100%', height: '100%' }}>
            <span className="text-button">Search</span>
          </BlueButton>
        </div>
      </Style.SelectContainer>
      <Style.ListTags>
        {props.selectedTags &&
          props.selectedTags.map(t => {
            return (
              <span className="tag">
                <BlueButton
                  key={uuidv4()}
                  onClick={() => removeOption(t.value)}
                >
                  <>{t.label}</>
                </BlueButton>
              </span>
            );
          })}
      </Style.ListTags>
    </Style.Tags>
  );
};

export default TagsFilter;
