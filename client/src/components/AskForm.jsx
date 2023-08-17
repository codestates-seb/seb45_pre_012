import './AskForm.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AskFormHeader() {
  return (
    <div className="askform_header_container">
      <div style={{ width: '70%' }} className="askform_title">
        <h4 style={{ fontWeight: 'bold' }}>Ask a public quextion</h4>
      </div>
      {/* <div className="header_card_container" style={{ width: '70%' }}>
        <Card style={{ width: '70%' }}>
          <Card.Body>
            <Card.Title>Writing a good question</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
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
            </Card.Subtitle>
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
      </div> */}
    </div>
  );
}

function AskFormBody() {
  return (
    <div>
      <div className="header_card_container" style={{ width: '70%' }}>
        <Card style={{ width: '70%' }}>
          <Card.Body>
            <Card.Title>Writing a good question</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
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
            </Card.Subtitle>
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
      <div className="askform_body_container" style={{ width: '70%' }}>
        <Form>
          <Card className="mt-3" style={{ width: '70%' }}>
            <Form.Group className="mb-3">
              <Form.Label> Title</Form.Label>
              <br />
              <Form.Text className="text-muted">
                Be specific and imagine you’re asking a question to another
                person.
              </Form.Text>
              <Form.Control type="text" placeholder="title" />
            </Form.Group>
          </Card>

          <Card className="mt-3" style={{ width: '70%' }}>
            <Form.Group className="mb-3">
              <Form.Label>What are the details of your problem?</Form.Label>
              <br />
              <Form.Text className="text-muted">
                Introduce the problem and expend on what you put in the title.
              </Form.Text>
              <Form.Control type="text" placeholder="introduce" />
            </Form.Group>
          </Card>

          <Card className="mt-3" style={{ width: '70%' }}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tags</Form.Label>
              <br />
              <Form.Text className="text-muted">
                Add up to 5 tags to describe what your question is about. Start
                select to see suggestions.
              </Form.Text>
              <Form.Select aria-label="Default select example">
                <option>Select teb menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Card>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
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
