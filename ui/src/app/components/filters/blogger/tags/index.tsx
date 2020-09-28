import React from 'react';
import * as Style from './styles';
import { v4 as uuidv4 } from 'uuid';
import Htag from '../../../../../img/htag.svg';
import BlueButton from '../../../shared/BlueButton/button.component';
import TagsSelect from '../../../shared/TagsSelect/select.component';

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
        <span className="icon">
          <img src={Htag} alt="htag" />
        </span>
        <div className="select">
          <TagsSelect
            placeholder={'tag'}
            options={props.tags}
            changeHandler={option => setTagsFilter(option)}
            selected={props.selectedTags}
          />
        </div>
      </Style.SelectContainer>
      <Style.ListTags>
        {props.selectedTags &&
          props.selectedTags.map(t => {
            return (
              <span className="tag" key={uuidv4()}>
                <BlueButton onClick={() => removeOption(t.value)}>
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
