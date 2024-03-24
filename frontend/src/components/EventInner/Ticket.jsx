import React from "react";

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
        <div className="font-montserrat text-sm mt-auto">Ticket Left</div>
        <span className="font-anton text-center text-5xl mb-auto">{ticketsLeft}</span>
      </div>

      <div className={`${ticketLeftBgColor2} px-[30px] text-white p-8 flex justify-between items-center rounded mb-4 shadow-md gap-10 rounded-r-3xl`}>
        <div>
            <div className="font-montserrat text-sm mt-auto">Ticket Type</div>
            <span className="font-anton text-center text-4xl mb-auto">{ticketType}</span>
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
            className={`${claimButtonTextColor} ${claimButtonBgColor} text-white bg-gradient-to-r hover:text-hover border border-white hover:border-hover px-6 py-2 rounded-xl`}
          >
            {claimButtonText}
          </button>
        </div>
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
        {bc_tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Ticket;
