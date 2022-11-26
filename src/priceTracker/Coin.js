import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Container, Row, Col } from "reactstrap";

const Coin = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
      });
  }, []);

  return (
    <div className="Coin">
      <Container>
        <Row>
          <Col md="12">
            <Table className="mt-5" dark>
              <thead>
                <tr>
                  <th>Crypto Name</th>
                  <th>Current price</th>
                  <th>Market cap change</th>
                  <th>Market cap rank</th>
                </tr>
              </thead>
              {coins.map((coin) => {
                return (
                  <tbody key={coin.id}>
                    <tr>
                      {" "}
                      <Link to={coin.id}>
                        <td>
                          <img
                            className="cryptoImage"
                            src={coin.image}
                            alt="crypto image"
                          />
                          {coin.name}
                        </td>
                      </Link>
                      <td>${coin.current_price}</td>
                      {coin.market_cap_change_percentage_24h < 0 ? (
                        <td className="red">
                          {coin.market_cap_change_percentage_24h.toFixed(2)}%
                        </td>
                      ) : (
                        <td className="green">
                          {coin.market_cap_change_percentage_24h.toFixed(2)}%
                        </td>
                      )}
                      <td>{coin.market_cap_rank}</td>{" "}
                    </tr>
                  </tbody>
                );
              })}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coin;
