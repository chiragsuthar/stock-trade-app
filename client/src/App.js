
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [stockData, setStockData] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
      const data = await response.json();
      if (data && data.data && data.data.length > 0) {
        setStockData(data.data[0]);
        setNoResults(false);
      } else {
        setStockData(null);
        setNoResults(true);
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="app-input"
              value={date}
              onChange={handleChange}
              data-testid="app-input"
              placeholder="Enter date (e.g., 5-January-2000)"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleSubmit} id="submit-button" data-testid="submit-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {stockData && (
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">Open: {stockData.open}</li>
              <li className="list-group-item">Close: {stockData.close}</li>
              <li className="list-group-item">High: {stockData.high}</li>
              <li className="list-group-item">Low: {stockData.low}</li>
            </ul>
          </div>
        </div>
      )}
      
      {noResults && (
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <div className="alert alert-danger" role="alert" id="no-result" data-testid="no-result">No Results Found</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
