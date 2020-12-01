/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function Pre({ className, ...props }: { className: string }) {
  return (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  );
}
