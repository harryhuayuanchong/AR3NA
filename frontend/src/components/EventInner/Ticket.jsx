import React from "react";

const TicketCard = ({ ticket }) => {
  const { ticketsLeft, ticketType, date, price, isSoldOut } = ticket;

  const ticketLeftBgColor = ticketsLeft > 0 ? 'bg-ticketLeft' : 'bg-Empty';
  const claimButtonBgColor = isSoldOut ? 'bg-soldout cursor-default' : 'bg-claim hover:bg-orange-500';

  return (
    <div className="bg-listColor text-white p-8 flex justify-between items-center rounded mb-4 shadow-md">
      <div className={`${ticketLeftBgColor} text-xl font-bold`}>
        <div>Ticket Left:</div>
        <span className="">{ticketsLeft}</span>
      </div>

      <div>

      </div>
    </div>
  );

  // return (
  //   <div className="bg-gray-800 text-white p-4 flex items-center justify-between rounded mb-4">
  //     <div className="flex items-center">
  //       <div className={`rounded-full p-4 mr-4 ${ticketsLeft > 0 ? 'bg-green-400' : 'bg-red-400'}`}>
  //         <span className="text-2xl font-bold">{ticketsLeft}</span>
  //       </div>
  //       <div>
  //         <h3 className="text-xl font-bold">{ticketType}</h3>
  //         <p className="text-gray-400">{date}</p>
  //       </div>
  //     </div>
  //     <div>
  //       <div className="text-right">
  //         <span className="text-2xl font-bold">{price}</span>
  //         <span className="text-xl"> USDC</span>
  //       </div>
  //       <button className={`mt-2 px-6 py-2 rounded-full ${isSoldOut ? 'bg-gray-500' : 'bg-orange-400 hover:bg-orange-500'} focus:outline-none`}>
  //         {isSoldOut ? 'Sold Out' : 'Claim Now'}
  //       </button>
  //     </div>
  //   </div>
  // );
};

const Ticket = () => {
  const sbt_tickets = [
    { ticketsLeft: 48, ticketType: 'SBT TICKET 1', date: '2024/04/07 (Sun.)', price: '156', isSoldOut: false },
    { ticketsLeft: 88, ticketType: 'SBT TICKET 2', date: '2024/04/07 (Sun.)', price: '88', isSoldOut: false },
    { ticketsLeft: 0, ticketType: 'SBT TICKET 3', date: '2024/04/07 (Sun.)', price: '208', isSoldOut: true },
    { ticketsLeft: 32, ticketType: 'SBT TICKET 4', date: '2024/04/07 (Sun.)', price: '100', isSoldOut: false },
  ];

  const bc_tickets = [
    { ticketsLeft: 48, ticketType: 'SBT TICKET 1', date: '2024/04/07 (Sun.)', price: '156', isSoldOut: false },
    { ticketsLeft: 88, ticketType: 'SBT TICKET 2', date: '2024/04/07 (Sun.)', price: '88', isSoldOut: false },
  ]

  return (
    <div className="mt-2">
      <h2 className="text-3xl font-bold text-white my-8 underline-offset-4">FOR SBT CLAIM</h2>
      <div>
        {sbt_tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-white my-8 underline-offset-4">FOR BONDING CURVE CLAIM</h2>
      <div>
        {bc_tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Ticket;
