import React from 'react'
import DCPredictionChartPanel from 'components/organisms/PredictionChartPanel'
import DCStackedNormalizedHorizontalBarChart from 'components/atoms/charts/StackedNormalizedHorizontalBarChart'
import DCDistrictTurnoutChart from 'components/atoms/charts/DistrictTurnoutChart'

export default { title: 'Charts' }

const CampCompareChartData = {
  columns: ['name', '建制', '其他', '民主'],
  data: [
    {
      name: '灣仔',
      建制: 11,
      民主: 1,
      其他: 1,
      total: 13,
    },
    {
      name: '油尖旺',
      建制: 16,
      民主: 3,
      其他: 0,
      total: 19,
    },
    {
      name: '九龍城',
      建制: 20,
      民主: 4,
      其他: 0,
      total: 24,
    },
    {
      name: '離島',
      建制: 8,
      民主: 2,
      其他: 0,
      total: 10,
    },
    {
      name: '元朗',
      建制: 27,
      民主: 3,
      其他: 5,
      total: 35,
    },
    {
      name: '觀塘',
      建制: 28,
      民主: 5,
      其他: 4,
      total: 37,
    },
    {
      name: '中西區',
      建制: 11,
      民主: 4,
      其他: 0,
      total: 15,
    },
    {
      name: '荃灣',
      建制: 13,
      民主: 4,
      其他: 1,
      total: 18,
    },
    {
      name: '屯門',
      建制: 20,
      民主: 8,
      其他: 1,
      total: 29,
    },
    {
      name: '北區',
      建制: 12,
      民主: 4,
      其他: 2,
      total: 18,
    },
    {
      name: '東區',
      建制: 23,
      民主: 8,
      其他: 4,
      total: 35,
    },
    {
      name: '大埔',
      建制: 12,
      民主: 6,
      其他: 1,
      total: 19,
    },
    {
      name: '南區',
      建制: 10,
      民主: 4,
      其他: 3,
      total: 17,
    },
    {
      name: '葵青',
      建制: 17,
      民主: 9,
      其他: 3,
      total: 29,
    },
    {
      name: '黃大仙',
      建制: 13,
      民主: 7,
      其他: 5,
      total: 25,
    },
    {
      name: '西貢',
      建制: 14,
      民主: 7,
      其他: 6,
      total: 27,
    },
    {
      name: '深水埗',
      建制: 11,
      民主: 11,
      其他: 1,
      total: 23,
    },
    {
      name: '沙田',
      建制: 17,
      民主: 17,
      其他: 4,
      total: 38,
    },
  ],
}

export const StackedNormalizedHorizontalBarChart = props => {
  return (
    <DCStackedNormalizedHorizontalBarChart
      data={CampCompareChartData}
    ></DCStackedNormalizedHorizontalBarChart>
  )
}

export const PredictionChartPanel = props => {
  const [settings, setSettings] = React.useState({
    config: {
      auto_won_add_components: false,
      reference_last_election: true,
    },
    camp_rate: [0, 0, 0],
    vote_rate: [0, 0, 0],
  })
  return (
    <DCPredictionChartPanel
      settings={settings}
      setSettings={setSettings}
    ></DCPredictionChartPanel>
  )
}

export const DistrictTurnoutChart = props => {
  return (
    <DCDistrictTurnoutChart
      data={{
        constituency: [
          0.02513136851724926,
          0.028558373315055976,
          0.06625542609092987,
          0.13548092300662554,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        district: [
          0.000048149312226997636,
          0.00006218278011225322,
          0.00016428835679463012,
          0.00026518415176276085,
          0.00017227291610865484,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        total: [
          0.00009629862445399527,
          0.00012436556022450644,
          0.00032857671358926024,
          0.0005303683035255217,
          0.0003445458322173097,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      }}
    ></DCDistrictTurnoutChart>
  )
}
