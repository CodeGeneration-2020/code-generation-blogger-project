import React from 'react';
import * as Style from './styles';
import { v4 as uuidv4 } from 'uuid';
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
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0925 7.46033C15.5627 7.46033 16.0184 7.27927 16.3759 6.95061C16.7328 6.62234 16.9519 6.18331 16.993 5.71431C17.0355 5.22768 16.8833 4.76789 16.5641 4.41952C16.2462 4.07257 15.8038 3.8814 15.3174 3.8814H13.5374L13.6934 2.09841C13.7361 1.61178 13.5838 1.15199 13.2646 0.80375C12.9467 0.456673 12.5043 0.265625 12.0189 0.265625C11.5487 0.265625 11.093 0.446556 10.7356 0.775216C10.3787 1.10349 10.1594 1.54252 10.1184 2.01151L9.95471 3.8814H7.85539L8.01142 2.09828C8.05396 1.61178 7.90169 1.15186 7.5825 0.80375C7.26461 0.456673 6.8222 0.265625 6.33674 0.265625C5.86658 0.265625 5.41081 0.446556 5.05349 0.775216C4.69656 1.10349 4.47736 1.54252 4.43638 2.01151L4.2727 3.8814H2.40463C1.93447 3.8814 1.47871 4.06246 1.12125 4.39112C0.764321 4.71939 0.545128 5.15842 0.504143 5.62755C0.461602 6.11418 0.613869 6.57397 0.93306 6.92234C1.25108 7.26929 1.69336 7.46033 2.1787 7.46033H3.9596L3.77556 9.56355H1.90736C1.43733 9.56355 0.981568 9.74461 0.624115 10.0733C0.267182 10.4014 0.0479893 10.8404 0.00700425 11.3096C-0.0355372 11.7962 0.11673 12.2561 0.435921 12.6044C0.753815 12.9513 1.19622 13.1424 1.68156 13.1424H3.46259L3.30656 14.9253C3.26402 15.4121 3.41629 15.8719 3.73548 16.2201C4.05337 16.5672 4.49578 16.7583 4.98112 16.7583C5.45128 16.7583 5.90704 16.5772 6.26436 16.2487C6.6213 15.9204 6.84049 15.4814 6.88161 15.0122C6.88186 15.0098 6.88199 15.0074 6.88225 15.005L7.04516 13.1424H9.1446L8.98871 14.9253C8.94603 15.412 9.09843 15.8718 9.41749 16.2201C9.73539 16.5671 10.1778 16.7583 10.6631 16.7583C11.1333 16.7583 11.5891 16.5772 11.9465 16.2485C12.3034 15.9203 12.5226 15.4812 12.5637 15.0122C12.5639 15.0107 12.564 15.0091 12.5641 15.0076L12.7273 13.1424H14.5955C14.6 13.1424 14.6044 13.1424 14.6089 13.1422C15.0743 13.1387 15.5248 12.9582 15.8787 12.6326C16.2357 12.3044 16.4549 11.8653 16.496 11.3963C16.5385 10.9097 16.3861 10.4499 16.0671 10.1015C15.749 9.75459 15.3066 9.56355 14.8203 9.56355H13.0403L13.2243 7.4602H15.0925V7.46033ZM9.64174 7.46033L9.4577 9.56355H7.35825L7.5423 7.46033H9.64174Z"
              fill={props.theme && props.theme.color}
            />
          </svg>
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
