import * as yup from 'yup';

const createCommentFormValidatonSchema = yup
    .object()
    .shape({
        firstName: yup.string().min(3, 'First name must be of 3 characters').required('First Name is required'),
        lastName: yup.string().min(3, 'Last name must be of 3 characters').required('Last Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        body: yup.string().min(5, 'Minimum 5 characters is required').required('Comment is required'),
        postId: yup.number().required('Post ID is required'),
    })
    .required('Required');

export default createCommentFormValidatonSchema;
