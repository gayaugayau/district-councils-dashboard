import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import DirectionIcon from '@material-ui/icons/Directions'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { withLanguage, customVoteStationMapping } from 'utils/helper'
import { COLORS } from 'ui/theme'
import { fireEvent } from 'utils/ga_fireevent'

const Container = styled.div`
   {
    padding: 16px;
    a {
      text-decoration: unset;
      color: ${COLORS.main.primary};
      font-weight: 500;
    }
  }
`

const VoteStationContainer = styled(Box)`
  && {
    background-color: #fafafa;
    padding: 6px 12px 8px;
    margin-bottom: 8px;
    svg {
      fill: ${COLORS.main.primary};
    }
  }
`
const VoteStation = styled(Grid)`
  && {
    align-items: center;
  }
`

const VoteStationName = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 600;
  }
`
class VoteStations extends Component {
  static propTypes = {
    stations: PropTypes.array.isRequired,
  }

  render() {
    const { stations, t } = this.props
    let reminder
    if (stations.length > 1) {
      reminder = (
        <Typography
          variant="body2"
          gutterBottom
          dangerouslySetInnerHTML={{ __html: t('vote_stations.note') }}
        />
      )
    }
    return (
      <Container>
        <Typography variant="h6" gutterBottom>
          {/* 主要屋邨 / 地區 */}

          {t('vote_stations.title')}
        </Typography>
        {/* <Box display="flex" flexWrap="wrap" alignContent="flex-start"> */}

        {stations
          .sort((a, b) => {
            if (a.station_code > b.station_code) return 1
            if (a.station_code < b.station_code) return -1
            return 0
          })
          .map((station, index) => (
            <VoteStationContainer key={index}>
              <VoteStation
                container
                spacing={1}
                onClick={() => {
                  fireEvent({
                    ca: 'battleground',
                    ac: 'click',
                    lb: `vote_station_${station.station_code}`,
                  })
                  const query =
                    customVoteStationMapping(station.station_code) ||
                    station.name_zh
                  window.open(`https://maps.google.com/?q=${query}`, '_blank')
                }}
              >
                <Grid item xs={11}>
                  <Typography variant="body2">
                    {station.station_code}
                  </Typography>
                  <VoteStationName>
                    {withLanguage(station.name_en, station.name_zh)}
                  </VoteStationName>
                  <Typography variant="body2">
                    {withLanguage(station.address_en, station.address_zh)}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <DirectionIcon />
                </Grid>
              </VoteStation>
            </VoteStationContainer>
          ))}
        {reminder}
      </Container>
    )
  }
}

export default withTranslation()(VoteStations)
