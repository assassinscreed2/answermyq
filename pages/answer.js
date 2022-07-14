import { useUser } from '@auth0/nextjs-auth0';

export default function answer(){
    const { user, error, isLoading } = useUser(); 
    console.log(user)
    return <a href="/api/auth/login">click</a>
}