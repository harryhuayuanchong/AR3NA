import React, { useEffect, useState } from "react";
import axios from "axios";

const TicketCard = ({ ticket }) => {
  const { ticketsLeft, ticketType, date, price, isSoldOut } = ticket;
  const ticketLeftBgColor1 = ticketsLeft > 0 ? 'bg-ticketLeft' : 'bg-ticketEmpty';
  const ticketLeftTextColor1 = ticketsLeft > 0 ? 'text-dimWhite' : 'text-ticketEmptyText';
  const ticketLeftBgColor2 = ticketsLeft > 0 ? 'bg-listColorEmpty' : 'bg-listColor';
  const claimButtonBgColor = isSoldOut ? 'bg-soldout' : '';
  const claimButtonTextColor = isSoldOut ? 'text-soldoutText' : 'text-white';
  const claimButtonText = isSoldOut ? 'Sold Out' : 'Claim Now';
  
  return (
    <div className="flex">
      <div className={`${ticketLeftBgColor1} ${ticketLeftTextColor1} px-[16px] text-xl font-bold grid justify-between items-center mb-4 shadow-md rounded-l-3xl`}>
        <div className="font-montserrat text-sm mt-auto">Ticket Lefts</div>
        <span className="font-anton text-center text-5xl mb-auto">{ticketsLeft}</span>
      </div>

      <div className={`${ticketLeftBgColor2} px-[30px] text-white p-8 flex justify-between items-center rounded mb-4 shadow-md gap-10 rounded-r-3xl`}>
        <div>
            {/* <div className="font-montserrat text-sm mt-auto">Ticket Type</div> */}
            <span className="font-anton text-center text-4xl mb-auto">{ticket.ticket_symbol}</span>
        </div>

        <div>
            <div className="font-montserrat text-sm mt-auto">Date & Time</div>
            <span className="font-anton text-center text-2xl mb-auto">{date}</span>
        </div>

        <div>
            <div className="font-montserrat text-sm mt-auto">Price</div>
            <span className="font-anton text-center text-2xl mb-auto">{price}</span>
        </div>
        
        <div className={`${claimButtonBgColor} font-montserrat rounded-xl`}>
          <button 
            type="submit" 
            disabled={isSoldOut}
            onClick={() => {
              if (!isSoldOut && ticket.mint_club_site) {
                window.location.href = ticket.mint_club_site; // 使用 window.location.href 进行跳转
              }
            }}
            className={`${claimButtonTextColor} ${claimButtonBgColor} text-white bg-gradient-to-r hover:text-hover border border-white hover:border-hover px-6 py-2 rounded-xl`}
          >
            {claimButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Ticket = ({ eventId }) => {
  console.log("ticket:", eventId)
  const [ticketsBc, setTicketsBc] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/events/${eventId}/tickets/`);
        setTicketsBc(response.data.tickets_bc);
        console.log('response.data.tickets_bc', response.data.tickets_bc)
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    if (eventId) {
      fetchTickets();
    }
  }, [eventId]);
  
  const sbt_tickets = [
    { ticketsLeft: 48, ticketType: 'SBT TICKET 1', date: '2024/04/07 (Sun.)', price: '156', isSoldOut: false },
    { ticketsLeft: 88, ticketType: 'SBT TICKET 2', date: '2024/04/07 (Sun.)', price: '88', isSoldOut: false },
    { ticketsLeft: 0, ticketType: 'SBT TICKET 3', date: '2024/04/07 (Sun.)', price: '208', isSoldOut: true },
    { ticketsLeft: 32, ticketType: 'SBT TICKET 4', date: '2024/04/07 (Sun.)', price: '100', isSoldOut: false },
  ];

  const bc_tickets = [
    { ticketsLeft: 48, ticketType: 'BC TICKET 1', date: '2024/04/07 (Sun.)', price: '156', isSoldOut: false },
    { ticketsLeft: 88, ticketType: 'BC TICKET 2', date: '2024/04/07 (Sun.)', price: '88', isSoldOut: false },
  ]

  return (
    <div className="mt-2">
      <h2 className="text-3xl font-bold text-white my-8 font-anton">FOR SBT CLAIM</h2>
      <div>
        {sbt_tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-white my-8 font-anton">FOR BONDING CURVE CLAIM</h2>
      <div>
        {ticketsBc.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
        {/* {bc_tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))} */}
      </div>
    </div>
  );
};

export default Ticket;
