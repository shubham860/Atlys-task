import User1 from './assets/User1.svg';
import User2 from './assets/User2.svg';


const loginConfig = {
    type: 'login',
    title: 'WELCOME BACK',
    subTitle: 'Log into your account',
    submitBtnText: 'Login now',
    metaText: 'Not registered yet?',
    linkText: 'Register →',
    fields: [
        {
            label: 'Email or Username',
            type: 'text',
            metaText: '',
            placeholder: 'Enter your email or username'
        },
        {
            label: 'Password',
            type: 'password',
            metaText: 'Forgot password?',
            placeholder: 'Enter your password'
        }
    ]
}

const signupConfig = {
    type: 'signup',
    title: 'SIGN UP',
    subTitle: 'Create an account to continue',
    submitBtnText: 'Continue',
    metaText: 'Already have an account?',
    linkText: ' Login →',
    fields: [
        {
            label: 'Email',
            type: 'text',
            metaText: '',
            placeholder: 'Enter your email'
        },
        {
            label: 'Username',
            type: 'text',
            metaText: '',
            placeholder: 'Choose a preferred username'
        },
        {
            label: 'Password',
            type: 'password',
            metaText: '',
            placeholder: 'Choose a strong password'
        }
    ]
}

export const formConfig = {
    login: loginConfig,
    signup: signupConfig
}


export const commentsFormConfig = {
    title: 'Hello Jane',
    description: 'How are you doing today? Would you like to share something with the community 🤗',
    form: {
        title: 'Create post',
        icon: '💬',
        placeholder: 'How are you feeling today?',
        submitBtnText: 'Post'
    },
    comments: [
        {
            username: 'Theresa Webb',
            time: '5mins ago',
            avatar: User1,
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            icon: '👋',
            replies: 24
        },
        {
            username: 'Marvin McKinney',
            time: '8mins ago • Edited',
            avatar: User2,
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            icon: '😞',
            replies: 12
        }
    ]
}