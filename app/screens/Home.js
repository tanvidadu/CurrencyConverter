import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
  }
  handlePressBaseCurrency = () => {
    console.log('Press Base');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  }
  handlePressQuoteCurrency = () => {
    console.log('Press Quote');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  }
  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  }
  handleSwapCurrencies = () => {
    this.props.dispatch(swapCurrency());
  }
  handleOptionsPress = () => {
    console.log('Options Pressed');
    this.props.navigation.navigate('Options');
  }
  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
            date={this.props.lastConvertedDate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrencies}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;
  const conversions = state.currencies.conversions[baseCurrency] || {};
  const rates = conversions.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversions.isFetching,
    lastConvertedDate: conversions.date ? new Date(conversions.date) : new Date(),
  };
};

export default connect(mapStateToProps)(Home);
