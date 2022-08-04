import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = []
  const coinTimestampRaw = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price)
    coinTimestampRaw.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleTimeString()
    )
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const data = {
    // X-Axis
    labels: coinTimestampRaw,
    // Y-Axis
    datasets: [
      {
        label: `Price in USD ($)`,
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  }

  const options = { scales: { y: { ticks: { beginAtZero: true } } } }

  return (
    <>
      <Row className='chart-header'>
        <Typography.Title level={2} className='chart-title'>
          {coinName} Price Chart{' '}
        </Typography.Title>
        <Col className='price-container'>
          <Typography.Title level={5} className='price-change'>
            Change: {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className='current-price'>
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
