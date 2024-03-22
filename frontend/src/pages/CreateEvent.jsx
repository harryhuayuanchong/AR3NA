import React from "react";
import styles from "../style";

import { Button, Modal, Label, TextInput } from 'flowbite-react';
import { useState, useRef } from 'react';

const CreateEvent = () => {
  const [openModal, setOpenModal] = useState(false);
  const eventName = useRef(null); // 這邊後續可以去監聽前面創建的eventName，將null修改成監聽結果

  return (
    <div className={`bg-black min-h-screen ${styles.flexStart} ${styles.padding}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="bg-black p-8 rounded-md">
          <h1 className="text-3xl font-bold mb-6 text-white">Create New Event</h1>
          <p className="mb-8 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold pt-5 mb-4 text-white">About The Event</h2>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#ffffff]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="event" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                  Upcoming Event Name:
                </label>
                <input type="text" placeholder="" className="input bg-gray-600 text-white placeholder-gray-400 border border-gray-600 rounded w-full" />
              </div>
              
              <div>
                <label htmlFor="genre" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                  Genre:
                </label>
                <input type="text" placeholder="" className="input bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded w-full" />
              </div>
              
              <div className="flex gap-4">
                <label htmlFor="date" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                  Date of Next Event:
                </label>
                <input type="date" className="input bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded w-full" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4 text-white">About The Venue</h2>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#ffffff]"></div>

            <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <label htmlFor="location" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Event Location:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>

                    <div>
                      <label htmlFor="venue" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Venue Name:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>
                    
                    <div>
                      <label htmlFor="capacity" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Venue Capacity:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>

                    <div>
                      <label htmlFor="description" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Description:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>
                </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4 text-white">About Your Business</h2>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#ffffff]"></div>
            
            <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <label htmlFor="event" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Upcoming Event Name:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>

                    <div>
                      <label htmlFor="website" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Website:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Email:
                      </label>
                      <input type="email" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>

                    <div>
                      <label htmlFor="tel" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Phone Number:
                      </label>
                      <input type="tel" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>

                    <div>
                      <label htmlFor="language" className="pb-1.5 block text-sm font-medium leading-6 text-white">
                        Language:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                    </div>
                </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4 text-white">About The Event Ticket</h2>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#ffffff]"></div>
          
            <div>
                <div className="inline-grid">
                    <div className="inline-flex gap-5">
                      <label htmlFor="bonding" className="pb-1.5 block text-sm font-medium leading-10 text-white w-[200px]">
                        Bonding Curve:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                      {/* 這邊要想辦法先幫忙用戶連接Wallet */}
                      <Button href="https://mint.club/create" target="_blank">Create Token</Button>
                    </div>

                    <div className="inline-flex gap-5 mt-5">
                      <label htmlFor="sbt" className="pb-1.5 block text-sm font-medium leading-10 text-white w-[200px]">
                        SBT:
                      </label>
                      <input type="text" placeholder="" className="bg-gray-800 py-3 px-4 rounded w-full" />
                      <Button onClick={() => setOpenModal(true)}>Create SBT</Button>
                      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={eventName}>
                        <Modal.Header />
                        <Modal.Body>
                          <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create SBT Token</h3>
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="text" value="Event Name" />
                              </div>
                              <TextInput id="text" ref={eventName} placeholder="ERC720 Token" required />
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="address" value="Address" />
                              </div>
                              <TextInput id="address" type="address" required />
                            </div>
                            <div className="w-full">
                              <Button>Create SBT</Button>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={() => setOpenModal(false)}>I accept</Button>
                          <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
