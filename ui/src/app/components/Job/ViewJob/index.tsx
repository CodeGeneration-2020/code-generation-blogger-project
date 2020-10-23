import React from 'react';
import * as Styled from './styles';
import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../../../../types';
import Tag from '../../shared/Tag';
import InstaIcon from '../../../../img/phone.svg';
import MailIcon from '../../../../img/mail.svg';
import PhoneIcon from '../../../../img/link.svg';
import UserAva from '../../../../img/jobCardAva.svg';
import {
  attachmentsIconsBlogger,
  attachmentsIconsCustomer,
} from '../../../../img';
import parseFullName from '../../../helpers/parseFullName';
import DrawStars from '../../shared/draw-stars';
import Comments from '../../customer-comments';
import withTheme from '../../../../HOC/withTheme';
import { ITheme } from '../../../../types';

const ViewJob: React.FC<{
  job: IJob;
  getComments: any;
  createComment: any;
  comments: any;
  loading: boolean;
  averageScore: number;
  isOwner: boolean;
  theme?: ITheme;
}> = ({
  job,
  comments,
  getComments,
  createComment,
  loading,
  averageScore,
  isOwner,
  theme,
}) => {
  const attachmentsIcons = isOwner
    ? attachmentsIconsCustomer
    : attachmentsIconsBlogger;
  return (
    <Styled.JobContainer>
      <Styled.JobInfo theme={theme}>
        <div className="header-info">
          <div className="short-title">{job.title}</div>
          <div className="budget">
            <span className="sum">{job.budget}$</span>
            <span className="text">Budget</span>
          </div>
        </div>
        <div className="tags">
          {job.tags.map(t => (
            <Tag title={t.label} className="item" key={uuidv4()} />
          ))}
        </div>
        <div className="location">
          <div className="countries">
            {job.location.countries.map(t => (
              <Tag title={t.label} className="item" key={uuidv4()} />
            ))}
          </div>
          <div className="cities">
            {job.location.cities.map(t => (
              <Tag title={t.label} className="item" key={uuidv4()} />
            ))}
          </div>
        </div>
      </Styled.JobInfo>

      <Styled.Description theme={theme}>
        <span className="title">About the job</span>
        <p className="text">{job.description}</p>
      </Styled.Description>

      <Styled.Connection theme={theme}>
        <span className="title">How to contact</span>
        <div className="contacts">
          <div className="item">
            <div className="icon">
              <img src={PhoneIcon} width="23" height="23" alt="phone" />
            </div>
            <div className="content phone">{job.contact.phone}</div>
          </div>
          <div className="item">
            <div className="icon">
              <img src={MailIcon} width="25" height="21" alt="mail" />
            </div>
            <div className="content">{job.contact.email}</div>
          </div>
          <div className="item">
            <div className="icon">
              <img src={InstaIcon} width="21" height="21" alt="insta" />
            </div>
            <div className="content">{job.additional_contacts}</div>
          </div>
        </div>
      </Styled.Connection>

      <Styled.Attachments>
        <span className="title">Attached media</span>
        <div className="list">
          {Object.keys(attachmentsIcons)
            .slice(0, -1)
            .map(k => (
              <div className="item" key={uuidv4()}>
                <img src={attachmentsIcons[k]} alt="item" />
              </div>
            ))}
        </div>
      </Styled.Attachments>
      {!isOwner && (
        <>
          <Styled.Rating>
            <div className="user-info">
              <div className="ava">
                <img src={UserAva} alt="user-ava" />
              </div>
              <div className="info">
                <div className="fullname">
                  <span className="name">
                    {job.customerId.full_name &&
                      parseFullName.getName(job.customerId.full_name)}
                  </span>
                  <span className="surname">
                    {job.customerId.full_name &&
                      parseFullName.getSurname(job.customerId.full_name)}
                  </span>
                </div>
                <div className="location">
                  <span className="country">Ukraine, </span>
                  <span className="city">Kharkiv</span>
                </div>
              </div>
            </div>

            <div className="insta-icon">
              <img src={InstaIcon} width="37" height="37" alt="insta-icon" />
            </div>

            <div className="score">
              <DrawStars count={averageScore} className="star" />
            </div>
          </Styled.Rating>
          <Styled.Comments>
            <Comments
              loading={loading}
              comments={comments}
              createComment={(comment, score) => createComment(comment, score)}
              getComments={getComments}
            />
          </Styled.Comments>
        </>
      )}
    </Styled.JobContainer>
  );
};

export default withTheme(ViewJob);
