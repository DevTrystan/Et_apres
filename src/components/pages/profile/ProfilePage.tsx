import React from 'react';
import { Button } from '../../ui';

const ProfilePage: React.FC<any> = () => {
  return (
    <>
      <div className="min-h-screen">
        <Button className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-700"><div>Coucou</div></Button>
      </div>
    </>
  );
};

export default ProfilePage;
