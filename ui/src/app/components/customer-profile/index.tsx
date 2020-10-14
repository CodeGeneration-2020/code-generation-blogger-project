import React, { useState } from 'react';
import * as Style from './styles';
import Ava from '../../../img/ava.svg';
import { contactsIcons } from '../../../img';
import withTheme from '../../../HOC/withTheme';
import { TABS } from '../../../consts/lists';
import InfiniteScroll from 'react-infinite-scroll-component';
import Comments from '../shared/customer-comments';

const CustomerProfile = props => {
  const [activeTab, setTab] = useState(TABS.feedbacks);
  const setActiveTab = tab => {
    setTab(tab);
  };
  return (
    <Style.ProfileContainer>
      <Style.CustomerInfo theme={props.theme}>
        <div className="ava">
          <img src={Ava} alt="ava" />
        </div>
        <div className="info">
          <div className="fullname">
            <span className="name">Ralph</span>
            <span className="surname">Siccone</span>
          </div>
          <div className="location">
            <span className="country">Ukraine,</span>
            <span className="city">Kharkiv</span>
          </div>
        </div>
      </Style.CustomerInfo>
      <Style.ContactInfo theme={props.theme}>
        <span className="title">Contact info</span>
        <div className="contacts">
          <div className="item">
            <img
              src={contactsIcons.mail}
              width={42}
              height={36}
              alt="mail"
              className="icon"
            />
            <span className="content">ralph@gmail.com</span>
          </div>
          <div className="item">
            <img
              src={contactsIcons.phone}
              width={39}
              height={39}
              alt="phone"
              className="icon"
            />
            <span className="content">+3809754333</span>
          </div>
          <div className="item">
            <img
              src={contactsIcons.link}
              width={36}
              height={36}
              alt="link"
              className="icon"
            />
            <span className="content">test_com</span>
          </div>
        </div>
      </Style.ContactInfo>
      <Style.Edit theme={props.theme}>
        <span className="text">Edit</span>
      </Style.Edit>
      <Style.Tabs>
        <Style.LeftTab
          active={activeTab === TABS.feedbacks}
          theme={props.theme}
          onClick={() => setActiveTab(TABS.feedbacks)}
        >
          Feedbacks
        </Style.LeftTab>
        <Style.RightTab
          active={activeTab === TABS.jobs}
          theme={props.theme}
          onClick={() => setActiveTab(TABS.jobs)}
        >
          Jobs
        </Style.RightTab>
      </Style.Tabs>

      {activeTab === TABS.feedbacks ? (
        <Style.Feedbacks theme={props.theme}>
          <InfiniteScroll
            className="infinite-scroll"
            dataLength={3}
            next={() => {}}
            hasMore={true}
            loader={props.loading && <h4>Loading...</h4>}
            height={300}
          >
            <Comments />
          </InfiniteScroll>
        </Style.Feedbacks>
      ) : (
        <Style.ListJobs theme={props.theme}></Style.ListJobs>
      )}
    </Style.ProfileContainer>
  );
};

export default withTheme(CustomerProfile);
