'use client';

import { Note } from '@prisma/client';
import { ListGroup } from 'react-bootstrap';

/* Renders a Note. See ContactCard.tsx. */
const NoteItem = ({ note }: { note: Note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
  </ListGroup.Item>
);

export default NoteItem;
