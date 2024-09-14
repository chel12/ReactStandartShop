import React from 'react';
import { useSelector } from 'react-redux';
import UserSignupForm from './UserSignupForm';

const UserForm = () => {
	const { showForm } = useSelector(({ user }) => user);
	return showForm ? <UserSignupForm /> : <div>useForm</div>;
};

export default UserForm;
