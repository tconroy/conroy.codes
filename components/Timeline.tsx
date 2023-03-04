import React from "react";

interface Props {
  events: Array<{
    date: string;
    description: React.ReactNode;
  }>;
}

export default function Timeline(props: Props) {
  return (
    <ol className="timeline">
      {props.events.map((event) => (
        <li className="timeline-item" data-date={event.date}>
          {event.description}
        </li>
      ))}
    </ol>
  );
}
