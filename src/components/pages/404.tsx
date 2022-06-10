import React from 'react';

const Page404: React.FC<any> = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-800 hero">
        <div className="text-3xl font-bold text-center hero-content">
          <div>
            <h1>The page is not found.</h1>
            <div className="mt-4">
              <a href="/" className="link-primary">
                Top Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
