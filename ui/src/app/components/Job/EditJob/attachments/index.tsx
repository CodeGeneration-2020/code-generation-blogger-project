import React from 'react';
import { attachmentsIconsCustomer } from '../../../../../img';
import { AttachmentsContainer } from './styles';
import { v4 as uuidv4 } from 'uuid';
import FileLoader from '../../../shared/file-loader';
import withTheme from '../../../../../HOC/withTheme';
import { defineType } from '../../../../helpers/define';
import { FILETYPES } from '../../../../../consts/lists';

const Attachments = props => {
  const [attachments, setAttachments] = React.useState<
    { icon: string; file }[]
  >([]);
  const prevSaveFile = async file => {
    const type = defineType(file.type);
    const fileCopy = attachments.some(f => f.file.name === file.name);
    if (type && !fileCopy) {
      setAttachments([
        ...attachments,
        { icon: attachmentsIconsCustomer[type], file },
      ]);
    }
  };
  return (
    <AttachmentsContainer theme={props.theme}>
      <span className="title">Attached media</span>
      <div className="attached">
        <div className="list">
          {attachments.length > 0 &&
            attachments.map(item => {
              return (
                <img
                  onClick={_ => {
                    setAttachments(
                      attachments.filter(f => f.file.name !== item.file.name),
                    );
                  }}
                  className="item"
                  src={item.icon}
                  alt="iconAtched"
                  key={uuidv4()}
                />
              );
            })}
        </div>
        <div className="add-file">
          <FileLoader
            id={'upload'}
            handleSaveFile={file => prevSaveFile(file)}
            allowedFormats={Object.values(FILETYPES)}
          />
          <label htmlFor="upload">
            <img src={attachmentsIconsCustomer.attachedButton} alt="add-file" />
          </label>
        </div>
      </div>
    </AttachmentsContainer>
  );
};

export default withTheme(Attachments);
