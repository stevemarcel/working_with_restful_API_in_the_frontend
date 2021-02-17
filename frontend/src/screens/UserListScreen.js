import React, { useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listUsers, listProfiles } from '../actions/userActions';
import Profile from '../components/Profile';

const UserListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProfiles());
    dispatch(listUsers());
  }, [dispatch]);

  const userList = useSelector((state) => state.userList);
  const { usersRecord } = userList;
  
  const userProfiles = useSelector((state) => state.userProfiles);
  const { loading: loadingProfiles, error: errorProfiles, profiles } = userProfiles;
  
  
  // const profiles = usersRecord[0];
  const status = usersRecord[0];
  const size = usersRecord[1];
  // const profiles = ((usersRecord || {}).records || {}).profiles;
  // const size = (usersRecord || {}).size;
  // console.log(profiles);
  // console.log(profiles[FirstName]);
  // console.log(size);
  // profiles.map(p => console.log(p.username))

  return (
    <Container>
      <h1>User List</h1>
      <p>
        status: {status} size: {size}
        
        </p>
      {/* {loadingProfiles ? (
        <Loader />
      ) : errorProfiles ? (
        <Message variant='danger'>
          <b>ERROR 404: Not found.</b> User List could not be fetched.
        </Message>
      ) : (
        <>
          <Row>
            {profiles.map((profile) => (
              <Col xs={12} md={6} lg={4} xl={3}>
                <Profile profile={profile} />
              </Col>
            ))}
          </Row>
        </>
      )} */}
    </Container>
  );
};

export default UserListScreen;
