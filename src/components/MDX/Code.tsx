/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function Pre({ className, ...props }: { className: string }) {
  return <code className={`${className} text-gray-200`} {...props} />;
}
