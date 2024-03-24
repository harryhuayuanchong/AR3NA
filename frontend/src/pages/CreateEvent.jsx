import React from "react";
import styles from "../style";
import axios from 'axios';
import { Button, Modal, Label, TextInput } from 'flowbite-react';
import { useState, useRef } from 'react';

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [eventId, setEventId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: eventName,
      genre: genre,
      date: eventDate,
      information: description,
      location: location,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/events/data/upload/`, formData);
      console.log(response.data);
      setEventId(response.data.event_id);
      alert('Event data has been successfully uploaded.');
    } catch (error) {
      console.error("Error uploading event:", error);
    }
  };

  const handleFinalSubmit = async () => {
    if (!eventId) {
      alert('Please first upload the event data');
      return;
    }

    const data = {
      event_id: eventId,
      contract_addresses: curves.filter(curve => curve.trim() !== ''),
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/events/create/`, data);
      alert('Event created successfully.');
      window.location.href = '/all-events';
    } catch (error) {
      console.error("Error creating event with addresses:", error);
      alert('Failed to create event. Please try again.');
    }
  };


  const [curves, setCurves] = useState(['']);

  const addCurve = () => {
    setCurves([...curves, '']);
  };

  const updateCurve = (index, value) => {
    const newCurves = [...curves];
    newCurves[index] = value;
    setCurves(newCurves);
  };

  const removeCurve = (index) => {
    const newCurves = [...curves];
    newCurves.splice(index, 1);
    setCurves(newCurves);
  };

  return (
    <div className={`bg-black min-h-screen ${styles.flexStart} ${styles.paddingNew}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="bg-black p-8 rounded-md">
          <h1 className="text-5xl font-bold mb-6 text-white font-anton">Create New Event</h1>
          <p className="mb-20 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-5 text-white">About The Event</h2>
              <div className="w-full flex justify-between items-center md:flex-row flex-col pt-20 border-t-[2px] border-t-[#ffffff]"></div>

              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label htmlFor="event" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Upcoming Event Name:
                    </label>
                    <input
                      id="eventName"
                      type="text"
                      placeholder=""
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      className="bg-eerieDark py-1 px-4 rounded w-full text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="genre" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Genre:
                    </label>
                    <input
                      id="genre"
                      type="text"
                      placeholder=""
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className="bg-eerieDark py-1 px-4 rounded w-full text-white"
                    />

                  </div>

                  <div>
                    <label htmlFor="date" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Date of Next Event:
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="bg-eerieDark py-1 px-4 rounded w-full text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-4 mt-20 text-white">About The Venue</h2>
              <div className="w-full flex justify-between items-center md:flex-row flex-col pt-20 border-t-[2px] border-t-[#ffffff]"></div>

              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label htmlFor="location" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Event Location:
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder=""
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-eerieDark py-1 px-4 rounded w-full text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="venue" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Venue Name:
                    </label>
                    <input type="text" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>

                  <div>
                    <label htmlFor="capacity" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Venue Capacity:
                    </label>
                    <input type="text" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>

                  <div>
                    <label htmlFor="description" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Description:
                    </label>
                    <input
                      id="description"
                      type="text"
                      value={description}
                      placeholder=""
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-eerieDark py-1 px-4 rounded w-full text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-4 mt-20 text-white">About Your Business</h2>
              <div className="w-full flex justify-between items-center md:flex-row flex-col pt-20 border-t-[2px] border-t-[#ffffff]"></div>

              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label htmlFor="event" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Your Company Name:
                    </label>
                    <input type="text" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>

                  <div>
                    <label htmlFor="website" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Website:
                    </label>
                    <input type="text" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>

                  <div>
                    <label htmlFor="email" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Email:
                    </label>
                    <input type="email" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>

                  <div>
                    <label htmlFor="tel" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Phone Number:
                    </label>
                    <input type="tel" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>

                  <div>
                    <label htmlFor="language" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                      Language:
                    </label>
                    <input type="text" placeholder="" className="bg-eerieDark py-1 px-4 rounded w-full text-white" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-20 rounded-2xl">
                <button type="submit" disabled={eventId !== null} className="text-white bg-gradient-to-r hover:text-hover border border-white hover:border-hover px-10 py-2 rounded-xl">
                  Upload Event Data
                </button>
              </div>
            </div>
          </form>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4 mt-20 text-white">About The Event Ticket</h2>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-20 border-t-[2px] border-t-[#ffffff]"></div>

            <div>
              <div className="inline-grid">
                <div className="gap-5">
                  <label htmlFor="sbt" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                    Ticket Address (Soulbound Token)
                  </label>
                  <div className="flex gap-5">
                    <input type="text" placeholder="" className="bg-eerieDark rounded text-white w-[1000px]" />
                    <Button
                      className="text-white bg-gradient-to-r hover:text-hover border border-white hover:border-hover px-3 rounded-xl"
                      href="https://sepolia.etherscan.io/address/0x417e845982933d37f1b473b5a03f660f9e32466b#writeContract" target="_blank"
                    >
                      Create
                    </Button>
                  </div>
                </div>
                <div className="gap-5 mt-5">
                  <label htmlFor="bonding" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                    Ticket Address (Bonding Curve)
                  </label>
                  {curves.map((curve, index) => (
                    <div key={index} className="flex gap-5 mb-5">
                      <input
                        type="text"
                        value={curve}
                        onChange={(e) => updateCurve(index, e.target.value)}
                        className="bg-eerieDark rounded text-white w-[1000px]"
                      />
                      <Button className="text-white bg-gradient-to-r hover:text-hover border border-white hover:border-hover px-3 rounded-xl" href="https://mint.club/create" target="_blank">Create</Button>
                      {curves.length > 1 && (
                        <h3 onClick={() => removeCurve(index)} className="px-3 py-2 rounded-xl text-white bg-red-500 hover:bg-red-600">
                          Delete
                        </h3>
                      )}
                    </div>
                  ))}
                  <h3 onClick={addCurve} className="mt-4 text-white hover:text-hover underline">Add another bonding curve</h3>
                </div>
              </div>
            </div>
            <div className="text-center mt-20 rounded-2xl">
              <button onClick={handleFinalSubmit} className="text-white bg-gradient-to-r hover:text-hover border border-white hover:border-hover px-10 py-2 rounded-xl">
                Create Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
