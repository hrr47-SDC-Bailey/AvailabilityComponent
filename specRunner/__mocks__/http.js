const response = {
  data: [
    {
      id: 1,
      name: 'Standard Twin Private Ensuite',
      description: ' Tongue picanha sirloin beef ribs filet mignon jerky turducken',
      type: 'private',
      quantity: 2,
      hostel_id: 1,
    },
    {
      id: 2,
      name: 'Basic Double Bed Private Ensuite',
      description: ' Jerky chicken chislic, meatloaf drumstick shank doner rump kielbasa pig filet mignon boudin ham hock turducken',
      type: 'private',
      quantity: 2,
      hostel_id: 1,
    },
    {
      id: 3,
      name: 'Deluxe Double Bed Private Ensuite',
      description: ' Tongue picanha sirloin beef ribs filet mignon jerky turducken',
      type: 'private',
      quantity: 2,
      hostel_id: 1,
    },
    {
      id: 4,
      name: 'Standard 3 Bed Family Room Ensuite',
      description: 'Bacon ipsum dolor amet drumstick turkey pastrami chicken, brisket filet mignon short loin',
      type: 'private',
      quantity: 2,
      hostel_id: 1,
    },
    {
      id: 5,
      name: 'Standard 6 Bed Female Dorm',
      description: ' Tongue picanha sirloin beef ribs filet mignon jerky turducken',
      type: 'dorm',
      quantity: 2,
      hostel_id: 1,
    },
    {
      id: 6,
      name: 'Superior 2 Bed Female Dorm',
      description: ' Rump beef chicken, fatback boudin buffalo drumstick landjaeger turkey venison meatloaf strip steak ham hock kevin leberkas',
      type: 'dorm',
      quantity: 2,
      hostel_id: 1,
    },
    {
      id: 7,
      name: 'Standard 8 Bed Male Dorm',
      description: ' Jowl hamburger pork chop fatback, meatball landjaeger filet mignon chuck t-bone',
      type: 'dorm',
      quantity: 2,
      hostel_id: 1,
    },
  ],
};

exports.getRooms = () => Promise.resolve(response);
