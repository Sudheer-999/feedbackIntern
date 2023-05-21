import {useState} from 'react'

import './index.css'

const FeedbackApp = () => {
  const [subject, setSubject] = useState('')
  const [query, setQuery] = useState('')
  const [contact, setContact] = useState('')
  const [critical, setCritical] = useState('')

  const handleSend = () => {
    setSubject('')
    setQuery('')
    setContact('')
    setCritical('')
  }

  return (
    <div className="main-container">
      <div className="top-section">
        <h1 className="header-text">Feedback Form</h1>
        <p className="head2">
          Responses to this email will be sent to hi@abc.com
        </p>
        <p className="top-bottom-text">
          [`&quot;`hi@abc.com`&quot;` is customers mail id.]
        </p>
      </div>
      <div className="bottom-section">
        <p className="label-text" htmlFor="subject">
          Subject
        </p>
        <input
          type="text"
          className="subject-input"
          id="subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <p className="label-text" htmlFor="query">
          Mention your Query Here
        </p>
        <textarea
          className="query-input"
          id="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <p className="label-text">Attachments</p>
        <div className="upload-btn-section">
          <p className="choose">Choose File</p>
          <span className="note">*Images should be in JPG format.</span>
        </div>
        <div className="contact-section">
          <div className="contact">
            <p className="label-text">Contact Number</p>
            <div className="contact-container">
              <div className="country-code">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684647651/png-transparent-flag-of-india-flag-of-india-national-flag-flag-of-the-united-states-indian-flag-thumbnail-removebg-preview_xnkqcs.png"
                  alt="india flag"
                  className="india-flag"
                />
                <span>+91</span>
              </div>
              <input
                type="tel"
                className="tel-input"
                value={contact}
                onChange={e => setContact(e.target.value)}
              />
            </div>
          </div>
          <div className="contact">
            <p className="label-text">How critical is your request?</p>
            <select
              className="select-input"
              value={critical}
              onChange={e => setCritical(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
        <div className="buttons-con">
          <button type="button" className="send-btn" onClick={handleSend}>
            Send
          </button>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
        <div className="footer">
          <h1 className="foot-text">AIVision Helpline : +91-9924300511</h1>
          <p className="foot-time">Mon - Fri 10:00AM - 7:00PM</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackApp
