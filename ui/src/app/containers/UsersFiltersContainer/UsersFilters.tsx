import React from 'react';
import BloggerFilter from '../../components/BloggerFilter/blogger.component';
import CustomerFilter from '../../components/CustomerFilter/customer.component';

const UsersFilters = () => {
  const [index, setIndex] = React.useState(false);
  const typeArray = ['blogger', 'customer'];
  const type = typeArray[index ? 1 : 0];
  return (
    <>
      {type === 'blogger' ? <BloggerFilter /> : <CustomerFilter />}
      <button onClick={() => setIndex(!index)}>Change state!!! </button>
      <p>
        IS Blogger : <span>{type}</span>
      </p>
    </>
  );
};

export default UsersFilters;
