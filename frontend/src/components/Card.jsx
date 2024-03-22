import React from 'react';

const Card = ({ title, date, venue, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={`Poster for ${title}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {date} | {venue}
        </p>
      </div>
    </div>
  );
};

const CardList = ({ events }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {events.map((event, index) => (
        <Card
          key={index}
          title={event.title}
          date={event.date}
          venue={event.venue}
          imageUrl={event.imageUrl}
        />
      ))}
    </div>
  );
};

export default function App() {
  const events = [
    {
      title: "Trending Event 1",
      date: "2024/04/07 (Sun) | Taiwan, Taipei",
      venue: "Taipei Arena",
      imageUrl: "path_to_event_1_image.jpg", // Replace with actual image path
    },
    // ... Add other events here
  ];

  return (
    <div className="App">
      <CardList events={events} />
    </div>
  );
}
