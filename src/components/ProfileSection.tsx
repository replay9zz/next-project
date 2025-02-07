import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center bg-black text-white p-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Profile</h2>
      <div className="mb-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>
      <p className="max-w-2xl text-center text-lg mb-8">
        I&apos;m interested in pentesting, web3 secrurity, and web developement.
      </p>
    </div>
  );
};

export default ProfileSection;