const zeroDecimalCurrencies = new Set([
    'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF',
    'KRW', 'MGA', 'PYG', 'RWF', 'UGX', 'VND',
    'VUV', 'XAF', 'XOF', 'XPF'
]);

export function toMinorUnits(amount: number, currency: string): number {

    const normalizedCurrency = currency.toUpperCase();

    if (zeroDecimalCurrencies.has(normalizedCurrency)) {
        return Math.round(amount);
    }

    return Math.round(amount * 100);
}