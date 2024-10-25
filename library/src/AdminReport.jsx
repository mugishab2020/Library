import React, { useState } from 'react';
import './AdminReport.css'; // For custom styling
import axios from 'axios';

const AdminReport = () => {
  const [selectedReportType, setSelectedReportType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [reportData, setReportData] = useState([]); // Empty array to always show table
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleReportTypeChange = (e) => {
    setSelectedReportType(e.target.value);
    setInputValue(''); // Reset input field when report type changes
    setReportData([]); // Reset report data when changing report type
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let response;
      // Fetch data depending on selected report type
      if (selectedReportType === 'date') {
        response = await axios.get(`/api/reports/date/${inputValue}`);
      } else if (selectedReportType === 'regNumber') {
        response = await axios.get(`/api/reports/regnumber/${inputValue}`);
      } else if (selectedReportType === 'school') {
        response = await axios.get(`/api/reports/school`);
      }

      setReportData(response.data); // Assuming response.data contains the report info
    } catch (err) {
      setError('Failed to fetch report data');
      setReportData([]); // Ensure the table still shows without data
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Your top section with success styles */}
      <div style={{ marginBottom: 30 }}>
        <div className="success__top">
          <h1 className="success__title">Admin reports</h1>
          <div className="success__style-square success__style-square-big" />
          <div className="success__style-square success__style-square-small" />
          <div className="success__style-square-scaled">
            <div className="success__style-square success__style-square-big" />
            <div className="success__style-square success__style-square-small" />
          </div>
          <div className="success__style-square-one-two">
            <div className="success__style-square success__style-square-one" />
            <div className="success__style-square success__style-square-two" />
          </div>
        </div>
        <div className="success__style-square success__style-square-three" />
      </div>

      {/* Admin Report form section */}
      <div className="admin-report-container">
        <h1>Admin Report</h1>

        <form onSubmit={handleSubmit} className="report-form">
          <div className="input-group">
            <label htmlFor="reportType">Select Report Type:</label>
            <select
              id="reportType"
              value={selectedReportType}
              onChange={handleReportTypeChange}
              required
            >
              <option value="">Select Report Type</option>
              <option value="date">By Date</option>
              <option value="regNumber">By Registration Number</option>
              <option value="school">By School Departments</option>
            </select>
          </div>

          {/* Conditionally render the input based on selected report type */}
          {selectedReportType === 'date' && (
            <div className="input-group">
              <label htmlFor="reportDate">Enter Date:</label>
              <input
                type="date"
                id="reportDate"
                value={inputValue}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {selectedReportType === 'regNumber' && (
            <div className="input-group">
              <label htmlFor="regNumber">Enter Registration Number:</label>
              <input
                type="text"
                id="regNumber"
                placeholder="Enter Reg Number"
                value={inputValue}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {selectedReportType === 'school' && (
            <div className="input-group">
              <label htmlFor="school">Enter School Name:</label>
              <input
                type="text"
                id="school"
                placeholder="Enter school name"
                value={inputValue}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Fetching...' : 'Fetch Report'}
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>

        {/* Table section */}
        <div className="report-table">
          <table>
            <thead>
              <tr>
                {selectedReportType === 'date' && (
                  <>
                    <th>Date</th>
                    <th>Registration Number</th>
                    <th>Name</th>
                    <th>Department</th>
                  </>
                )}
                {selectedReportType === 'regNumber' && (
                  <>
                    <th>Registration Number</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Entry Date</th>
                  </>
                )}
                {selectedReportType === 'school' && (
                  <>
                    <th>School</th>
                    <th>Department</th>
                    <th>Students Entered</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {/* If no data, display the table structure with placeholder */}
              {reportData.length === 0 ? (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              ) : (
                // Map through the data to populate the table rows
                reportData.map((item, index) => (
                  <tr key={index}>
                    {selectedReportType === 'date' && (
                      <>
                        <td>{item.date}</td>
                        <td>{item.regNumber}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                      </>
                    )}
                    {selectedReportType === 'regNumber' && (
                      <>
                        <td>{item.regNumber}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.entryDate}</td>
                      </>
                    )}
                    {selectedReportType === 'school' && (
                      <>
                        <td>{item.school}</td>
                        <td>{item.department}</td>
                        <td>{item.studentsEntered}</td>
                      </>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} UR Library. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AdminReport;
