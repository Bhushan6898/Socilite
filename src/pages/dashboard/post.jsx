import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert, InputGroup, FormControl } from 'react-bootstrap';

// CSS styling
import './index.css'; // Import the CSS file

const PostPage = () => {
  const [files, setFiles] = useState([]); // To store multiple files
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [music, setMusic] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1); // Track the current step in the flow

  // Reference to the file input element
  const fileInputRef = useRef(null);

  // Trigger the file input on page load using useEffect
  useEffect(() => {
    // Automatically open the file picker dialog when the page loads
    fileInputRef.current?.click();
  }, []);

  // Handle file selection (multiple files allowed)
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
    setFiles(selectedFiles);
    setStep(2); // Move to the next step after files are selected
  };

  // Handle input changes
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleMusicChange = (e) => setMusic(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (files.length === 0 || !location || !music) {
      setError('Please fill out all fields and select at least one image or video.');
      return;
    }

    setSuccess(true);
    setError('');
    // You can add your submit logic here, for example, sending the data to the backend.
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center">Create a New Post</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Post created successfully!</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Step 1: File Input Section */}
            {step === 1 && (
              <Form.Group controlId="postFile" className="mb-3">
                <Form.Label>Select Photo or Video</Form.Label>
                <Form.Control
                  ref={fileInputRef} // Attach the ref to the file input
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleFileChange}
                  multiple // Allows multiple files
                  hidden // Hide the default file input
                  required
                />
                <div className="text-center mt-3">
                  <Button onClick={() => fileInputRef.current?.click()}>Select Files</Button>
                </div>
              </Form.Group>
            )}

            {/* Step 2: Location Input */}
            {step === 2 && files.length > 0 && (
              <Form.Group controlId="postLocation" className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={handleLocationChange}
                  required
                />
                <div className="text-center mt-3">
                  <Button onClick={() => setStep(3)}>Next</Button>
                </div>
              </Form.Group>
            )}

            {/* Step 3: Music Selection */}
            {step === 3 && location && (
              <Form.Group controlId="postMusic" className="mb-3">
                <Form.Label>Select Music</Form.Label>
                <InputGroup>
                  <FormControl
                    as="select"
                    value={music}
                    onChange={handleMusicChange}
                    required
                  >
                    <option value="">Choose Music</option>
                    <option value="music1">Music 1</option>
                    <option value="music2">Music 2</option>
                    <option value="music3">Music 3</option>
                    {/* Add more music options here */}
                  </FormControl>
                </InputGroup>
                <div className="text-center mt-3">
                  <Button onClick={() => setStep(4)}>Next</Button>
                </div>
              </Form.Group>
            )}

            {/* Step 4: Create Post Button */}
            {step === 4 && music && (
              <Button variant="primary" type="submit" className="w-100">
                Create Post
              </Button>
            )}
          </Form>

          {/* Preview of selected files */}
          {files.length > 0 && (
            <div className="mt-4">
              <strong>Selected Files:</strong>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
              <div className="mt-2">
                {files.map((file, index) => (
                  <div key={index}>
                    {file.type.startsWith('image/') ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        width="100%"
                        className="mb-3"
                      />
                    ) : file.type.startsWith('video/') ? (
                      <video width="100%" controls>
                        <source src={URL.createObjectURL(file)} type={file.type} />
                        Your browser does not support the video tag.
                      </video>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;
