'use client';

<<<<<<< Updated upstream
import { Contact } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {contact.description}
      </Card.Text>
    </Card.Body>
=======
import { Stuff } from '@prisma/client';
import Link from 'next/link';
import { Card, Image } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ name, quantity, condition, id }: Stuff) => (
  <Card>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{condition}</td>
    <td>
      <Link href={`/edit/${id}`}>Edit</Link>
    </td>
>>>>>>> Stashed changes
  </Card>
);

export default ContactCard;
