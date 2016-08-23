import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import weatherActions from '../actions/weather'
import WeatherSearch from '../components/WeatherSearch'

export function mapStateToProps (state) {
  return {...state.weather}
}

export function mapDispatchToProps (dispatch) {
  return {actions: bindActionCreators(weatherActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSearch)
