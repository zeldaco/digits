import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { Contact, Note } from '@prisma/client';
import { adminProtectedPage } from '@/lib/page-protection';
import ContactCardAdmin from '@/components/ContactCardAdmin';
import authOptions from '@/lib/authOptions';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const contacts: (Contact & { notes: Note[] })[] = await prisma.contact.findMany({
    include: {
      notes: true,
    },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <Container>
              <h1>List Contacts (Admin)</h1>
              <Row xs={1} md={2} lg={3} className="g-4">
                {contacts.map((contact) => (
                  <Col key={contact.firstName + contact.lastName}>
                    <ContactCardAdmin contact={contact} notes={contact.notes || []} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
