import React, { useState } from "react";
import styles from "../style";
import { Tabs } from "flowbite-react";
import { Banner, Info, SeatPlan, Ticket } from "../components/EventInner";

const EventDetailPage = () => {
    const [activeTab, setActiveTab] = useState('Information');

    return (
        <div className={`bg-black ${styles.flexStart} ${styles.padding}`}>
            <div className={`${styles.boxWidth}`}>
                <div>
                    <Banner />
                </div>

                <div>
                    <Tabs aria-label="Event tabs" id="event-tabs" className="text-white">
                        <Tabs.Item
                            active={activeTab === 'Informations'}
                            onClick={() => setActiveTab('Informations')}
                            title="Informations"
                            className={activeTab === 'Informations' ? "border-b-2 border-blue-600 text-blue-600" : ""}
                        >
                            <Info />
                        </Tabs.Item>

                        <Tabs.Item
                            active={activeTab === 'Seat Plan'}
                            onClick={() => setActiveTab('Seat Plan')}
                            title="Seat Plan"
                            className={activeTab === 'Sear Plan' ? "border-b-2 border-blue-600 text-blue-600" : ""}
                        >
                            <SeatPlan />
                        </Tabs.Item>
                        
                        <Tabs.Item
                            active={activeTab === 'Event Tickets'}
                            onClick={() => setActiveTab('Event Tickets')}
                            title="Event Tickets"
                            className={activeTab === 'Event Tickets' ? "border-b-2 border-blue-600 text-blue-600" : ""}
                        >
                            <Ticket />
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;