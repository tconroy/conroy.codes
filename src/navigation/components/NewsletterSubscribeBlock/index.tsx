import React from 'react';

export default function NewsletterSubscribeBlock() {
  return (
    <div
      className={`
      shadow
      rounded
      to
      w-full
      border-solid
      border-t-4
      border-darkmode-gray
      p-6
      my-2
    `}
    >
      <div
        className={`
        flex
        justify-between
        items-center
      `}
      >
        {/* <h4 className={`
          uppercase
          text-grey
          text-xs
          text-wide
          tracking-wide
          font-thin
        `}
        >
          Update
        </h4> */}
        {/* <span className="text-grey" aria-hidden="true">×</span> */}
      </div>
      <h3
        className={`
        text-darmode-gray
        dark:text-darkmode-white
        text-sm
        font-medium
        font-sans
        leading-normal
      `}
      >
        Look, lets be real for a moment — I know none of us need
        {' '}
        <em>yet another</em>
        {' '}
        newsletter
        subscription.
      </h3>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <p
        className={`
        my-3
        text-grey
        font-light
        tracking-wide
        font-sans
        leading-normal
        text-sm
      `}
      >
        These days, it feels like every website begs you to fork over your email in some desperate
        attempt to generate clout™️ or build some sort of blasé marketing brand presence™️. Yuck.
        <br />
        <br />
        I get it, I really do. I usually skip over these myself, and won&apos;t fault you at all if
        you do the same. No hard feelings.
        <br />
        <br />
        That being said —
        {' '}
        <strong>Letters from Tom</strong>
        {' '}
        is my attempt to create an
        un-newsletter. Traditionally,
        {' '}
        <em>way too much</em>
        {' '}
        emphasis has been placed on the former
        half of that word, and not nearly enough on the later. I want to change that.
        <br />
        <br />
        If you were to subscribe, you would receive (infrequent, sporadic) letters, like a
        one-directional penpal. You would also receive updates pertaining to this blog, my current
        and upcoming projects, and miscellaneous life stuff.
        <br />
        <br />
        I promise I will
        <strong>never</strong>
        {' '}
        spam you, resell your email, or attempt to
        generate a profit off of you in any way.
        <br />
        <br />
        <strong className="block text-center">
          I can&apos;t guarantee it will always be exciting, but I can guarantee that it will always
          be genuine.
        </strong>
      </p>
      <br />
      <br />
      <input
        type="email"
        className={`
          border-solid
          border
          w-full
          rounded
          px-3
          py-2
      `}
        placeholder="your@awesome-email-address.com"
      />

      <button
        type="submit"
        className={`
        bg-darkmode-accentlight
        text-white
        dark:border-gold
        border-2
        focus:bg-gold
        duration-500
        transition:colors
        hover:bg-gold
        hover:text-darkmode-accent
        px-3
        py-2
        rounded
        w-full
        mt-4
      `}
      >
        Subscribe to Letters from Tom
      </button>
    </div>
  );
}
