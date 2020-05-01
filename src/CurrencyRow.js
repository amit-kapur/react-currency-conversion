import React from 'react';

class CurrencyRow extends React.Component {

    render() {
        const { currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount } = this.props;
        return (
            <>
                <input
                    type="number"
                    className="input"
                    value={amount} 
                    onChange={onChangeAmount}
                    />
                <select
                    value={selectedCurrency}
                    onChange={onChangeCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </>
        );
    }
}

export default CurrencyRow;