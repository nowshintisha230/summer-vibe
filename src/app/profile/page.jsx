'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { Avatar,Card } from '@heroui/react';
import { WithForm } from '@/components/UpdateUserModal';
const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
  
    return (
       <Card className='max-w-96 mx-auto my-5 flex flex-col items-center border'><Avatar className='h-30 w-30'>
                       <Avatar.Image alt='' src={user?.image} referrerPolicy="no-referrer" />
                       <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                     </Avatar>
                     <h1 className='text-xl font-bold'>{user?.name}</h1>
                     <p className='text-muted'>{user?.email}</p>
                     <WithForm></WithForm>
                     </Card>
    );
};

export default ProfilePage;