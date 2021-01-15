import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listUsers } from '../actions/userActions';

const UserListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, usersRecord } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const profile = (usersRecord || {}).records;
  console.log(profile);

  return (
    <Container>
      <h1>User List</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          <b>ERROR 404: Not found.</b> User List could not be fetched.
        </Message>
      ) : (
        <>
          <Row>
            <Col>
              <h2>some other thing</h2>
            </Col>
          </Row>

          <Table striped borderless hover variant='primary' className='text-white'>
            <thead className='text-dark'>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Username</th>
                <th className='d-none d-md-table-cell'>disappear</th>
                <th className='d-none d-md-table-cell'>Username</th>
                <th className='d-none d-md-table-cell'>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td></td>
                <td>@fat</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td></td>
                <td>@twitter</td>
                <td></td>
                <td className='d-none d-md-table-cell'>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
                <td className='d-none d-md-table-cell'>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default UserListScreen;
