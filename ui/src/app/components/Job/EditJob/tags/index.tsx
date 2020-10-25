import React from 'react';
import * as Style from './styles';
import HtagIcon from '../../../../../img/htag.svg';
import Select from '../../../shared/TagsSelect/select.component';
import ScrollList from '../sroll-list';

const Tags = ({ selectTag, removeTag, chosenTags, optionsTags, errors }) => {
  return (
    <Style.Tags>
      <div className="select">
        <img
          src={HtagIcon}
          alt="icon"
          width={17}
          height={17}
          className="icon"
        />
        <div className="search">
          <Select
            changeHandler={tag => selectTag(tag)}
            selected={chosenTags}
            options={optionsTags}
            placeholder={'tag'}
          />
        </div>
      </div>
      <span className="text">Chosen tags</span>
      <div className="chosen-tags">
        <ScrollList
          list={chosenTags}
          errors={errors['tags']}
          removeItem={item => removeTag(item)}
        />
      </div>
    </Style.Tags>
  );
};

export default Tags;
