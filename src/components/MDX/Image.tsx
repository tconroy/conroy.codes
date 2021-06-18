import React, { useState } from 'react';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = NextImageProps & {
  caption?: string;
};

export default function Image(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const caption = props.caption || props.alt;

  return (
    <figure className={`opacity-${!isLoaded ? 0 : 100} transition-opacity duration-150`}>
      <NextImage
        onLoad={() => {
          setIsLoaded(true);
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
