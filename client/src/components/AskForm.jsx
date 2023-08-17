import './AskForm.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AskFormHeader() {
  return (
    <div className="askform_header_container">
      <div style={{ width: '75%' }} className="askform_title">
        <h4 style={{ fontWeight: 'bold' }}>Ask a public quextion</h4>
      </div>
    </div>
  );
}
function AskFormBody() {
  return (
    <div className="askform_body_container">
      <div className="askform_body">
        <div className="header_card_container">
          <Card>
            <Card.Body>
              <Card.Title className="mb-2 fs-title fw-normal mb8">
                Writing a good question
              </Card.Title>
              <Card.Text className="mb-2 text-muted sm">
                You’re ready to{' '}
                <Card.Link href="https://stackoverflow.com/help/how-to-ask">
                  ask
                </Card.Link>{' '}
                a
                <Card.Link href="https://stackoverflow.com/help/on-topic">
                  programming-related question
                </Card.Link>{' '}
                and this form will help guide you through the process.
                <br />
                Looking to ask a non-programming question? See
                <Card.Link href="https://stackexchange.com/sites#technology">
                  the topics here
                </Card.Link>
                to find a relevant site.
              </Card.Text>
              <Card.Text>
                Steps
                <br />
                - Summarize your problem in a one-line title.
                <br />
                - Describe your problem in more detail.
                <br />
                - Describe what you tried and what you expected to happen.
                <br />
                - Add “tags” which help surface your question to members of the
                community.
                <br />- Review your question and post it to the site.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="ask-form">
          <Form>
            <Card className="mt-3">
              <Form.Group className="mb-3 mt-3" style={{ width: '90%' }}>
                <Form.Label> Title</Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Be specific and imagine you’re asking a question to another
                  person.
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="title"
                  className="mt-2"
                  style={{ width: '90%' }}
                />
                {/* 폼 유효성 검사.. 구현 가능하면 하기! */}
                {/* <Button variant="primary">Next</Button> */}
              </Form.Group>
            </Card>

            <Card className="mt-3">
              <Form.Group className="mb-3 mt-3" style={{ width: '90%' }}>
                <Form.Label>What are the details of your problem?</Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Introduce the problem and expend on what you put in the title.
                </Form.Text>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="introduce"
                  className="mt-2"
                  style={{ width: '90%' }}
                />
              </Form.Group>
            </Card>

            <Card className="mt-3">
              <Form.Group
                className="mb-3  mt-3"
                style={{ width: '90%' }}
                controlId="formBasicPassword"
              >
                <Form.Label>Tags</Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Add up to 5 tags to describe what your question is about.
                  Start select to see suggestions.
                </Form.Text>
                <Form.Select
                  aria-label="Default select example"
                  className="mt-2"
                  style={{ width: '50%' }}
                >
                  <option>Select tag</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Card>
            {/* 동의..? 느낌의 checkbox가 있는데... */}
            {/* <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="ask-tip-container" style={{ width: '15%' }}>
        <TipCards />
      </div>
    </div>
  );
}

function TipCards() {
  const tipContents = [
    {
      title: 'Writing a good title',
      text: 'Your title should summarize the problem. You might find that you have a better idea of your title after writing out the rest of the question.',
    },
    {
      title: 'Introduce the problem',
      text: 'Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.',
    },
  ];

  const tipList = tipContents.map((item, index) => {
    return (
      <Card border="primary" key={index} style={{ width: '100%' }}>
        <Card.Header>writing tip {index + 1}</Card.Header>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return <div>{tipList}</div>;
}

function AskForm() {
  return (
    <div className="askform_container">
      <AskFormHeader />
      <AskFormBody />
    </div>
  );
}

export default AskForm;
